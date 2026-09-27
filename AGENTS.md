# SMS Game Maker - Contexto y Reglas para el Agente (AGENTS.md)

Este repositorio (`sms-game-maker-doc`) contiene la **documentación oficial** desarrollada con [VitePress](https://vitepress.dev/) para el motor **SMS Game Maker**.

---

## 1. Relación de Proyectos

- **Proyecto de Documentación (Este repositorio):**
  - Ruta: `c:\Users\rault\dev\sms-game-maker-doc`
  - Tecnología: VitePress (Node.js, Markdown, Vue components).
  - Objetivo: Servir como guía y manual completo para usuarios y desarrolladores que crean videojuegos retro para SEGA Master System y SEGA Game Gear con SMS Game Maker.

- **Proyecto del Motor (Repositorio Hermano):**
  - Ruta: `c:\Users\rault\dev\sms-game-maker` (situado a la misma altura en `../sms-game-maker`).
  - Fuente de verdad técnica del motor: `c:\Users\rault\dev\sms-game-maker\AGENTS.md` (documento con todas las decisiones arquitectónicas, mecánicas, mapeo de memoria y pipeline).
  - Motor: C compilado con SDCC y SMSlib para Z80, con soporte de audio PSGlib (SN76489).
  - Herramientas: Pipeline automatizado en Python (`build_sms.py`, `config2sms.py`, `assets2sms.py`, `vgm2psg.py`, `psgcomp.py`, `ihx2sms.exe`), interfaz gráfica de escritorio con PyWebView (`src/gui/`) y editor visual de mapas web integrado.

---

> [!IMPORTANT]
> **REGLA DE TONO Y PÚBLICO OBJETIVO (CERO DETALLES TÉCNICOS INTERNOS):**
> La documentación y SMS Game Maker están orientados a **personas que NO tienen conocimientos de programación**.
> Queda terminantemente prohibido incluir detalles técnicos internos del motor o del compilador en las páginas de ayuda para usuarios, tales como:
> - Nombres de scripts de compilación internos (`assets2sms.py`, `config2sms.py`, `build_sms.py`, `ihx2sms`).
> - Números de tiles o direcciones de VRAM y ROM (`tiles 438..447`, `0x8000`, `BANK2`, `NameTable`, etc.).
> - Términos de bajo nivel de hardware o C (registros Z80, interrupciones scanline 175, llamadas a funciones C, buffers circulares).
> Explicar siempre todo de forma práctica, visual y sencilla: qué archivos crear, qué tamaños y formatos usar, qué hace cada botón en la aplicación y cómo funciona el juego para el creador.

---

## 3. Resumen Técnico del Motor (SMS Game Maker)

### 3.1. Soporte Multiplataforma Dual
1. **SEGA Master System (`--target sms`, ROM `.sms`):**
   - Resolución activa: 256×192 píxeles (32×24 tiles de 8×8).
   - Chunks de mapa: 32×22 tiles.
   - HUD: 32×2 tiles en filas 22 y 23, fijado mediante interrupción de línea (Scanline 175) con `SMS_setBGScrollX(0)`.
   - Máscara de columna izquierda: `VDPFEATURE_LEFTCOLBLANK` activada para evitar artefactos visuales en el borde derecho en scroll horizontal continuo.
   - Paleta: 2 paletas de 16 colores (16 fondo + 16 sprites) en formato CRAM de 6 bits (64 colores posibles, 2 bits por canal RGB).
2. **SEGA Game Gear (`--target gg`, ROM `.gg`):**
   - Resolución física LCD: 160×144 píxeles (20×18 tiles) centrada en el VDP (`SCREEN_OFFSET_X = 48`, `SCREEN_OFFSET_Y = 24`).
   - Chunks de mapa: 20×16 tiles (`maps_gg.tmx`).
   - HUD: 20×2 tiles en filas 16 y 17 (`hud_gg.tmx`), fijado con scroll X a 48 px.
   - Paleta: CRAM de 12 bits (4096 colores posibles, 4 bits por canal RGB `% 0x0BGR`).
   - Convención `_gg`: Al compilar con `--target gg`, el pipeline busca preferentemente archivos con sufijo `_gg` (`tiles_gg.png`, `sprites_gg.png`, `maps_gg.tmx`, `hud_gg.tmx`, etc.) con fallback a los assets estándar.

### 3.2. Estructura de Fases y Modularidad (`game/`)
El proyecto de juego está desacoplado del motor y se parametriza con `--game <ruta>`:
- `game/screens/`: Pantallas globales UI y marco común:
  - `title/` (`title.png`, `music.vgm`)
  - `intro/` (`intro.png`, `music.vgm`)
  - `gameover/` (`gameover.png`, `music.vgm`)
  - `ending/` (`ending.png`, `music.vgm`)
  - `hud/` (`hud.png`, `hud.tmx`, `hud_gg.tmx`)
- `game/stage_1/`, `game/stage_2/`, etc.: Fases independientes:
  - `maps.tmx` / `maps_gg.tmx` (mapa de Tiled)
  - `maps.tiled-project` (definición de tipos y propiedades)
  - `tiles.png` / `tiles_gg.png` (tileset de escenario 8×8)
  - `sprites.png` / `sprites_gg.png` (spritesheet 16×16)
  - `bullet.png` / `bullet_gg.png` (proyectil jugador)
  - `enemy_bullet.png` / `enemy_bullet_gg.png` (proyectil enemigo)
  - `music.vgm` / `music.psg` (música de la fase)

### 3.3. Pipeline Automatizado de Compilación
Coordinado por `src/build_sms.py` o por el backend de la GUI (`src/gui/builder.py`):
1. **Exportación Tiled:** Exporta mapas y HUD a JSON (`maps.json`, `hud.json`).
2. **Generación de Configuración (`config2sms.py`):** Agrupa tiles por comportamiento lógico (`tile_mapping.json`), define macros `#define` en `src/include/config.h` y genera tablas precalculadas en `src/config.c`.
3. **Generación de Gráficos y Pantallas (`assets2sms.py`):** Extrae paletas de 16 colores, reordena tiles en formato planar 4bpp, empaqueta sprites 8×16 (`SPRITEMODE_TALL`), reserva VRAM para proyectiles (tiles 438..447), compila pantallas completas con deduplicación y hardware flipping (H-Flip/V-Flip) en bancos de 16 KB independientes.
4. **Pipeline de Audio:** Conversión de `music.vgm` a PSG con `vgm2psg.py` y compresión con `psgcomp.py`. Asignación en bancos ROM paginados (Bank 7 para UI, Bank 8 para Stage 1, etc.).
5. **Compilación SDCC Z80:** `sdcc -c -mz80 --opt-code-size --debug` con reglas peephole personalizadas.
6. **Enlazado Multibanco:** Asignación automática de bancos paginados al Slot 2 (`0x8000`) según directivas `#pragma constseg BANK<N>`.
7. **Generación de ROM (.sms / .gg):** `ihx2sms.exe` crea la ROM con cabecera SEGA y checksum corregido en `dist/<Game Name>.sms` o `.gg`.

### 3.4. Mecánicas y Propiedades en Tiled
- **Física Analógica de Salto:** Punto fijo 8.8 (`protaVY`, `protaSubY`). Gravedad suave en ascenso con botón pulsado (`+0x0032`), gravedad fuerte al soltar ("short-hop", `+0x0090`), gravedad normal en caída (`+0x0058`).
- **Dash:** Impulso rápido horizontal (`DASH_ENABLED`, `dashAlwaysAvailable`).
- **Wall Jump:** Rebote en paredes (`wallJumpEnabled`).
- **Escaleras:** Agarre automático, gravedad cero, movimiento a 60 FPS sin sobrecarga (`laddersEnabled`).
- **Jetpack:** Propulsión continua con combustible dinámico (`jetPackFuel > 0`), estela de partículas de chispas en VRAM.
- **Disparo y Munición:** Proyectiles para jugador (`shooting`, `ammo`, `ammoIncrement`) y proyectiles para enemigos (`enemyShootEnabled`).
- **Plataformas Atravesables:** 3 tipos (`PLATFORM_TOP`, `PLATFORM_ALL`, `PLATFORM_BOTTOM`).
- **Bloques Rompibles:** Por disparo (`BREAKABLE_BY_BULLET`) o por contacto con temporizador (`useBreakableTileByTouch`, `useBreakableTileByTouchFrames`). Al destruirse o recoger items se reemplazan por el tile superior (`y - 1`) para conservar el fondo visual.
- **Puertas:** Puertas de llaves (`TILE_DOOR_KEYS`), puertas de recolección de items (`itemsToOpenDoors`), puertas por eliminación de enemigos (`TILE_DOOR_ENEMIES`).
- **Enemigos:** Movimiento lineal (`default`), rectangular, acosador (`stalker`), misil unidireccional (`noReturn`), con opción de disparo (`WithShot`), paralización al mirarlo (`freezeOnSight`), eliminación por salto sobre cabeza (`killJumpingOnTop`).
- **Objetivos de Victoria:** Por recolección de items (`items`), por jefe (`killSpecificEnemy`), o mixto (`itemsAndKillEnemy`).

---

## 4. Estructura y Plan de Documentación (`sms-game-maker-doc`)

El sitio de documentación está estructurado en `doc/`:
- `00_Overview/`: Presentación del motor, filosofía cero valores fijos, créditos.
- `01_install/`: Requisitos (SDCC, Tiled, emuladores Emulicious y Mesen 2), instalación de SMS Game Maker Studio.
- `02_images/`: Especificaciones de gráficos:
  - Formatos PNG, paletas de 16 colores SMS (6-bit) y GG (12-bit). Editor recomendado: **LibreSprite** (`image-editor.md`).
  - Pantallas completas (Title, Intro, GameOver, Ending) y límites de VRAM (máx. 448 tiles con deduplicación y flip).
  - Tileset de fase (`tiles.png`, `tiles_gg.png`): tiles 8×8, tiles de colisión, decorados y animados.
  - Spriteset (`sprites.png`, `sprites_gg.png`): sprites 16×16 (modo alto 8×16 hardware), orden de animaciones (caminar yo-yo, salto, escaleras, idle).
  - Balas (`bullet.png`, `enemy_bullet.png`).
- `03_tiled/`: Diseño del juego en Tiled:
  - Configuración general y propiedades del mapa.
  - Creación de fases y chunks (SMS 32×22, GG 20×16).
  - Capas de mapa (`layer` de colisiones, decorado, objetos).
  - Enemigos, rutas, plataformas móviles, llaves, puertas, items.
  - Modo arcade, modo vidas, localización de textos.
- `04_sound/`: Sistema de sonido:
  - Chip SN76489 PSG y biblioteca PSGlib.
  - Efectos de sonido (SFX): síntesis de pasos en hardware PSG.
  - Música: formato VGM exportado desde DefleMask / Furnace / BambooTracker o trackers compatibles, conversión automática a PSG (`vgm2psg.py`) y compresión (`psgcomp.py`).
- `05_engine/`: Uso de SMS Game Maker:
  - Interfaz gráfica PyWebView (`gui.bat` y `SMSGameMakerStudio.exe`).
  - Selector de fase contextual, apertura directa de mapa en Tiled, apertura de carpeta de stage, modal de configuración de parámetros de fase.
  - Compilación dual: botón "⚡ Compilar SMS" y botón "🎮 Compilar GG".
  - Emulación y depuración: Emulicious (símbolos C `.cdb`/`.noi` y CPU profiler) y Mesen 2 (VDP, scanlines y VRAM).

> [!NOTE]
> La documentación antigua que contenía referencias al ZX Spectrum (beeper, TAP, Vortex Tracker, ZX Paintbrush, etc.) debe ser sistemáticamente sustituida y modernizada con la terminología y especificaciones reales de SEGA Master System y Game Gear descritas arriba.
