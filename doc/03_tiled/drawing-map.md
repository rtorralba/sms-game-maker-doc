---
title: Diseñando el Juego. Dibujando el Escenario
description: Técnicas de dibujo, capas y colocación de elementos en el editor integrado y en Tiled
---

# Dibujando el Escenario

El diseño de cada nivel se organiza mediante **dos capas principales**, asegurando la separación nítida entre la geometría física del mapa y los objetos interactivos.

---

## 1. Las Dos Capas de Trabajo

1. **Capa `Map` (Patrones de Fondo 8×8):**
   * Es la capa donde se pinta la geometría del nivel: bloques sólidos, suelos, techos, plataformas atravesables, escaleras, decorados de fondo, pinchos/daño, puertas y objetos recogibles (items, llaves, vida, munición).
2. **Capa `Sprites` / `Objects` (Entidades Móviles 16×16):**
   * Es la capa donde se sitúan las entidades dinámicas: el punto de inicio del protagonista (`mainCharacter`), enemigos (`ZXSGMEnemy`), plataformas móviles (`platform`), punteros de ruta (`ZXSGMPointer`) y marcadores de música/texto.

> [!TIP]
> En el **Editor de Mapas Integrado**, el panel superior derecho **«Capas»** te permite conmutar entre la capa `Map` y la capa `Sprites` con un solo clic o alternar su visibilidad con el icono del ojo `👁️`.

---

## 2. Herramientas de Dibujo en el Editor Integrado

* **Pincel (Atajo `B`):** Permite colocar el tile o sprite seleccionado sobre el mapa manteniendo presionado el botón izquierdo del ratón.
* **Bote de Pintura / Relleno (Atajo `F`):** Rellena rápidamente una zona contigua de tiles idénticos (muy útil para pintar cielos o muros macizos).
* **Borrador (Atajo `E`):** Borra tiles restaurando el tile de fondo 0, o elimina entidades en la capa de sprites.
* **Selección (Atajo `V`):** Permite hacer clic sobre cualquier objeto o enemigo existente para inspeccionar y modificar sus propiedades en el panel lateral derecho.
* **Previsualización de Animación:** Haz clic en el botón de reproducción `▶` en la barra superior para ver en tiempo real cómo oscilan los tiles animados (`animated` y `animated-damage`) con el intervalo configurado en `animatePeriodTile`.

---

## 3. Reglas de Diseño y Consistencia de Mapa

1. **Pantallas Completas y Uniformes:**
   * Cada pantalla debe abarcar su cuadrícula íntegra (32×22 en Master System o 20×16 en Game Gear). No se admiten fracciones de pantalla.
   * Si una fase cuenta con múltiples pisos o alturas verticales, todas las filas deben tener el mismo ancho de columnas para garantizar transiciones de scroll vertical coherentes.
2. **Punto de Spawn del Protagonista (`mainCharacter`):**
   * Cada fase debe contener exactamente un objeto `mainCharacter` situado en el punto exacto donde comenzará el jugador al iniciar el nivel o revivir tras perder una vida.
3. **Continuidad de Fondo:**
   * Al diseñar zonas con llaves o items, ten en cuenta que cuando el jugador los recoja, el motor los reemplazará dinámicamente por el tile de la fila superior (`y - 1`). Coloca un tile de fondo uniforme encima de los objetos para que el escenario luzca siempre continuo.
