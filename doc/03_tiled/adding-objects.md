---
title: Diseñando el Juego. Añadiendo Objetos e Ítems
description: Colocación de items coleccionables, llaves, puertas, vida, munición y tiles especiales
---

# Añadiendo Objetos, Puertas e Ítems

En **SMS Game Maker**, los objetos interactivos, puertas y coleccionables se sitúan directamente en la capa de mapa (`Map`) utilizando los tiles correspondientes del tileset.

---

## 1. Catálogo de Objetos Recogibles

| Tile | Objeto | Clase en Tiled | Efecto al Contacto |
| :---: | :--- | :---: | :--- |
| **187** | **Munición** | `ammo` | Suma la cantidad `ammoIncrement` a la munición disponible del protagonista. |
| **188** | **Dash** | `dash` | Desbloquea la habilidad de impulso rápido si no estaba activa desde el inicio. |
| **189** | **Vida** | `life` | Restaura `lifeAmount` puntos de salud al protagonista. |
| **190** | **Ítem de Fase** | `item` | Suma 1 ítem al contador para cumplir el objetivo de victoria (`goalItems`). |
| **191** | **Llave** | `key` | Añade 1 llave al inventario (`currentKeys`) para abrir puertas cerradas. |
| **186** | **Disparador de Texto** | `ZXSGMText` | Despliega un cuadro de diálogo con el texto configurado. |

> [!TIP]
> **Preservación Estética del Fondo (Sustitución por `y - 1`):**
> Cuando el protagonista recoge cualquier objeto o ítem del escenario, el motor no deja un agujero negro o vacío en su lugar; consulta automáticamente el tile situado en la fila superior (`y - 1`) y lo estampa en la casilla, conservando el cielo, la pared o la textura del fondo de forma impecable.

---

## 2. Tipos de Puertas

Las puertas bloquean el paso hasta que se cumple una condición concreta:

* **Puerta de Llaves (Tile 62 - `TILE_DOOR_KEYS`):**
  Actúa como muro sólido. Si el jugador hace contacto teniendo al menos una llave (`currentKeys > 0`), se consume una llave con sonido `SFX_DOOR` y todos los tiles de la puerta en la pantalla desaparecen de forma permanente.
* **Puerta de Ítems (Tile 61 - `TILE_DOOR_ITEMS`):**
  Permanece cerrada hasta que el jugador recoge el número de ítems configurado en `itemsToOpenDoors` en las propiedades de la fase. Al alcanzar esa cifra, se abre automáticamente.
* **Puerta de Enemigos (Tile 63 - `TILE_DOOR_ENEMIES`):**
  Permanece cerrada mientras haya enemigos activos en la pantalla. Al derrotar al último enemigo, la puerta se abre de inmediato.

---

## 3. Bloques Rompibles

* **Bloque Rompible por Contacto (Tile 59):**
  Se activa mediante la propiedad `useBreakableTileByTouch`. Cuando el protagonista pisa el bloque, se inicia una cuenta atrás de 30 frames (~0.5s). Al terminar, el bloque se destruye con sonido `SFX_DAMAGE` y se reemplaza por el tile superior (`y - 1`), haciendo caer al jugador si estaba apoyado.
* **Bloque Rompible por Disparo (Tile 60):**
  Se destruye al ser alcanzado por una bala del jugador (`shooting = true`).

---

## 4. Tiles de Daño y Animación

* **Tiles de Peligro / Daño (`damage`):**
  Pinchos, trampas o ácido. Al tocarlos, el protagonista sufre `damageAmount` puntos de daño y es repelido.
* **Tiles Animados (`animated`):**
  Pintan elementos con movimiento (antorchas, cascadas, agua). Deben diseñarse en parejas de tiles contiguos en el tileset (`tiles.png`). El motor conmuta alternativamente entre el frame base y el siguiente según la cadencia `animatePeriodTile`.
* **Tiles de Daño Animados (`animated-damage`):**
  Combinan ambos comportamientos (por ejemplo, lava ardiente que se mueve periódicamente y quema al contacto).
