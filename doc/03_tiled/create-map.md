---
title: Diseñando el Juego. Crear el Mapa
description: Configuración de dimensiones de pantalla y chunks en Tiled y el Editor Integrado
---

# Creación del Mapa y Chunks de Pantalla

El mapa de cada fase define la distribución física de los bloques del escenario, las colisiones y la posición de todos los objetos y entidades.

> [!TIP]
> **Recomendación para no empezar de cero:**
> En lugar de configurar un mapa vacío desde cero, te recomendamos descargar el **[Proyecto Base de Ejemplo (.ZIP)](https://github.com/rtorralba/sms-game-maker-game-example/archive/refs/heads/main.zip)**, que ya incluye un mapa de ejemplo perfectamente estructurado listo para editar.


---

## 1. Dimensiones Nativas por Consola

El procesador de vídeo VDP utiliza patrones de 8×8 píxeles. Según la consola de destino, el tamaño de cada pantalla individual (chunk) varía:

| Plataforma | Resolución Activa | Chunk de Mapa (Área de Juego) | HUD (Marcador Fijo) |
| :--- | :---: | :---: | :---: |
| **SEGA Master System** (`maps.tmx`) | 256×192 px | **32 columnas × 22 filas** (32×22 tiles) | Filas 22 y 23 (32×2 tiles) |
| **SEGA Game Gear** (`maps_gg.tmx`) | 160×144 px | **20 columnas × 16 filas** (20×16 tiles) | Filas 16 y 17 (20×2 tiles) |

> [!NOTE]
> Cada fase puede componerse de una sola pantalla estática o de múltiples pantallas conectadas en horizontal formando un nivel con **scroll continuo por hardware a 60 FPS**.

---

## 2. Creación en el Editor de Mapas Integrado

Si utilizas el **Editor de Mapas Integrado** de SMS Game Maker Studio:
1. Abre el mapa pulsando **«🗺️ Abrir Mapa»** en la tarjeta de la fase.
2. Alrededor del lienzo del mapa encontrarás los botones interactivos de habitación:
   - `➕ Izquierda` / `➖ Izquierda`
   - `➕ Derecha` / `➖ Derecha`
   - `➕ Arriba` / `➖ Arriba`
   - `➕ Abajo` / `➖ Abajo`
3. Al hacer clic en `➕`, el editor añade automáticamente una pantalla completa (de 32×22 en SMS o 20×16 en Game Gear) preservando intactos los tiles y objetos existentes.
4. Guarda los cambios con **`Ctrl + S`** o el botón «Guardar».

---

## 3. Creación Manual en Tiled Map Editor

Si prefieres crear un mapa nuevo desde cero en Tiled:
1. Menú **Archivo ➔ Nuevo ➔ Nuevo Mapa**.
2. Parámetros de inicialización:
   * **Orientación:** Ortogonal.
   * **Formato de capa de patrones:** CSV.
   * **Orden de renderizado:** Right Down (Hacia la derecha y hacia abajo).
   * **Tamaño del patrón:** 8×8 píxeles.
   * **Tamaño del mapa:** Fijo (ej. Ancho: 64, Alto: 22 para 2 pantallas horizontales) o Infinito.
3. En **Propiedades del Mapa**:
   * Si usas chunks: Configura `Output Chunk Width` en **32** (o **20** para GG) y `Output Chunk Height` en **22** (o **16** para GG).
4. Asocia el proyecto de tipos abriendo `maps.tiled-project` para tener disponibles todas las clases personalizadas (`ZXSGMEnemy`, `ZXSGMPointer`, `platform`, `mainCharacter`, etc.).
