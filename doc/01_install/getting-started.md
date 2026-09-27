---
title: Cómo Empezar
description: Guía rápida paso a paso para poner en marcha tu primer juego partiendo del proyecto de ejemplo
---

# Cómo Empezar: Tu Primer Juego Paso a Paso

Para crear tu propio videojuego en **SMS Game Maker**, la forma más rápida y recomendada es **partir del proyecto base de ejemplo**, que ya viene completamente configurado con toda la estructura de carpetas, pantallas, tilesets, personajes y mapas listos para probar y modificar.

---

## 1. Los 4 Pasos Básicos

### Paso 1: Descargar e Instalar SDCC
**SDCC** es el compilador necesario para generar la ROM de tu juego:
1. Descarga el instalador para Windows desde [sdcc.sourceforge.net](https://sdcc.sourceforge.net/).
2. Ejecuta el instalador y asegúrate de dejar marcada la opción **"Add to PATH"** (marcada por defecto).

### Paso 2: Descargar SMS Game Maker Studio
Es el programa desde donde controlarás todo tu proyecto:
1. Descarga la versión ejecutable desde [juntelart.itch.io/sms-game-maker](https://juntelart.itch.io/sms-game-maker).
2. Descomprime el archivo en la carpeta que prefieras de tu ordenador.

### Paso 3: Descargar y Descomprimir el Proyecto de Ejemplo
Para no tener que crear carpetas ni configurar archivos desde cero, descarga la plantilla oficial:
* 📥 **[Descargar Proyecto Base de Ejemplo (.ZIP)](https://github.com/rtorralba/sms-game-maker-game-example/archive/refs/heads/main.zip)**
* Descomprime el archivo ZIP en tu ordenador (obtendrás una carpeta con el juego de ejemplo).

### Paso 4: Abrir el Proyecto y Modificarlo
1. Abre **`SMSGameMakerStudio.exe`** (o ejecuta `gui.bat`).
2. En la aplicación, haz clic en **«Abrir Proyecto»** y selecciona la carpeta del ejemplo que acabas de descomprimir.
3. Haz clic en **«🗺️ Abrir Mapa»** para ver y modificar las pantallas del nivel en el editor visual.
4. Pulsa **«⚡ Compilar SMS»** o **«🎮 Compilar GG»** para generar tu primera ROM en la carpeta `dist/`.

---

## 2. Estructura del Proyecto de Juego

Al descomprimir el proyecto de ejemplo, encontrarás una estructura limpia y organizada:

```
proyecto_juego/
├── screens/               # Pantallas globales y marcador de interfaz
│   ├── title/             # Pantalla de título (title.png, title_gg.png, music.vgm)
│   ├── intro/             # Introducción de historia opcional (intro.png, music.vgm)
│   ├── gameover/          # Pantalla de fin de partida (gameover.png, music.vgm)
│   ├── ending/            # Pantalla de victoria / créditos (ending.png, music.vgm)
│   └── hud/               # Gráficos del marcador (hud.png) y marcas de posición (hud.tmx)
├── stage_1/               # Fase 1 del juego
│   ├── maps.tmx           # Mapa del nivel para SEGA Master System
│   ├── maps_gg.tmx        # Mapa adaptado para SEGA Game Gear
│   ├── maps.tiled-project # Definición de tipos, propiedades y clases del nivel
│   ├── tiles.png          # Tileset de escenario (bloques de 8x8 px: suelos, muros, puertas, items)
│   ├── sprites.png        # Spriteset de personajes y enemigos (16x16 px)
│   ├── bullet.png         # Sprite de la bala del jugador (32x8 px)
│   ├── enemy_bullet.png   # Sprite de la bala enemiga (8x8 px)
│   └── music.vgm          # Música de fondo de la fase 1 (opcional)
└── stage_2/               # Siguientes fases (cada una con su propio mapa, gráficos y música)
```

---

## 3. ¿Qué Hace Cada Carpeta y Archivo?

### Carpeta `screens/` (Pantallas Globales)
Contiene las imágenes de interfaz comunes a todo el juego:
* **`title/`:** La portada que aparece al encender la consola.
* **`intro/`:** La pantalla que se muestra antes del primer nivel para contar la historia o dar instrucciones.
* **`gameover/`:** La pantalla de derrota cuando se agotan las vidas.
* **`ending/`:** La pantalla final de felicitación o créditos al terminar la última fase.
* **`hud/`:** El marco inferior del marcador (`hud.png`) y el archivo `hud.tmx` donde colocas la posición de los números de vidas, munición, llaves e ítems.

### Carpetas de Fases (`stage_1/`, `stage_2/`...)
Cada fase es independiente y modular, lo que te permite tener ambientaciones, enemigos y músicas completamente diferentes en cada nivel:
* **`maps.tmx` / `maps_gg.tmx`:** Es el archivo del mapa donde se colocan los bloques del escenario, las plataformas, las llaves y los enemigos.
* **`tiles.png`:** La hoja de dibujo con los 192 bloques de 8×8 píxeles que forman los suelos, muros, escaleras y objetos recogibles.
* **`sprites.png`:** La hoja con los dibujos de 16×16 píxeles del protagonista (caminar, saltar, escaleras, idle), plataformas móviles y hasta 8 tipos de enemigos.
* **`bullet.png` / `enemy_bullet.png`:** Los gráficos de los disparos del jugador y de los enemigos.
* **`music.vgm`:** La pista de música de fondo en formato chiptune que sonará mientras juegas este nivel.

---

## 4. Próximos Pasos

Una vez tengas el ejemplo abierto en SMS Game Maker Studio:
* Consulta la sección **[Editor de Imágenes y Colores](/doc/02_images/image-editor)** para personalizar tus personajes con LibreSprite.
* Consulta **[Diseñando el Juego](/doc/03_tiled/overview)** para aprender a pintar tus mapas y colocar enemigos con sus rutas de movimiento.
