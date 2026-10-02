---
title: Instalación y Requisitos
description: Guía de instalación y configuración de herramientas para SMS Game Maker
---

# Guía de Instalación y Primeros Pasos

Para empezar a crear tus propios juegos con **SMS Game Maker**, solo necesitas tener instaladas unas pocas herramientas en tu equipo.

---

## 1. SMS Game Maker

Es el programa principal desde donde gestionarás tus fases, configurarás las opciones y generarás la ROM de tu juego con un solo clic.

* **Descarga oficial:** [juntelart.itch.io/sms-game-maker](https://juntelart.itch.io/sms-game-maker)
* **Cómo usarlo:** Solo tienes que descomprimir el archivo y hacer doble clic sobre **`SMSGameMaker.exe`**. No necesitas instalar Python ni nada adicional.
* **Proyecto de ejemplo base:** Puedes descargar una plantilla de juego completa lista para modificar desde [aquí (ZIP)](https://github.com/rtorralba/sms-game-maker-game-example/archive/refs/heads/main.zip).

---

## 2. SDCC (Compilador)

**SDCC** es el programa que se encarga de convertir todo tu juego (mapas, imágenes, música y reglas) en la ROM final que funciona en la consola o emulador.

* **Descarga oficial:** [sdcc.sourceforge.net](https://sdcc.sourceforge.net/)
* **Instalación en Windows:**
  1. Descarga el instalador para Windows (ej. `sdcc-4.x.x-x64-setup.exe`).
  2. Ejecuta el instalador y deja marcada la opción **"Add to PATH"** (viene marcada por defecto).
  3. ¡Listo! SMS Game Maker detectará automáticamente el compilador al abrir el programa y mostrará un piloto verde con la versión instalada.

---

## 3. Editor de Mapas

Para diseñar las pantallas y colocar los bloques y enemigos, tienes dos alternativas:

### Opción A: Editor Integrado (SMS Game Maker)
Viene incluido dentro del propio programa. Al hacer clic en **«🗺️ Editor de Mapa»** en la fase que quieras editar, se abrirá el editor web integrado donde puedes dibujar directamente con el ratón.

### Opción B: Tiled Map Editor
Si prefieres un editor externo muy potente para diseño de mapas de videojuegos:
* **Descarga oficial:** [mapeditor.org](https://www.mapeditor.org/)
* SMS Game Maker detecta si tienes Tiled instalado y te permite abrir tus fases con un solo clic.

---

## 4. Emuladores para Probar tus Juegos

Para jugar y probar tus juegos en el ordenador antes de pasarlos a una consola real:

* **[Emulicious](https://emulicious.net/) (Recomendado):** Un emulador muy rápido, fiel al hardware original y perfecto para probar juegos tanto de Master System como de Game Gear.
* **[Mesen 2](https://mesen.ca/):** Excelente emulador con múltiples opciones de visualización retro y filtros de imagen.

---

## 5. Editor de Gráficos

Para dibujar tus propios personajes, enemigos y bloques de escenario:

* **[LibreSprite](https://libresprite.github.io/) (Recomendado):** Una aplicación gratuita, abierta y pensada especialmente para hacer pixel art retro y guardar con fondo transparente.
* También puedes usar **Aseprite**, **Photoshop** o **GIMP** dibujando siempre en formato **PNG**.
