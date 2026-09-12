---
title: Tutorial ZX Paintbrush
---

## Introducción

El ZX Paintbrush es una herramienta para diseñar para Master System, con lo cual primero deberemos tener claro como funcionan ciertas cosas a la hora de pintar en este ordenador.

El Master System solo puede pintar por cada carácter (8x8 pixels) 2 colores, **paper** e **ink**, que como su propio nombre indica se refiere a, en ese caracter, de que color estamos pintando el fondo o papel, y la tinta. Además en cada carácter podremos especificar si queremos que se vea en brillo o no y si queremos que se active el flash, que es que el spectrum nos irá intercambiando ink por paper cada cierto tiempo de manera infinita.

Por eso podremos encontrar en la parte superior que podemos escoger los 7 colores que puede manejar el spectrum para ink y paper y además, bright y flash.

![](/images/zx-paintbrush/colours.png)

Os lo explico con un ejemplo pero para ello introduzco otra herramienta importante para que sepáis donde estáis pintando, ya que si solo podemos utilizar 2 colores por caracter, es interesante ver donde empieza y termina cada carácter, o incluso pixel, para ello tenéís que activar las rejillas que también tenéis en la barra de la parte superior.

![](/images/zx-paintbrush/grid.png)

Si activamos la regilla de carácter verémos algo así.

![](/images/zx-paintbrush/grid_character_enabled.png)

Si nos fijamos en el primer sprite, en la parte superior derecha, vemos un carácter que tiene ink en blanco, paper en negro, brillo desactivado y flash desactivado.

![](/images/zx-paintbrush/character_up_right_attributes.png)

Si yo ahora elijo ink azul y paper verde, os pasará una cosa que a muchos os sorprende, porque no es lo que suele ocurrir en los programas de diseño habituales, pero es lo normal en spectrum si atendemos a la restrición de que en cada carácter **sólo puede haber definido un paper y un ink**.

![](/images/zx-paintbrush/ink_blue_paper_green.png)

Una vez elegido ink y paper, con el botón izquierdo pinto ink y con el derecho paper, si por ejemplo pongo un pixel en cualquier zona de ese caracter con lo seleccionado fijaros en lo que pasa.

![](/images/zx-paintbrush/character_up_right_attributes_edited.png)

Algo raro en otros programas de diseño pero normal si diseñas para Master System, ya que si elegimos ink azul y paper verde, como en cada carácter solo puede haber un ink y un paper, e inicialmente teníamos ink blanco y paper negro, sustituye todo lo que estaba pintado con ink blanco por ink azul, y todo lo que estaba con paper negro por paper verde.

**Truqui**

ZX Paintbrush, si no seleccionamos ni ink ni paper ni bright ni flash pintará con el ink, paper, bright y flash que tenga ya ese carácter.

![](/images/zx-paintbrush/no_ink_no_paper.png)
![](/images/zx-paintbrush/ink_current_character_paper_current_character.png)

# Los sprites no tienen color

Los sprites no tiene color, se pintarán segun lo que indique el tile de fondo, en el siguiente ejemplo podemos ver como en la pantalla de la piscina de ChernobylAI fuera de la piscina el fondo tiene INK blanco y PAPER negro, mientras que dentro de la piscina el fondo tiene INK negro y PAPER Cyan

![](/images/zx-paintbrush/zx-paintbrush-ink-blanco-paper-negro.png)
![](/images/zx-paintbrush/zx-paintbrush-ink-negro-paper-cyan.png)

Aún así es importante saber cuando estamos pintando el sprite que es INK y PAPER para tener el ejemplo deseado, por ejemplo, lo normal es que la silueta del sprite lo pintes con INK y el fondo con PAPER y no al revés.