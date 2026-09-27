---
title: Documentación de SMS Game Maker
description: Guía completa y manual de referencia para SEGA Master System y Game Gear
---

# Documentación de SMS Game Maker

Bienvenido a la documentación oficial de **SMS Game Maker**, la herramienta integral para crear videojuegos de plataformas y acción para **SEGA Master System** y **SEGA Game Gear**.

---

## 1. Visión General y Primeros Pasos

- [Cómo empezar](./01_install/getting-started): Guía rápida paso a paso para descargar el ejemplo base y arrancar tu juego.
- [Herramientas e Instalación](./01_install/install): Compilador SDCC, editores de mapas, emuladores y LibreSprite.
- [Créditos y Agradecimientos](./00_Overview/credits)

---

## 2. Gráficos y Especificaciones VDP

- [Pantallas Completas](./02_images/screens): Title, Intro, GameOver y Ending (VRAM, deduplicación y hardware flipping).
- [Editor de Imágenes y Paletas](./02_images/image-editor): Editor recomendado (LibreSprite), paletas CRAM de 6 y 12 bits y canal alfa.
- [Tilesets de Escenario](./02_images/tileset): Patrones de 8×8, bloques sólidos, escaleras, daño y tiles animados.
- [Spritesets](./02_images/spriteset): Sprites de 16×16 en modo alto 8×16 hardware (`SPRITEMODE_TALL`), animaciones y estados.
- [Proyectiles](./02_images/bullet): Balas del protagonista y balas de enemigos (reserva en VRAM).

---

## 3. Diseño del Juego (Editor Integrado y Tiled)

> 💡 **Recomendación:** Descarga el **[Proyecto Base de Ejemplo (.ZIP)](https://github.com/rtorralba/sms-game-maker-game-example/archive/refs/heads/main.zip)** para no tener que empezar desde cero.

- [Introducción al Diseño de Mapas](./03_tiled/overview): Editor visual integrado y Tiled Map Editor.
- [Configuración General de la Fase](./03_tiled/general-configuration): Propiedades del juego, vidas, gravedad y flags.
- [Crear el Mapa](./03_tiled/create-map): Dimensiones por plataforma (SMS: 32×22, GG: 20×16) y chunks.
- [Preferencias del Proyecto](./03_tiled/preferences): Estructura de carpetas (`stage_X/`) y tipos personalizados.
- [Gestión de Tilesets](./03_tiled/tilesets): Capas de mapa (`Map`) y capas de entidades (`Sprites`).
- [Dibujar el Escenario](./03_tiled/drawing-map): Colocación de bloques, decorados y atajos de edición.
- [Añadir Enemigos](./03_tiled/adding-enemies): Patrones de patrulla, acosadores, misiles y parámetros de vida/velocidad.
- [Añadir Objetos](./03_tiled/adding-objects): Items, llaves, vidas, munición y puertas.
- [Añadir Plataformas Móviles](./03_tiled/adding-platforms): Plataformas que transportan al jugador.
- [Modo Arcade](./03_tiled/arcade-mode): Mecánicas clásicas de contrarreloj y bonus.
- [Modo Vidas y Respawn](./03_tiled/lives-mode): Reaparición instantánea o pantalla de cementerio.
- [Localización de Textos](./03_tiled/localization): Cuadros de diálogo y textos multilingües (Español, Inglés, Portugués).

---

## 4. Sonido y Música (PSG SN76489)

- [Efectos de Sonido (SFX)](./04_sound/fx): Síntesis por hardware PSG y modulación por pasos.
- [Música de Juego y Pantallas](./04_sound/music): Pistas VGM, conversión a PSG (`vgm2psg.py`), compresión (`psgcomp.py`) y asignación multibanco.

---

## 5. Uso del Motor

- [Interfaz Gráfica de SMS Game Maker Studio](./05_engine/use): Selector de fases, apertura directa de mapas, editor web integrado, modal de configuración contextual y botones de compilación dual SMS / Game Gear.
