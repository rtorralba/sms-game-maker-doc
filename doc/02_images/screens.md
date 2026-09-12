---
title: Imágenes base. Pantallas
---

Para crear tus juegos para Master System necesitas crear/editar algunas imágenes.

**Pantallas** como la principal, de carga, HUD...

Tienes que crear 4 pantallas en SCR en la carpeta assets/screens loading.scr, title.scr, ending.scr y hud.scr.

Opcionalmente puedes crar también una pantalla para la introducción (intro.scr) y/o game over (gameover.scr)

Recomiendo usar programas especializados como [ZX Paintbrush](https://sourcesolutions.itch.io/zx-paintbrush).

Tenéis ejemplos en la misma carpeta para simplemente modificar las pantallas existentes y ver que requisitos tienen (tamaño...)

## Pantallas obligatorias

### Carga

Esta imagen (assets/screens/loading.scr) será usada en la pantalla de carga. Es la que se muestra mientras tu juego está cargando.

![](/images/loading.png)

### Pantalla principal

Esta imagen (assets/screens/title.scr) es la que se muestra nada más cargar el juego y que debe contener las opciones que puede seleccionar el usuario.

1. Teclado
2. Kempston
3. Sinclair
4. Redefine (Si lo has habilitado en la [configuración](/doc/03_tiled/general-configuration))

Nos ayudaría bastante que en la pantalla de inicio añadieras nuestro logo. Puedes encontrar una versión para spectrum [aquí](/images/logo_spectrum.png)

![](/images/title.png)

### Ending

Esta imagen (assets/screens/ending.scr) se mostrará cuando el usuario se pase el juego.

![](/images/ending.png)

### HUD

Esta imagen (assets/screens/hud.scr) se mostrará debajo de tu juego para indicarle al usuario cuanta vida le queda y cuantas llaves e items ha recolectado.

Tiene el mismo tamaño que las anteriores pero solo necestas diseñar la parte de abajo.

![](/images/hud.png)

#### Cambiar la posición de los elementos del HUD
Para cambiar la posición de los elementos del HUD, vida, munición, llaves, marcador... Solo tienes que abrir el fichero assets/screens/hud.tmx com en Tiled y mover dichos elementos de la capa de objetos a donde queráis que imprima esos datos.

![](/images/hud_positioning.png)

Para saber que es cada cosa le hemos puesto distintos colores a cada elemento y la inicial.

![](/images/hud-tileset.png)

* L -> Life (3 caracteres)
* A -> Ammo (3 caracteres)
* K -> Keys (2 caracteres)
* S -> Score (5 caracteres)
* I -> Items (2 caracteres)
* M -> Messages (2 líneas de 8 caracteres)
* F -> Fuel (3 caracteres)

## Pantallas opcionales (Sólo 128K)

Las siguientes pantallas no son obligatorias y solo funcionarán en la versión 128K (128Kenabled)

### Intro

Esta pantalla (assets/screens/intro.scr) se mostrará cuando el usuario elija la opción de control para jugar antes de que se inicie el juego, para contrinuar con el juego el usuario deberá pulsar intro. Si no está este fichero en la carpeta assets/screens el motor considerará que no está habilitada y el juego iniciará de inmediato.

![](/images/intro.png)

### Game over

Esta pantalla (assets/screens/gameover.scr) se mostrará cuando nos maten en el juego antes de volver al menú principal y el usuario deberá pulsar enter para que este se muestre. Si no está este fichero en la carpeta assets/screens el motor considerará que no está habilitada y el juego mostrará el habitoal texto de GAME OVER en mitad de la pantalla y esperara al enter también.

![](/images/gameover.png)

