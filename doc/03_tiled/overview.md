---
title: Diseñando el Juego. Introducción al Diseño de Fases
description: Guía de diseño de niveles con Tiled y el Editor de Mapas Integrado de SMS Game Maker
---

# Diseñando el Juego: Tiled y Editor Integrado

En **SMS Game Maker**, el diseño de niveles es visual y desacoplado del motor en C:
* Cada fase reside en su propia carpeta `game/stage_1/`, `game/stage_2/`, etc.
* Puedes diseñar y editar tus mapas utilizando dos herramientas plenamente integradas:
  1. **El Editor de Mapas Integrado** (directamente en la interfaz de SMS Game Maker Studio).
  2. **Tiled Map Editor** (herramienta externa avanzada con proyecto `.tiled-project`).

> [!TIP]
> ### 📦 Proyecto Base de Ejemplo (Muy Recomendado)
> Para empezar a crear tu juego, lo ideal y lo que **más te recomendamos** es partir del **proyecto de ejemplo base**, que ya cuenta con toda la estructura de carpetas, pantallas, tiles, sprites y mapas listos para modificar a tu gusto:
>
> 📥 **[Descargar Proyecto Base de Ejemplo (.ZIP)](https://github.com/rtorralba/sms-game-maker-game-example/archive/refs/heads/main.zip)**
>
> Solo tienes que descargarlo, descomprimirlo y abrirlo en SMS Game Maker Studio (o sustituir los archivos en tu carpeta `game/`).


---

## 1. El Editor de Mapas Integrado

SMS Game Maker Studio incorpora un **editor visual de mapas web** completo y reactivo, accesible pulsando el botón **«🗺️ Abrir Mapa»** en la tarjeta de la fase:

![](/images/logo.png)

### Características del Editor Integrado:
* **Herramientas de Dibujo:**
  * **Pincel (B):** Pinta tiles de fondo o sitúa entidades de sprites.
  * **Relleno / Cubo (F):** Rellena áreas contiguas con el tile seleccionado.
  * **Borrador (E):** Limpia casillas restableciendo el tile de fondo 0.
  * **Puntero / Destino (P):** Coloca hitos de destino para patrullas de enemigos o plataformas móviles.
  * **Música (♫ / M):** Coloca disparadores de cambio de pista musical.
  * **Texto (📝 / T):** Coloca activadores de cuadros de diálogo multilingüe.
  * **Previsualización de Animación:** Botón de reproducción para ver en vivo la cadencia de los tiles animados (`animated`).
* **Zoom Multirango (25% a 800%):**
  * Vista panorámica (25%, 50%, 75%) para contemplar fases completas de decenas de pantallas.
  * Vista 1:1 (100%) y vistas detalladas de precisión (150%, 200%, 300%, 400%, 800%). Atajo `Ctrl + Rueda` o teclas `+`/`-`.
* **Gestión de Pantallas / Chunks:**
  * Botones `➕` y `➖` en los cuatro bordes (Izquierda, Derecha, Arriba, Abajo) para expandir o recortar pantallas sin tener que reconfigurar manualmente las dimensiones.
* **Control de Cambios sin Guardar (Dirty Guard):**
  * Si realizas cambios y cierras la ventana, el sistema te avisa con un diálogo modal para evitar pérdidas accidentales. Guarda en cualquier momento con `Ctrl + S`.

---

## 2. Tiled Map Editor

Si prefieres trabajar con **Tiled**, SMS Game Maker incluye el archivo de proyecto configurado:
* Ruta: `game/stage_X/maps.tiled-project`
* Mapa Master System: `game/stage_X/maps.tmx`
* Mapa Game Gear: `game/stage_X/maps_gg.tmx`

### Dimensiones por Pantalla (Chunks)

| Plataforma | Resolución Activa | Tamaño del Chunk de Mapa | HUD Fijo |
| :--- | :--- | :--- | :--- |
| **SEGA Master System** | 256×192 px | **32 tiles de ancho × 22 tiles de alto** | Filas 22 y 23 (32×2 tiles) |
| **SEGA Game Gear** | 160×144 px | **20 tiles de ancho × 16 tiles de alto** | Filas 16 y 17 (20×2 tiles) |

> [!IMPORTANT]
> **Fases con Scroll Horizontal:**
> Un nivel puede estar compuesto por múltiples pantallas en horizontal (por ejemplo, 64×22 para 2 pantallas, 96×22 para 3 pantallas, etc.). El motor de scroll de Master System desplaza la cámara en tiempo real siguiendo al protagonista a 60 FPS y hace streaming dinámico de columnas hacia la VRAM durante el VBlank.