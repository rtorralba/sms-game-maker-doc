---
title: Gráficos. Pantallas Completas y HUD
description: Qué pantallas puedes añadir a tu juego, qué tamaños usar y cómo personalizar el marcador (HUD)
---

# Pantallas Completas y Marcador (HUD)

En tu juego puedes personalizar todas las pantallas principales (el menú de inicio, la introducción, el fin de partida, el final del juego...) y el marcador que muestra las vidas y los objetos en la parte inferior mientras juegas.

Todas estas imágenes se guardan dentro de la carpeta `game/screens/` en formato **PNG**.

---

## 1. Pantalla de Título (`game/screens/title/title.png`)

Es la pantalla principal que aparece nada más encender el juego o reiniciar la partida. El jugador pulsa el **Botón 1** o **Botón 2** para comenzar a jugar. Puedes acompañarla de su propia canción (`music.vgm`).

<div class="pixel-art-box">
  <img src="/images/title.png" alt="Pantalla de Título" style="width: 100%; max-width: 512px; height: auto;" />
</div>

---

## 2. Pantalla de Introducción (`game/screens/intro/intro.png`) [Opcional]

Aparece justo antes de comenzar la primera fase. Puedes usarla para contar la historia del juego, mostrar los controles o dar la bienvenida.
* Al pulsar cualquier botón, el jugador pasará de inmediato a la partida.
* Si no quieres incluir una introducción en tu juego, simplemente no pongas esta imagen y el juego arrancará directamente.

<div class="pixel-art-box">
  <img src="/images/intro.png" alt="Pantalla de Introducción" style="width: 100%; max-width: 512px; height: auto;" />
</div>

---

## 3. Pantalla de Fin de Partida (`game/screens/gameover/gameover.png`) [Opcional]

Aparece cuando el personaje pierde todas sus vidas o energía. Al pulsar cualquier botón, el juego vuelve automáticamente a la pantalla de título.

<div class="pixel-art-box">
  <img src="/images/gameover.png" alt="Pantalla de Game Over" style="width: 100%; max-width: 512px; height: auto;" />
</div>

---

## 4. Pantalla de Victoria / Final (`game/screens/ending/ending.png`)

Se muestra cuando el jugador supera con éxito la última fase del juego y cumple los objetivos de victoria. Puedes añadirle música de créditos (`music.vgm`).

<div class="pixel-art-box">
  <img src="/images/ending.png" alt="Pantalla de Victoria" style="width: 100%; max-width: 512px; height: auto;" />
</div>

---

## 5. El Marcador del Juego (HUD)

El marcador es la franja situada en la parte inferior de la pantalla mientras juegas:

<div class="pixel-art-box">
  <img src="/images/hud.png" alt="Marcador HUD de Master System (ampliado 3x)" style="width: 100%; max-width: 768px; height: auto;" />
</div>

### Cómo Mover los Elementos del Marcador
Puedes cambiar de sitio el número de vidas, las llaves, la munición, etc. de forma completamente visual:

1. Abre el archivo **`game/screens/hud/hud.tmx`** con Tiled o en tu editor de mapas.
2. En la capa de objetos verás unas letras de colores que marcan dónde se dibuja cada dato:
   * **`L`:** Posición del número de **Vidas / Salud**.
   * **`A`:** Posición del número de **Munición**.
   * **`K`:** Posición del número de **Llaves**.
   * **`I`:** Posición del número de **Ítems** recogidos.
   * **`F`:** Posición del combustible del **Jetpack**.
   * **`S`:** Posición de la **Puntuación** (Score).
   * **`M`:** Posición de los **Mensajes** de ayuda o texto.
3. Arrastra la letra a la casilla del marcador donde quieras que aparezca ese número y guarda el archivo.

---

## 6. Tamaños Recomendados: Master System y Game Gear

* **SEGA Master System:** Las pantallas completas miden **256×192 píxeles** (y el HUD mide 256×16 píxeles).
* **SEGA Game Gear:** La pantalla de Game Gear es más pequeña (**160×144 píxeles**):
  * Si dejas tus imágenes en 256×192 píxeles, el programa las centrará automáticamente en la pantalla de Game Gear.
  * Si prefieres que encajen al milímetro en Game Gear, puedes crear una versión de 160×144 píxeles añadiendo `_gg` al nombre (por ejemplo, `title_gg.png` o `hud_gg.png`).
