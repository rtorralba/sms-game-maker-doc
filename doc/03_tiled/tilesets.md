---
title: Diseñando el Juego. Gestión de Tilesets
description: Vinculación del tileset 8x8 y spriteset 16x16 en el editor integrado y en Tiled
---

# Gestión de Tilesets y Spritesets

Cada fase necesita dos recursos gráficos asociados: el conjunto de tiles para el fondo y la hoja de sprites para las entidades del juego.

---

## 1. En el Editor de Mapas Integrado

No necesitas realizar configuraciones manuales:
* El editor lee directamente `tiles.png` y `sprites.png` de la carpeta de la fase activa (`game/stage_X/`).
* **Panel «Tiles (Fondo 8x8)»:** Muestra la paleta de patrones de 8×8. Al hacer clic sobre cualquier tile, queda seleccionado para pintar en la capa `Map` con el pincel (`B`) o el bote de pintura (`F`). Permite además inspeccionar o asignar la clase lógica del tile.
* **Panel «Sprites (Objetos 16x16)»:** Muestra las entidades de 16×16. Al seleccionar un sprite, puedes colocarlo en la capa `Sprites` para añadir al protagonista, enemigos o plataformas móviles.

---

## 2. En Tiled Map Editor

Si trabajas con Tiled, el archivo de mapa (`maps.tmx`) incluye dos tilesets externos:

1. **Tileset `tiles`:**
   * Archivo de origen: `tiles.png` (o `tiles_gg.png`).
   * Tamaño de patrón: **8×8 píxeles**.
   * Tipo de uso: Capa de patrones del escenario (`Map`).
2. **Tileset `sprites`:**
   * Archivo de origen: `sprites.png` (o `sprites_gg.png`).
   * Tamaño de patrón: **16×16 píxeles**.
   * Tipo de uso: Capa de objetos (`Sprites`).
   * **Alineación de objetos:** Asegúrate de que en las propiedades del tileset esté configurado **Object Alignment = Top Left** (Arriba a la izquierda). De este modo, las coordenadas de los objetos se alinean de forma idéntica a la cuadrícula de colisiones del motor.
