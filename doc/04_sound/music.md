---
title: Sonido. Música de Fondo (VGM)
description: Cómo añadir canciones a tu juego y programas recomendados para componer chiptune
---

# Música de Fondo (`music.vgm`)

Puedes ponerle música a cada pantalla de menú y a cada nivel de tu juego de forma muy sencilla.

---

## 1. Dónde Colocar Tus Canciones

Solo tienes que guardar tus archivos de música en formato **`.vgm`** en las carpetas correspondientes:

* **Música del Menú de Inicio:** `game/screens/title/music.vgm`
* **Música de la Introducción:** `game/screens/intro/music.vgm` [Opcional]
* **Música de Fin de Partida (Game Over):** `game/screens/gameover/music.vgm` [Opcional]
* **Música de Victoria (Final del juego):** `game/screens/ending/music.vgm`
* **Música de la Fase 1:** `game/stage_1/music.vgm`
* **Música de la Fase 2:** `game/stage_2/music.vgm` (y así en cada nivel)

> [!TIP]
> **Todo es automático:**
> No tienes que convertir nada a mano. Simplemente copia tu archivo `music.vgm` en la carpeta y SMS Game Maker lo adaptará y comprimirá automáticamente al compilar la ROM de tu juego.

---

## 2. Cómo Componer o Conseguir Música

Para crear tus propias canciones para el chip de sonido de Master System y Game Gear, existen programas gratuitos y muy populares entre la comunidad chiptune:

* **[Furnace Tracker](https://github.com/tildearrow/furnace) (Recomendado):** Un tracker gratuito, moderno y muy potente.
* **[DefleMask](https://www.deflemask.com/):** Muy utilizado por músicos retro.
* **[BambooTracker](https://bambootracker.github.io/):** Sencillo y ligero.

### Cómo exportar la canción:
1. En tu programa de música, selecciona el sistema de sonido **Sega Master System (SN76489)**.
2. Compón tu melodía usando los 3 canales de tono y el canal de percusión/ruido.
3. Al terminar, ve al menú **Archivo ➔ Exportar** y guarda la canción en formato **VGM (`.vgm`)**.

---

## 3. Cambiar de Canción dentro de un Nivel (`♫`)

Si quieres que la música cambie cuando el jugador llegue a una zona concreta (por ejemplo, al entrar en la guarida del jefe):

* **En el Editor de Mapas Integrado:** Selecciona la herramienta **Música (`♫` o tecla M)** en la barra de herramientas y haz clic en la habitación donde quieras que empiece a sonar la nueva música.
* **En Tiled:** Añade un objeto de clase `music2` o `music3` en la pantalla deseada.
