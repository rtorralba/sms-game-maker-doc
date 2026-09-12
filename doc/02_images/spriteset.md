---
title: Imágenes base. Spriteset
---

Debes crear/editar el fichero assets/sprites.zxp de 256x32px añadiendo tus sprites (personaje, enemigos...) y donde cada uno de estos tendrá una dimensión de 16x16px.

Los sprites no tienen color, con lo que solo tienes que dibujarlos usando paper negro y ink blanco.

## Primera fila

### Vista lateral (Plataformas)

Los primeros 8 sprites están reservados para la animación del protagonista:
* Los 2 primeros para el movimiento hacia la derecha
* El 3ª frame hacia la derecha extra si la opción **mainCharacterExtraFrame** está activada. 
* El 4º para el salto hacia la derecha.
* El 5º y 6º siguientes para el movimiento hacia la izquierda.
* El 7º El 3ª frame hacia la izquierda extra si la opción **mainCharacterExtraFrame** está activada. 
* El 8º para el salto hacia la izquierda.
* 9º y 10º Plataforma 1
* 11º y 12º Plataforma 2 o animación prota escaleras si la opción está activada.
* 13º y 14º Animación idle del personaje si la opción **idleTime** es distinta de 0 o Plataforma 3
* 15º Graveyard, imagen que aparece en el modo vidas si el mismo está activado.
* El 16, se usará para mostrar la explosión del enemigo cuando lo mates.

![](/images/sprites.png)

### Vista cenital

Los primeros 8 sprites están reservados para la animación del protagonista:
* 1 y 2 movimiento hacia la derecha.
* 3 y 4 movimiento hacia la izquierda.
* 5 y 6 movimiento hacia arriba.
* 7 y 8 movimiento hacia abajo.
* 9 - 15 libres

El último sprite, el 16, se usará para mostrar la explosión del enemigo cuando lo mates.

## Segunda fila
Los 16 sprites de la segunda fila se usarán para los enemigos, 2 para cada enemigo, 2 frames de animación, es decir, podrás definir un total de 8 enemigos. Tiene que dibujar solamente los frames del enemigo hacia la derecha.

![](/images/sprites_cenital.png)

## Tercera fila. Enemigos hacia la izquierda

La tercera fila es para los enemigos cuando van hacia la izquierda.

Si el tipo de movimiento del enemigo es **noReturn**, en un solo sentido, el primer sprite correspondiente hacia la izquierda se considerará el frame de inicio de animación y en segundo de fin.

Si simplemente es el mismo sprite pero volteado a la izquierda puedes hacerlo facilmente con ZX Paintbrush.

* Seleccionas el sprite con la herramienta de selección de 16x16.
* Copias (Ctrl+C) y pegas el sprite en la fila de abajo (Ctrl+V).
* Después seleccionas la opción de menú Edit -> Flip Horizontally -> Flip Horizontal Pixels

![](/images/flip_horizontally.png)

Si vienes de una versión anterior donde no se definía una 3ª fila y no sabes como añadirla, solo tendremos de aumentar el tamaño en altura de 32 a 48 diciendole que crezca hacía abajo. Para hacerlo desde ZX Paintbrush iremos al menú View -> Resize picture y en **Select dest. orientation** seleccionaremos la 2ª opción y en **height pondremos 48**

![](/images/zx-paintbrush-resize-picture-menu.png)
![](/images/zx-paintbrush-resize-picture-options.png)

Nota: Cuando modifiques el fichero sprites.zxp desde ZX Painbrush, el mismo se actualizará en Tiled automáticamente.

