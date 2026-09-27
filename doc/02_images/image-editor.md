---
title: Gráficos. Editor de Imágenes y Colores
description: Guía sencilla de editores gráficos recomendados (LibreSprite), colores y transparencia para tus juegos
---

# Editor de Imágenes y Colores

Para crear o modificar los gráficos de tu juego (personajes, enemigos, bloques del escenario o pantallas), necesitas un editor de imágenes pixel art.

---

## 1. Editor Recomendado: LibreSprite

Recomendamos utilizar **[LibreSprite](https://libresprite.github.io/)**, un programa gratuito y muy fácil de usar para dibujar estilo retro:

> [!TIP]
> **¿Por qué usar LibreSprite?**
> * **Totalmente Gratis:** Es de código abierto, no tiene versiones de pago ni límites de uso.
> * **Pensado para Videojuegos Retro:** Tiene herramientas diseñadas especialmente para dibujar píxel a píxel con total comodidad.
> * **Fácil Gestión de Colores:** Te permite elegir y organizar tus colores fácilmente.
> * **Fondo Transparente:** Permite guardar tus dibujos con fondo transparente (muy importante para los personajes y enemigos).
> * **Descarga oficial:** [libresprite.github.io](https://libresprite.github.io/)

### Otras Opciones
Si ya estás acostumbrado a usar otros programas como **Aseprite**, **Photoshop** o **GIMP**, también puedes usarlos sin problema. Solo asegúrate de dibujar con la herramienta de **Lápiz a tamaño 1 píxel** (sin bordes borrosos ni difuminados) y guardar las imágenes en formato **PNG**.

---

## 2. Los Colores en el Juego

En las consolas Master System y Game Gear, los colores funcionan de forma muy sencilla:

* **Colores del Escenario:** En cada fase puedes usar hasta **16 colores diferentes** para pintar los bloques, fondos y el marcador.
* **Colores de los Personajes:** El protagonista, los enemigos y las balas comparten otra paleta de hasta **15 colores más el fondo transparente**.
* **Fondo Transparente:** En la imagen de los personajes (`sprites.png`), todo lo que sea fondo debe ser transparente para que se vea el escenario detrás del personaje mientras camina.
* **Detalles en Negro:** Si tu personaje tiene ojos, contornos o zapatos negros, simplemente píntalos de color negro normal. El juego se encargará de que se vean completamente sólidos y no transparentes.

---

## 3. Master System y Game Gear

* **Master System:** Cuenta con una gama clásica de 64 colores entre los que elegir los 16 de tu fase.
* **Game Gear:** Cuenta con una paleta más amplia (4096 colores posibles), por lo que admite más variedad de degradados y tonos.

> [!NOTE]
> **Tú solo dibuja:**
> No necesitas saber códigos de color ni configurar tablas complejas. Simplemente dibuja tus imágenes en formato PNG con tus colores favoritos y SMS Game Maker se encarga de adaptarlos automáticamente al generar la ROM de tu juego.
