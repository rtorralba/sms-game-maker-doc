---
title: Uso del Motor. SMS Game Maker Studio
description: Guía de uso de la aplicación SMS Game Maker Studio para crear y compilar tus juegos
---

# Uso de SMS Game Maker Studio

**SMS Game Maker Studio** es la aplicación visual que te permite gestionar tus fases, configurar todas las opciones de tu juego y generar la ROM final con solo pulsar un botón.

---

## 1. Cómo Abrir el Programa

* **Versión Ejecutable:** Haz doble clic sobre **`SMSGameMakerStudio.exe`**.
* **Versión de Desarrollo:** Haz doble clic sobre el archivo **`gui.bat`**.

![](/images/logo.png)

---

## 2. La Pantalla Principal

Al abrir la aplicación verás una interfaz intuitiva con todo lo que necesitas a la vista:

### Barra Superior
* **Indicadores de Herramientas:** Dos indicadores luminosos te muestran si tienes instalado el compilador (SDCC) y el editor Tiled. Si alguno falta, te mostrará un botón para descargarlo con un solo clic.
* **Idioma:** Puedes cambiar el idioma de la aplicación en cualquier momento entre Español, Inglés y Portugués.
* **Acerca de...:** Muestra los créditos y enlaces a la comunidad oficial de Telegram.

---

### Panel del Proyecto y Selector de Fases
* **Tu Proyecto:** Muestra la carpeta de juego activa.
* **Selector de Fase:** Te permite elegir con qué nivel quieres trabajar (`Stage 1`, `Stage 2`...).
* **Botón Refrescar (`🔄`):** Si creas o renombras una carpeta de nivel en tu ordenador, pulsa este botón para que aparezca en la lista sin tener que reiniciar el programa.

---

### Botones de Acción de la Fase
Para la fase seleccionada, dispones de tres acciones inmediatas:

1. **«🗺️ Abrir Mapa»:** Abre directamente el mapa del nivel en el editor visual para empezar a pintar o colocar enemigos.
2. **«📂 Abrir Carpeta»:** Abre la carpeta de esa fase en el explorador de archivos de Windows para que puedas ver y cambiar las imágenes (`tiles.png`, `sprites.png`, etc.) o la música.
3. **«⚙️ Configuración»:** Abre una ventana donde puedes activar o desactivar opciones del nivel de forma muy fácil (vidas, salto, disparo, enemigos, etc.) mediante sencillos interruptores.

---

## 3. Generar tu Juego (Botones de Compilación)

Cuando tengas tu mapa listo, generar la ROM para jugar es tan sencillo como hacer clic en uno de los dos botones principales:

* **«⚡ Compilar SMS»:**
  Genera la ROM lista para jugar en **SEGA Master System**. El archivo se creará dentro de la carpeta `dist/` de tu juego (por ejemplo, `dist/MiJuego.sms`).
* **«🎮 Compilar GG»:**
  Genera la ROM adaptada para la consola portátil **SEGA Game Gear** (`dist/MiJuego.gg`).

---

## 4. Ventana de Progreso en Vivo

Durante la generación de la ROM, la pantalla derecha de la aplicación te irá mostrando el avance paso a paso:
1. Lectura del mapa y los objetos.
2. Preparación de los gráficos y colores.
3. Adaptación de la música.
4. Generación final de la ROM.

Al terminar, la ventana te confirmará que el proceso ha finalizado con éxito indicándote el nombre y ubicación del archivo generado. ¡Ya solo queda abrirlo en tu emulador favorito (como Emulicious o Mesen) o cargarlo en un cartucho flash para jugarlo en la consola real!
