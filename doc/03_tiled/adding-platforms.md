---
title: Diseñando el Juego. Plataformas Móviles
description: Configuración de plataformas móviles que transportan al jugador en SMS Game Maker
---

# Plataformas Móviles

Las **plataformas móviles** son entidades dinámicas de la capa `Sprites` que se desplazan de forma autónoma entre dos puntos y transportan al protagonista con suavidad cuando este se posa sobre su superficie.

---

## 1. Cómo Añadir una Plataforma Móvil

### En el Editor de Mapas Integrado:
1. Selecciona la capa **`Sprites`** en el panel de capas.
2. En el panel de **Sprites (16×16)**, selecciona el sprite de plataforma móvil (por defecto los sprites 8 y 9 de la primera fila).
3. Pinta la plataforma sobre la posición inicial en el mapa.
4. Con la herramienta **Puntero (`🛑` o tecla P)**, haz clic en el punto de destino de la plataforma. La plataforma quedará enlazada automáticamente con su destino.
5. Puedes ajustar su velocidad seleccionándola con la herramienta de **Selección (`V`)**.

### En Tiled Map Editor:
1. En la capa de objetos `Sprites`, coloca el sprite de la plataforma móvil.
2. Asigna la clase **`platform`** en el panel de propiedades.
3. Inserta un punto (`Insert Point`) con clase **`ZXSGMPointer`** y vincula la plataforma en su propiedad de objeto.

---

## 2. Tipos de Trayectoria

* **Horizontal:** Si el punto de inicio y el destino comparten la misma coordenada vertical (Y), la plataforma oscilará de lado a lado.
* **Vertical:** Si comparten la misma coordenada horizontal (X), actuará como elevador subiendo y bajando.
* **Diagonal:** Si difieren tanto en X como en Y, la plataforma se moverá en diagonal en línea recta.

---

## 3. Física de Arrastre y Velocidad

* **Arrastre del Protagonista:**
  Cuando el protagonista aterriza sobre una plataforma móvil, el motor activa el seguimiento físico: el jugador se desplaza exactamente a la misma velocidad y dirección que la plataforma sin deslizarse ni caerse, pudiendo caminar sobre ella o saltar en cualquier instante.
* **Velocidad (`speed`):**
  Puedes calibrar la velocidad mediante la propiedad `speed` (valores de `0` a `3`, donde `0` es el avance más pausado y `3` la velocidad completa a 60 FPS).
