---
title: Diseñando el juego. Añadiendo plataformas móviles
---

## Limitación

La limitación es compartida con los enemigos. Puedes añadir **3 elementos móviles** contando con los enemigos, es decir, por ejemplo, 2 enemigos y una plataforma o 2 plataformas y 1 enemigo.

## Cómo añadirlas

Las plataformas móviles se añaden igual que los [enemigos](/doc/03_tiled/adding-enemies) con la única diferencia de que en lugar de ponerle tipo enemy tienes que poner **platform**

Puedes añadir plataformas horizontales, verticales y diagonales.

## Velocidad

Puedes establecer la velocidad de la plataforma, para ello solo tienes que añadir en el mismo una propiedad personalizada **speed** de tipo **enemySpeed** y seleccionar entre 0, 1, 2 o 3 de más lento a más rápido. Si no añades la propiedad se establecerá a 3 como venía funcionando hasta ahora.
0. Más lenta.
1. El doble de rápida que 0.
2. El doble de rápida que 1.
3. Todo lo rápida que permita la CPU. Sin freno.

![](/images/tiled_add_platform.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nYb-XyTHwnM?si=VBizR7sjF_E3FGE_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pYU2xD-NlVA?si=3aURtYQtaFw8CP_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

