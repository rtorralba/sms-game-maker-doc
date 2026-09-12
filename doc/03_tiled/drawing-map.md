---
title: Diseñando el juego. Dibujando el mapa
---

## Uso básico de Tiled

Usar Tiled es muy sencillo e intuitivo y tienes una documentación muy completa sobre ello [https://doc.mapeditor.org/en/stable/](https://doc.mapeditor.org/en/stable/). Aún así os dejamos unos tips muy básicos:

Para pintar tiles en el mapa es necesitas tener la capa map seleccionada y después seleccionar alguna herramienta de inserción como la brocha de estampar o la herramienta de rellenado.

![](/images/herramientas_añadir_tiles.png)

Para añadir los enemigo, los puntos como de fin de trayecto del mismo (movimiento) o de inicio del protagonista, deberás tener la capa objects seleccionada y usar una de las herramientas de añadir.

![](/images/herramientas_insertar_en_cap_objects.png)

## Consideraciones generales

### Filas uniformes

Los mapas tiene que tener todas las filas con el mismo número de columnas, por ejemplo, si nuestro mapa tiene 2 "pisos" y en la planta baja hay 5 habitaciones, todos los pisos deben de tener 5 habitaciones. Si no puede acceder el usuario no pasa nada, las rellenas con el primer tile (fondo) y ya está.

Ejemplo com filas distintas (incorrecto):

![](/images/mapa_filas_distintas.png)

El mismo ejemplo con filas uniformes, todas las filas tienen las mismas "habitaciones"

![](/images/mapa_filas_iguales.png)

### Habitaciones completas

Las habitaciones tiene que estar completas, no se pueden diseñar habitaciones que les falten tiles o por ejemplo 2 habitaciones y media.

## Crear capas

Necesitamos 2 capas, una para pintar nuestro escenario y otra para situar los elementos, como enemigos, en el mismo.

![](/images/layers.png)


