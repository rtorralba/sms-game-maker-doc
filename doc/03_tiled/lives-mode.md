---
title: Diseñando el Juego. Modo Vidas y Reaparición
description: Configuración del sistema de vidas clásicas y reaparición en SMS Game Maker
---

# Modo Vidas y Reaparición (`livesMode`)

Por defecto, **SMS Game Maker** gestiona la vitalidad del protagonista mediante puntos de salud o energía continua (`initialLife`). Sin embargo, puedes activar el sistema clásico de vidas individuales mediante la propiedad **`livesMode`**:

---

## 1. Opciones de `livesMode`

* **`disabled` (Salud por Puntos):**
  El protagonista cuenta con una reserva de salud (ej. 50 puntos). Cada impacto enemigo resta `damageAmount` puntos y los ítems de vida restauran `lifeAmount`. Al llegar a 0 puntos de salud se produce el Game Over.
* **`instant respawn` (Vidas Clásicas con Reaparición Instantánea):**
  Cada impacto enemigo o contacto con peligro resta **1 vida**. Tras una breve pausa de cortesía, el protagonista reaparece de inmediato en el punto de inicio de la pantalla actual con sus controles activos.
* **`show graveyard` (Vidas Clásicas con Lápida):**
  Al perder una vida, el sprite del protagonista es reemplazado por la animación de lápida / cementerio (Sprite 14 de la primera fila de `sprites.png`) antes de reaparecer en el punto de entrada.

---

## 2. Sprite de Lápida (`Graveyard`)

Cuando se utiliza `show graveyard`:
* El motor dibuja el **Sprite 14** de la primera fila de `game/stage_X/sprites.png` en el punto exacto donde cayó el protagonista.
* Tras un retardo de cortesía de aproximadamente 60 frames, la pantalla se refresca y el personaje reaparece en su punto de spawn.
