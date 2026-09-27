---
title: Diseñando el Juego. Configuración General de Fase
description: Catálogo completo de propiedades de mapa, mecánicas y parámetros en SMS Game Maker
---

# Configuración General de Fase

Las mecánicas, estadísticas y comportamientos del juego se calibran de forma visual y dinámica por cada fase.

Puedes modificar estas propiedades de dos maneras:
1. **Modal de Configuración en SMS Game Maker Studio:** Haz clic en el botón **«⚙️ Configuración»** en la tarjeta de la fase activa. Se abrirá una ventana con buscador en vivo, interruptores para valores booleanos y selectores para valores enum.
2. **Propiedades del Mapa en Tiled:** Menú **Mapa ➔ Propiedades del mapa**.

---

## 1. Identificación y Parámetros Globales

* **`gameName` (string):** Nombre oficial del juego (ej. `"Mi Juego SEGA"`). Se utiliza para nombrar la ROM de salida en `dist/<gameName>.sms` o `.gg`.
* **`gameView` (enum: `side` / `overhead`):**
  * `side`: Vista lateral clásica de plataformas con gravedad analógica, salto y escaleras.
  * `overhead`: Vista cenital bidireccional (8 direcciones o 4 direcciones).

---

## 2. Salud, Daño y Modo de Vidas

* **`initialLife` (int):** Salud inicial del personaje (por defecto `50`).
* **`lifeAmount` (int):** Cantidad de salud que recupera el protagonista al recoger un ítem de vida (`TILE_LIFE`).
* **`damageAmount` (int):** Daño que recibe el protagonista al colisionar con un enemigo o con un tile de peligro/trampa.
* **`mainCharacterInvincible` (bool):** Activa la invulnerabilidad total del protagonista (ideal para pruebas y testeo de niveles).
* **`livesMode` (enum):**
  * `disabled`: Sistema estándar por barra/puntos de energía.
  * `instant respawn`: Al perder la energía o una vida, reaparece de inmediato en el punto de entrada de la pantalla.
  * `show graveyard`: Muestra el sprite de lápida/cementerio antes de reaparecer.

---

## 3. Físicas, Salto y Habilidades

* **`jumpType` (enum: `accelerated` / `constant`):**
  * `accelerated` (Recomendado): **Física analógica en punto fijo subpíxel 8.8** con impulso inicial variable y dos gravedades:
    - **Gravedad suave (`+0x0032`):** Manteniendo pulsado el Botón 2 para arcos parabólicos de hasta 3-4 tiles.
    - **Gravedad fuerte de corte (`+0x0090`):** Al soltar el Botón 2 en pleno ascenso para realizar saltos cortos y milimétricos (*short-hops*).
* **`disableContinuousJump` (bool):** Exige soltar y volver a pulsar el botón de salto para realizar un nuevo salto (evita rebotes automáticos continuos).
* **`dashEnabled` (bool):** Activa la mecánica de impulso rápido horizontal con salto largo.
* **`dashAlwaysAvailable` (bool):** Si está activo, el protagonista inicia la partida con el dash desbloqueado sin necesidad de recoger antes el ítem de dash en el mapa.
* **`wallJumpEnabled` (bool):** Permite rebotar en paredes sólidas pulsando el salto y la dirección opuesta mientras estás en el aire.
* **`laddersEnabled` (bool):** Activa el agarre automático y movimiento vertical a 60 FPS en escaleras.
* **`jetPackFuel` (int):** Cantidad máxima de combustible de propulsión. Si es mayor que 0, el salto se sustituye por vuelo propulsado continuo con estela de partículas de chispas en VRAM y recarga automática al tocar tierra.
* **`idleTime` (int):** Fotogramas de inactividad (por defecto 90 frames = ~1.5s) tras los cuales el protagonista entra en animación idle mirando al frente.

---

## 4. Disparo y Combate

* **`shooting` (bool):** Habilita el disparo del protagonista con el **Botón 1** del mando.
* **`ammo` (int):** Munición inicial (-1 representa munición ilimitada).
* **`ammoIncrement` (int):** Balas añadidas al recoger un ítem de munición (`TILE_AMMO`).
* **`bulletDistance` (int):** Alcance en tiles de la bala (0 = distancia infinita hasta chocar con un muro).
* **`killJumpingOnTop` (bool):** Permite eliminar enemigos saltando y cayendo sobre su cabeza (rebotando hacia arriba).

---

## 5. Enemigos y Balas Enemigas

* **`enemyShootEnabled` (bool):** Interruptor maestro. Si está desactivado, ningún enemigo disparará proyectiles aunque su tipo sea `WithShot`.
* **`enemyShootSolidCollide` (bool):** Si está activo, las balas enemigas colisionan y se destruyen contra muros sólidos.
* **`enemiesRespawn` (bool):** Si los enemigos derrotados vuelven a aparecer al salir y regresar a la pantalla.
* **`maxEnemiesPerScreen` (int):** Límite de enemigos activos simultáneos por pantalla (por defecto 5).
* **`animatePeriodEnemy` (int):** Cadencia de cambio de frame de los enemigos (a mayor valor, animación más pausada).

---

## 6. Objetivos de Victoria y Puertas

* **`finishGameObjective` (enum):**
  * `items`: Completar la fase recolectando el número de items fijado en `goalItems`.
  * `killSpecificEnemy`: Derrotar al enemigo jefe especificado en `finishGameEnemy`.
  * `itemsAndKillEnemy`: Requiere tanto recolectar los items como vencer al enemigo jefe.
* **`finishGameEnemy` (object):** Referencia al enemigo designado como jefe de fase.
* **`goalItems` (int):** Número de items requeridos para completar la fase.
* **`itemsCountdown` (bool):** Si está activo, el HUD muestra la cuenta regresiva de items que faltan por recolectar en lugar de los acumulados.
* **`keysEnabled` (bool):** Habilita las llaves y las puertas de llaves (`TILE_DOOR_KEYS`).
* **`itemsToOpenDoors` (int):** Número de items necesarios para que se abran las puertas de items (`TILE_DOOR_ITEMS`).

---

## 7. Bloques Rompibles y Escenario

* **`useBreakableTile` (enum: `disabled` / `individual` / `all`):** Bloques destructibles por disparo.
* **`useBreakableTileByTouch` (bool):** Activa los bloques que se desmoronan tras pisarlos.
* **`useBreakableTileByTouchFrames` (int):** Fotogramas de espera antes de la destrucción (por defecto 30 frames).
* **`animatePeriodTile` (int):** Período de animación de los tiles alternos de fondo (por defecto 10 frames de VBlank a 60 Hz).

---

## 8. Cuadros de Texto y Diálogos

* **`textsEnabled` (bool):** Activa el sistema de ventanas de texto descriptivo y diálogos.
* **`textsWindowX`, `textsWindowY`, `textsWindowWidth`, `textsWindowHeight` (int):** Posición y tamaño en tiles de la ventana flotante de texto.
