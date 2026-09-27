---
title: Diseñando el Juego. Añadiendo Enemigos
description: Guía de configuración de enemigos, IA de movimiento, disparo y jefes en SMS Game Maker
---

# Añadiendo Enemigos

Los enemigos son entidades móviles ubicadas en la capa de objetos (`Sprites`). Puedes configurar su apariencia, tipo de movimiento, velocidad, puntos de vida y comportamiento de disparo.

---

## 1. Cómo Añadir un Enemigo

### En el Editor de Mapas Integrado:
1. Selecciona la capa **`Sprites`** en el panel de capas.
2. En el panel de **Sprites (16×16)**, haz clic en el sprite correspondiente al enemigo que deseas colocar (filas 2 o 3).
3. Pinta el enemigo sobre el mapa en la casilla deseada.
4. Para definir su ruta, selecciona la herramienta **Puntero / Destino (`🛑` o tecla P)** y haz clic en la casilla final de su recorrido. El editor vinculará automáticamente el punto de destino con el enemigo.
5. Con la herramienta de **Selección (`V`)**, haz clic sobre el enemigo para abrir sus propiedades en el panel lateral derecho.

### En Tiled Map Editor:
1. Selecciona la capa de objetos `Sprites`.
2. Arrastra el sprite del enemigo sobre el mapa.
3. Asigna la clase **`ZXSGMEnemy`** en la ventana de propiedades.
4. Para fijar su destino, inserta un punto (`Insert Point`) de clase **`ZXSGMPointer`** y en su propiedad de tipo objeto selecciona el enemigo correspondiente.

---

## 2. Tipos de Movimiento (`move`)

El parámetro `enemyMovementTypes` define la inteligencia artificial del enemigo:

| Tipo | Movimiento y Comportamiento |
| :--- | :--- |
| **`default`** | **Patrulla Lineal:** Movimiento continuo de ida y vuelta en línea recta entre la posición de inicio y el punto de destino (horizontal, vertical o diagonal). |
| **`defaultWithShot`** | Movimiento lineal de ida y vuelta que además dispara proyectiles hacia el jugador (si `enemyShootEnabled` está activo). |
| **`rectangular`** | **Ruta Perimetral Horaria:** El enemigo recorre los cuatro vértices del rectángulo formado entre su coordenada de origen y el punto de destino en el sentido de las agujas del reloj. |
| **`rectangularWithShot`** | Recorrido perimetral horario con disparo de proyectiles. |
| **`stalker`** | **Acosador:** Persigue incansablemente al protagonista en ambos ejes (X e Y) sin necesidad de punto de destino. |
| **`stalkerWithShot`** | Acosador que persigue y dispara proyectiles contra el protagonista. |
| **`noReturn`** | **Misil Unidireccional:** Avanza en línea recta en un solo sentido. Muestra frame de lanzamiento en el origen, vuela por el trayecto e impacta en el destino antes de reiniciar el ciclo. |

---

## 3. Parámetros de Configuración del Enemigo

* **`life` (int):** Puntos de vida del enemigo (por defecto `1`). Cada impacto de bala del jugador le resta 1 punto.
  * **Enemigo Invencible:** Asigna `life = 99`. Las balas rebotarán o no surtirán efecto.
* **`speed` (enum `enemySpeed`):**
  * `0`: Velocidad pausada (ideal para trampas o torretas lentas).
  * `1`: Velocidad media.
  * `2`: Velocidad rápida.
  * `3`: Velocidad máxima a 60 FPS (1 px/frame).
* **`freezeOnSight` (bool):** Si se activa en un enemigo tipo `stalker`, el enemigo se paraliza instantáneamente en cuanto el protagonista se gira y lo mira de frente, reanudando la persecución cuando el jugador le da la espalda.

---

## 4. Jefes de Fin de Fase (`finishGameEnemy`)

Si el objetivo de la fase (`finishGameObjective`) está configurado como `killSpecificEnemy` o `itemsAndKillEnemy`:
* En el **Editor de Mapas Integrado**: Haz clic en el botón de selección de jefe en las propiedades de la fase. Se activará el modo de selección interactivo; haz clic sobre el enemigo que actuará como jefe y quedará asignado.
* En **Tiled**: Selecciona el enemigo jefe en el campo de objeto de la propiedad `finishGameEnemy`.
* Al abatir a este enemigo específico, el motor registrará la victoria y dará paso a la siguiente fase o a la pantalla de Ending.
