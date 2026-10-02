---
title: Gráficos. Tileset de Escenario
description: Cómo crear el archivo tiles.png y para qué sirve cada casilla del escenario
---

# Tileset de Escenario (`tiles.png`)

Para diseñar el escenario de cada fase (suelos, muros, escaleras, plataformas, puertas, items y decorado), cada nivel cuenta con su archivo **`tiles.png`** (por ejemplo, `game/stage_1/tiles.png`).

---

## 1. Tamaño y Distribución

* **Tamaño del archivo:** Es una imagen PNG de **256×48 píxeles**.
* **Cuadrícula:** Contiene **192 casillas de 8×8 píxeles** (32 casillas de ancho por 6 casillas de alto).
* Cada casilla tiene una función o comportamiento concreto en el juego.

<div class="pixel-art-box">
  <img src="/images/tiles.png" alt="Tileset de escenario (ampliado 3x)" style="width: 100%; max-width: 768px; height: auto;" />
</div>

---

## 2. Para Qué Sirve Cada Casilla

Para que sea muy fácil crear tu escenario, los bloques están organizados por tipos:

* **Casilla 0 (La primera):**
  Es el **fondo vacío / aire**. Es la casilla que se usa para dejar zonas por las que el personaje puede pasar libremente.
* **Casillas del 1 al 58 (Sólidos):**
  Son los **muros y suelos estándar**. El protagonista, los enemigos y los disparos no pueden atravesarlos.
* **Casilla 59 (Bloque que se Rompe al Pisarlo):**
  Si el personaje se para encima de él, tras unos instantes se romperá y caerá al vacío.
* **Casilla 60 (Bloque que se Rompe al Disparar):**
  Se destruye al recibir el impacto de un disparo del jugador.
* **Casilla 61 (Puerta de Ítems):**
  Se abre automáticamente cuando el jugador recoge la cantidad de ítems configurada en la fase.
* **Casilla 62 (Puerta de Llave):**
  Para abrirla, el jugador debe tocarla teniendo al menos una llave recogida. Se gastará 1 llave y la puerta desaparecerá para siempre.
* **Casilla 63 (Puerta de Enemigos):**
  Se abre automáticamente cuando eliminas a todos los enemigos de la habitación.
* **Casillas del 64 al 69 (Plataformas Atravesables):**
  Plataformas que puedes atravesar saltando desde abajo o dejándote caer pulsando **Abajo**.
* **Casillas del 70 al 73 (Escaleras):**
  Al tocarlas, el personaje se agarra automáticamente y puedes subir o bajar con las flechas de dirección.
* **Casillas del 74 al 185 (Decorados de Fondo y Trampas):**
  Zonas decorativas que no bloquean el paso (ventanas, cielos, columnas...).
  * Si marcas una casilla como **`damage`**, actuará como trampa (pinchos, fuego) restando salud al tocarla.
  * Si la marcas como **`animated`**, el juego alternará entre esa casilla y la siguiente para crear movimiento (antorchas, agua).
* **Casillas del 186 al 191 (Objetos Recogibles):**
  * **186:** Muestra un cartel o texto en pantalla.
  * **187:** Munición para recargar disparos.
  * **188:** Habilidad de carrera rápida (Dash).
  * **189:** Ítem de Vida que recupera salud.
  * **190:** Ítem coleccionable de la fase.
  * **191:** Llave para abrir puertas cerradas.

> [!TIP]
> **Detalle visual:**
> Cuando el personaje recoge un ítem o llave del mapa, el juego no deja un hueco negro: copia automáticamente el dibujo de la casilla que tiene justo encima para que el fondo del escenario quede siempre uniforme y bonito.
