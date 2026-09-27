---
title: Diseñando el Juego. Preferencias y Rejilla
description: Configuración visual de la rejilla de patrones y límites de pantalla en Tiled y el Editor Integrado
---

# Preferencias y Visualización de Rejilla

Para diseñar niveles con precisión píxel a píxel y distinguir con claridad las fronteras entre pantallas contiguas, es fundamental configurar adecuadamente la rejilla.

---

## 1. En el Editor de Mapas Integrado

El editor integrado gestiona automáticamente la visualización según el nivel de zoom:
* **Límites de Pantalla:** Se resaltan automáticamente con un borde destacado para delimitar cada chunk (32×22 en Master System o 20×16 en Game Gear).
* **Rejilla Fina de 8×8 px:** Se activa automáticamente en niveles de zoom iguales o superiores al 75% (`ZOOM >= 0.75`), manteniéndose visible a 100%, 150%, 200%, 300%... y ocultándose en vistas panorámicas muy lejanas (25% y 50%) para evitar sobrecargar la visión global.
* **Coordenadas en Vivo:** En la esquina superior derecha se muestra continuamente la posición exacta del cursor en coordenadas de tile (`X: ..., Y: ...`).

---

## 2. En Tiled Map Editor

Para configurar Tiled:
1. Menú **Editar ➔ Preferencias** (o `Ctrl + ,`).
2. Pestaña **Interfaz**:
   * En **Rejilla Primaria (Major Grid):**
     * Para Master System: Ancho = **32 patrones**, Alto = **22 patrones**.
     * Para Game Gear: Ancho = **20 patrones**, Alto = **16 patrones**.
3. En el visor de mapa, activa **Ver ➔ Mostrar Rejilla** (`Ctrl + G`).
4. Verás una cuadrícula fina para cada tile de 8×8 y una cuadrícula gruesa para cada pantalla completa, facilitando el diseño de salas y transiciones de scroll.
