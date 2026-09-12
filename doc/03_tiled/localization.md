---
title: Traducción
---

Para traducir tu juego de manera sencilla, textos, pantallas... Dentro de la carpeta assets/screens y assets/texts, los ficheros que están a primer nivel el motor los cogerá para generar el juego con el idioma por defecto (default). Y para los demás idiomas hay que crear una carpeta con el código iso del idioma en minúsculas, por ejemplo español **es**, portugués **pt**...

Como ejemplo en el motor ya te viene con los archivos por defecto y la carpeta del juego en español **es**.

El motor solo cogerá el fichero de la carpeta si existe, si no usará el de la carpeta raiz.

Para compilar en uno u otro idioma, al seleccionar la opción **Build->Game**, el motor te preguntará en que idioma quieres generar el juego y este se generará en una carpeta con el iso del idioma en **dist**.

También puedes seleccionar la opción del idioma que quieras directamente en el botón de shortcuts del engine.

![](/images/frequent_shortcuts.jpg)
