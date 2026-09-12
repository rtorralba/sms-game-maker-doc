---
title: Diseñando el juego. Modo vidas
---

Si tienes activada la opción **livesMode** la dinámica de perdida de vidas del personaje cambia:

* El jugador morirá y perderá 1 vida cada vez que reciba un impacto
* Una vez pasado el tiempo de cortesía el jugador volverá al punto por donde entró de la pantalla actual o donde empezó (modo arcade, primera pantalla)
* En este modo el jugador nunca será invulnerable

![](/images/modo_vidas.gif)

* El sprite que representa al jugador en este caso es el situado en penúltima posición dentro de **sprites.zxp**, justo antes del sprite de muerte de los enemigos.

![](/images/sprite_muerte.png)

