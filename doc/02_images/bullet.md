---
title: Gráficos. Proyectiles y Balas
description: Cómo crear las imágenes de las balas y cómo funciona el sistema de disparo en el juego
---

# Proyectiles y Balas (`bullet.png` y `enemy_bullet.png`)

En tus juegos puedes hacer que tanto el personaje principal como los enemigos puedan disparar. Para ello, cada fase cuenta con sus propias imágenes de proyectiles.

---

## 1. La Bala del Jugador (`bullet.png`)

Esta imagen representa el proyectil que dispara el protagonista al pulsar el **Botón 1** del mando:

* **Ubicación:** En la carpeta de la fase (por ejemplo, `game/stage_1/bullet.png`).
* **Tamaño:** Una imagen PNG de **32×8 píxeles** con fondo transparente, que contiene 4 casillas de 8×8 píxeles:
  * **Casilla 1:** Bala cuando el personaje dispara hacia la **derecha**.
  * **Casilla 2:** Bala cuando el personaje dispara hacia la **izquierda**.
  * **Casillas 3 y 4:** Disponibles si se configuran disparos en otras direcciones.

<div class="pixel-art-box">
  <img src="/images/bullet.png" alt="Bala del jugador (ampliada 8x)" style="width: 256px; height: 64px;" />
</div>

### ¿Cómo funciona en el juego?
* **Disparo:** El jugador dispara pulsando el **Botón 1** (el Botón 2 se utiliza para saltar).
* **Munición:** Si en la configuración de la fase tienes activada la munición limitada, cada disparo gastará una bala. Al llegar a cero, el personaje no podrá disparar hasta que recoja un ítem de munición en el mapa. Si la munición está en `-1`, el disparo será infinito.
* **Impacto con Enemigos:** Si la bala golpea a un enemigo, le resta vida. Si le quita toda su energía, el enemigo es destruido.
* **Bloques Rompibles:** Si disparas contra un bloque rompible del escenario, el bloque se destruirá abriendo camino.
* **Muros Sólidos:** Si la bala choca contra una pared, techo o puerta cerrada, desaparecerá sin atravesarla.

---

## 2. La Bala de los Enemigos (`enemy_bullet.png`)

Es la imagen del proyectil que disparan los enemigos:

* **Ubicación:** `game/stage_1/enemy_bullet.png`.
* **Tamaño:** Imagen PNG de **8×8 píxeles** con fondo transparente.
* **Cómo activarla:** Los enemigos solo dispararán si en las opciones de la fase activas la opción **`enemyShootEnabled`**. Si esta opción está apagada, ningún enemigo disparará aunque en su tipo de movimiento ponga que dispara.

<div class="pixel-art-box">
  <img src="/images/enemy_bullet.png" alt="Bala de los enemigos (ampliada 8x)" style="width: 64px; height: 64px;" />
</div>

