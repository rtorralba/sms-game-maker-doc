---
title: Diseñando el juego. Añadiendo enemigos
---

## Limitación

Puedes añadir hasta **3 enemigos en cada pantalla** y configurar su movimiento.

## Posición inicial

Para ello deberás seleccionar la capa objects y arrastrar el 1er sprite del enemigo a posicionar donde quieras que aparezca inicialmente.

Como truco, si pulsas la tecla Ctrl el enemigo se situará respetado la rejilla.

En la propiedad **type** de este objeto deberás introducir el text **enemy**

Es recomendable que le pongas un nombre al mismo para cuando referencies la posición final a este. E.g. enemy_1

## Posición final

* Haz clic en el botón **Insert point**.
* Pon este punto donde quieras que pare el enemigo manteniendo la tecla Ctrl.
* Añade a este punto una **propiedad personalizada** (custom property) **de tipo objeto** y selecciona el enemigo relacionado con este punto.

![](/images/enemy_movement.png)

## Tipos de movimiento

El enemigo permite 3 tipos de movimiento:
* **Horizontal**, el enemigo y su trayecto están a la misma altura, es decir, la y del enemigo y del punto de destino son iguales y las x distintas.

![](/images/enemigos_movimiento_horizontal.png)

* **Vertical**, el enemigo y su trayecto están en la misma vertical, es decir, la x del enemigo x del punto de destino son iguales y las y distintas.

![](/images/enemigos_movimiento_vertical.png)

* **Diagonal**, el enemigo y el punto final no están a la misma altura ni en la misma vertical, es decir, ni la x del enemigo ni la y coinciden con la del punto de destino.

![](/images/enemigos_movimiento_diagonal.png)

* **Perseguir al protagonista**, El enemigo perseguirá al protagonista, simplemente hay que colocar el enemigo (poniendo en class enemy como siempre), sin definir punto de destino.

* **Sin retorno**. el enemigo solo se moverá en una dirección y cuando llegue al final saldrá del mismo punto inicial. Como ese enemigo no necesita sprites en el sentido contrario, puedes utilizarlos de manera que el primer sprite que correspondería al sentido contrario de este enmigo es la animación de salida y el siguiente el de llegada.
Para asignaer este tipo de movimiento tienes que añadir en el enemigo una propiedad **move** de tipo **enemyMovementTypes** y seleccionar el tipo **noReturn**

![](/images/spriteset_no_return.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/BgKVaTydw0k?si=CWNUgT_Q5eWhreEK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Cantidad de vida

Puedes asignarle la cantidad de vida que tiene cada enemigo, por ejemplo si le pones cantidad de vida 5 el protagonista le tendrá que disparar 5 veces para matarlo.

Para ello solo tienes que añadir una propiedad personalizada **life** **de tipo int** con el valor de la vida. Si no la defines, por defecto, el enemigo tiene una unidad de vida.

![](/images/vida_enemigo.png)

## Enemigos invencibles

Para añadir enemigos invencibles solo tendras que ponerle en el atributo **life** el valor **99**.

## Velocidad

Puedes establecer la velocidad del enemigo, para ello solo tienes que añadir en el mismo una propiedad personalizada **speed** de tipo **enemySpeed** y seleccionar entre 0, 1, 2 o 3 de más lento a más rápido. Si no añades la propiedad se establecerá a 3 como venía funcionando hasta ahora.
0. Más lento.
1. El doble de rápido que 0.
2. El doble de rápido que 1.
3. Todo lo rápido que permita la CPU. Sin freno.

![](/images/enemyspeed.png)


<!-- ## Color

Se le puede cambiar al enemigo el color simplemente añadiendo una propiedad personalizada **color** **de tipo int** donde tienes que poner el color de spectrum (0-7) deseado.

![](/images/colores_spectrum.png)

![](/images/sprites_color.png) -->

