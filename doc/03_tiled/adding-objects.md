---
title: Diseñando el juego. Añadiendo objetos
---

Los tiles que representan objetos se tendran que situar los 4 últimos del sprite set (187, 189, 190, 191).

Estos tiles cogeran el color de fondo del tile que esté situado a la izquierda para que se pueda "mimetizar" con cualquier color.

## Item

Este es el objeto que el protagonista deberá ir recogiendo por todo el juego para finalizar el mismo (Es configurable).

Tienes que seleccionar el tile que quieras usar para este fin, por ejemplo en el juego de Krilin la daga, y poner que el tipo de el mismo es **item**.

Para ello haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees (la daga por ejemplo) y escribe **item** en la casilla Class.

![](/images/type_item.png)

## Puerta que necesita llave

Este tile será considerado sólido para el protagonista. deberás tener al menos una **key** para abrir la puerta y cuando lo hagas se te restará de tu inventario.

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **door** en la casilla Class. El tile de este tipo tiene que ser sólido, del 2 al 64.

Después ya puedes añadirlo a tu mapa arrastrándolo.

![](/images/type_door.png)

## Llave

Como habrás podido ver en el párrafo anterior, necesitas el objeto **key** para abrir las puertas.

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **key** en la casilla Class.

Después ya puedes añadirlo a tu mapa arrastrándolo.

![](/images/type_key.png)

## Munición

Este objeto permitirá al personaje restablecer la cantidad de munición que hayas especificado en el valor de la configuración **ammoIncrement** solo si has especificado un valor de munición inicial (**ammo**) no infinita (-1).

![](/images/type_ammo.png)

## Puerta que necesita que mates a todos los enemigos

Para utilizar esta puerta debes habilitar la opción **shouldKillEnemies**. El tile nº 64 (el último de la segunda fila), esta designado para añadir este tipo de puerta, solo añadirlo a tu mapa arrastrándolo. Deberás matar a todos los enemigos para abrir la puerta.

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **ammo** en la casilla Class.

Después ya puedes añadirlo a tu mapa arrastrándolo.

![](/images/type_enemy_door.png)

## Vida

Este objeto permitirá al personaje restablecer una cantidad de vida (configurable).

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **life** en la casilla Class.

Después ya puedes añadirlo a tu mapa arrastrándolo.

![](/images/type_life.png)

## Tile de daño

Este tipo de tile dañará al personaje principal cuando lo toque y este saldrá rebotado.

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **damage** en la casilla Class.

**Importante** solo puedes marcar tiles de daño **tiles no sólidos**, es decir, después de las plataformas traspasables, a partir del tile 78.

## Tiles animados

En ocasiones le da un aspecto más agradable que los escenarios tengan ciertos tiles animados, por ejemplo, unas velas a las que se le mueven las llamas.

Para ello deberás tener preparado tu tileset con el tile que tengas pensado animar y justamente el siguiente tile sea el frame al que se intercambiará para simular el movimiento.

Para setear un tile de este tipo haz clic en la rueda dentada de propiedades del tileset, selecciona el tile que desees y escribe **animated** en la casilla Class.

Sólo se animarán 10 tiles por pantalla.

![](/images/tileset_con_tiles_animados.png)

![](/images/velas_animadas.gif)

## Tiles de daño animados

A veces es interesante setear un tile con las dos propiedades anteriores, que hagan daño y que sean animados, por ejemplo una lava que tiene que dañar al protagonista y se tiene que mover. En este caso la el tipo o class (en las nievas versiones le han llamado class) ha de ser **animated-damage**.

Como pasaba con los tiles de daño, solo puedes marcar tiles de "daño animados" **tiles no sólidos**, es decir, después de las plataformas traspasables, a partir del tile 78.

![](/images/tile_animated_damage.png)

![](/images/lava_animada.gif)


