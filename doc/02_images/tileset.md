---
title: Imágenes base. Tileset
---

## Tileset

Tienes que crear (o editar) una imagen de 256x48px (assets/tiles.zxp) que se usará para diseñar tus pantallas.

SMS Game Maker trabaja con tiles de 8x8px, en consecuencia tienes disponibles 256 tiles para diseñar tus escenarios.

Para crear tu tileset debes tener en cuenta algunas regla, recuerda que tienes uno de ejemplo para simplemente editarlo.

* El **primer tile** está reservado para el **fondo**.
* Los **siguientes 63 tiles** serán considerados como **sólidos**, es decir, cuando lo coloques en tu mapa, el protagonista no podrá traspasarlos, son los típicos que se usan para paredes... Pero los 3 últimos tiles sólidos son especiales:
    * Antepenúltimo: Puerta que se abre con llaves.
    * El penúltimo: Si está activada la opción se considerará tile rompible.
    * Último: Puerta shouldKillEnemies, puerta que se abrirá cuando mates a todos los enemigos de esa habitación.
* Los **siguientes 2 tiles** serán considerados plataformas estáticas traspasables desde arriba.
* Los **siguientes 2 tiles** serán considerados plataformas estáticas traspasables desde abajo y desde arriba.
* Los **siguientes 2 tiles** serán considerados plataformas estáticas traspasables desde abajo.
* El **tile 60** repreesenta el tile que se rompe al tocarlo.
* El **tile 61** es el que se rompe cuando le disparas.
* El **tile 62** es la puerta de objetivo items, se abre cuando hayas recogido los items configurados para ello.
* El **tile 63** es la puerta que se abre con llaves.
* El **tile 64** es la puerta que se abre al matar a todos los enemigos de la pantalla.
* Los **siguientes 4 tiles** serán considerados escaleras.
* Los **tiles restantes**, salvo los 6 últimos, serán considerados no sólidos. Si quieres añadir tiles que le causen daño al personaje principal o que sean animados tienen que estar en estos tiles.
* El **tile 187** es el que muestra el mensaje de texto en pantalal al tocarlo.
* El **tile 188** es el de munición. 
* El **tile 189** es el de dash.
* El **tile 190** es el de vida.
* El **tile 191** es el de item.
* El **tile 192** es la llave.

![](/images/tiles.png)

Nota: Cuando modifiques el fichero tiles.zxp desde ZX Painbrush, el mismo se actualizará en Tiled automáticamente.


