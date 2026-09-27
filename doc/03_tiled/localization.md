---
title: Diseñando el Juego. Textos y Localización Multilingüe
description: Sistema de diálogos, cuadros de texto y soporte multilingüe en SMS Game Maker
---

# Textos y Localización Multilingüe

**SMS Game Maker** incorpora un sistema nativo para mostrar cuadros de diálogo y carteles de texto interactivos en pantalla con soporte multilingüe.

---

## 1. Activación del Sistema de Textos

En la configuración de la fase:
* **`textsEnabled = true`:** Habilita el subsistema de ventanas de texto flotantes.
* **Dimensiones de la Ventana:**
  * `textsWindowX`: Coordenada X (en tiles) de la esquina superior izquierda de la ventana.
  * `textsWindowY`: Coordenada Y (en tiles) de la ventana.
  * `textsWindowWidth`: Ancho en columnas de la ventana de texto.
  * `textsWindowHeight`: Alto en filas de la ventana.

---

## 2. Inserción de Textos en el Mapa

### En el Editor de Mapas Integrado:
1. Selecciona la herramienta **Texto (`📝` o tecla T)** en la barra superior.
2. Haz clic en la casilla del mapa donde deseas situar el activador de texto.
3. Se abrirá automáticamente el **Modal de Edición de Texto Multilingüe**, donde puedes redactar el mensaje en los tres idiomas soportados:
   - **`default`** (Inglés o idioma por defecto)
   - **`es`** (Español)
   - **`pt`** (Portugués)
4. Haz clic en «Guardar» en el modal.

### En Tiled Map Editor:
1. En la capa de objetos `Sprites`, inserta un objeto de clase **`ZXSGMText`**.
2. En sus propiedades personalizadas, rellena los campos de texto `default`, `es` y `pt`.

---

## 3. Comportamiento en Juego y Tipografía

* **Interacción:** Cuando el protagonista entra en contacto con el activador de texto, el juego pausa temporalmente la acción y despliega la ventana flotante en las coordenadas fijadas, renderizando el texto carácter a carácter utilizando la tipografía Sinclair 8×8 (tiles 216..226 de la VRAM).
* Al pulsar el **Botón 1** o **Botón 2**, la ventana se cierra limpiamente y la partida continúa.
