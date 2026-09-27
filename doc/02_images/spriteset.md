---
title: Gráficos. Personajes y Enemigos (Spriteset)
description: Cómo crear y organizar la imagen sprites.png con las animaciones del protagonista y los enemigos
---

# Personajes y Enemigos (`sprites.png`)

La imagen **`game/stage_1/sprites.png`** contiene los dibujos de todos los personajes que se mueven por la pantalla: el protagonista, sus animaciones al caminar o saltar, las plataformas móviles y los enemigos.

---

## 1. Tamaño y Características de la Imagen

* **Tamaño del archivo:** Imagen PNG de **256×48 píxeles**.
* **Tamaño de cada personaje:** Cada personaje mide **16×16 píxeles** (hay 16 casillas por fila y 3 filas en total).
* **Fondo transparente:** Todo lo que rodea a los personajes debe ser transparente para que se vea el escenario por detrás.

<div class="pixel-art-box">
  <img src="/images/sprites.png" alt="Spriteset de personajes y enemigos (ampliado 3x)" style="width: 100%; max-width: 768px; height: auto;" />
</div>

---

## 2. Organización de las 3 Filas de Personajes

Para que el juego sepa qué dibujo usar en cada momento, los sprites están ordenados en 3 filas:

```
Fila 1 (Casillas  0 al 15): Protagonista, plataformas móviles, escaleras y explosión
Fila 2 (Casillas 16 al 31): Enemigos caminando hacia la DERECHA (8 tipos × 2 dibujos cada uno)
Fila 3 (Casillas 32 al 47): Enemigos caminando hacia la IZQUIERDA (8 tipos × 2 dibujos cada uno)
```

---

## 3. ¿Qué Va en Cada Casilla de la Primera Fila?

* **Casillas 0, 1 y 2:** El protagonista **caminando hacia la derecha** (3 dibujos de animación paso a paso).
* **Casilla 3:** El protagonista **saltando hacia la derecha**.
* **Casillas 4, 5 y 6:** El protagonista **caminando hacia la izquierda**.
* **Casilla 7:** El protagonista **saltando hacia la izquierda**.
* **Casillas 8 y 9:** Los dibujos de la **plataforma móvil** (la plataforma que lleva al jugador encima).
* **Casillas 10 y 11:** El protagonista **subiendo o bajando escaleras** (2 dibujos de escalada).
* **Casillas 12 y 13:** Animación **quieto / idle** (cuando el personaje pasa unos segundos sin moverse, mira al frente y parpadea).
* **Casilla 14:** Sprite de **lápida / muerte** (si en las opciones activas el modo de vidas con cementerio).
* **Casilla 15:** La animación de **explosión** que aparece cuando derrotas a un enemigo.

---

## 4. Las Filas de Enemigos (Filas 2 y 3)

Puedes incluir hasta **8 enemigos distintos** en tu fase:
* Cada enemigo tiene **2 dibujos de animación** para cuando camina hacia la derecha (en la fila 2).
* Y sus correspondientes **2 dibujos** cuando camina hacia la izquierda (en la fila 3).

> [!TIP]
> **Enemigos que solo van en una dirección (tipo misil o proyectil):**
> Si configuras un enemigo de tipo `noReturn` (unidireccional), el primer dibujo se usará como punto de disparo/salida, el segundo como el proyectil en vuelo y el tercero como el impacto al final del camino.
