---
title: Diseñando el juego. Configuración general
---

Puedes añadir configuraciones generales de tu juego en las propiedades personalizadas el mapa.

Para mostrar estás configuraciones tienes que ir al menú Mapa -> Atributos del mapa.

Propiedades personalizadas:

* **128Kenabled**. Habilitar el modo 128K, si está desactivado se generará el juego para 48K.
* **ammo**. Cantidad de munición con la que empezará el personaje principal. Si seteas -1 el personaje tendrá munición infinita.
* **ammoIncrement**. Cantidad de munición que se recarga cada vez que el protagonista recoja un item de recarga de munición.
* **animatePeriodEnemy**. Número más alto, animación de los enemigos más lenta.
* **animatePeriodMain**. Número más alto, animación del personaje principal más lenta.
* **animatePeriodTile**. Número más alto, animación de los tiles más lenta.
* **arcadeHurryUpSeconds**. Segundos restantes para que el modo "Hurry up" se active y se acelere la música.
* **arcadeMode**. Si esta propiedad está activada el juego se comportará en modo arcade. Puedes ver este comportamiento [aqui](/doc/03_tiled/arcade-mode).
* **arcadeModeFirstScreen**. Puedes establecer en que pantalla empieza el juego, muy útil en el modo arcade para poder probar pantallas en concreto.
* **arcadeModeResetOnKill**. Si activas esta opción toda la pantalla se reiniciará cuando te maten.
* **arcadeModeUseSpriteId**. Si esta opción es distinto de 0, al terminar de recoger los items, en el arcade mode se mostrará el sprite ID selccionado. Por ejemplo puede usar el de escalera si tu juego no tiene.
* **arcadeShowIntermediateScreen**. Si esta opción está activada, al final de cada pantalla se mostrará una pantalla de conteo.
* **border**. Color del borde in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **borderColorItem**. Color que quieres que muestre el juego si el prota recoge un item. Solo se activará esta opción si eliges un color distinto del que tengas establecido en border.
* **borderColorKey**. Color que quieres que muestre el juego si el prota recoge una llave. Solo se activará esta opción si eliges un color distinto del que tengas establecido en border.
* **borderColorLife**. Color que quieres que muestre el juego si el prota recoge vida. Solo se activará esta opción si eliges un color distinto del que tengas establecido en border.
* **bulletDistance**. Distancia que queramos que recorra la bala. El valor 0 se traduce como distancia infinita, la bala no parará hasta que choque con algún obstáculo. Si seteamos una distancia corta como de 2, da el efecto de que el personaje ataca con el arma a corta distancia como una espada.
* **controlledGameSpeed**. Si activas esta opción la velocidad del juego será más regular aunque en una pantalla no haya enemigos.
* **currentStageEnabled**. Con esta opción puedes mostrar en el hud en que pantalla está el personaje actualmente, muy util para el modo arcade.
* **damageAmount**. Cuánto daño le hacen al personaje los enemigos.
* **dashAlwaysAvailable**. Si activas está opción el personaje tendrá el dash disponible desde el principio. Para activarla debes tener el dashEnabled activado.
* **dashEnabled**. Al activar esta opción el personaje podrá usar el dash, bien desde el principio o bien recogiendo el item que le da esta habilidad. Para usarlo debes pulsar hacia arriba cuando estés en el aire.
* **disableContinuousJump**. Si habilitas esta opción el personaje no estará continuamente saltando si mantienes pulsado hacia arriba, para volver a saltar deberás soltar el botón arriba y volver a pulsarlo.
* **enemiesRespawn**. Si los enemigos (no invencibles) vuelven a aparecer des pués de matarlos al volver a entrar en la habitación.
* **finishGameEnemy**. Aqui puedes indicar a que enemigo debes matar para que termine el juego. Solo funcionará si en la opción finishGameObjective tienes seleccionada la opción killSpecificEnemy o itemsAndKillEnemy.
* **gameName**. Nombre del juego. Aparecerá en el título loading cuando carga y el tap se generará con este nombre. 10 carácteres como máximo sin carácteres especiales (acentos, ñ...)
* **gameView**. Tipo de juego a desarrollar, side es un juego de plataformas lateral, y overhead, un juego de vista cenital.
* **goalItems**. Número de items necesarios para finalizar el juego.
* **hiScore**. Habilita la puntuación in game y el guardado de la misma para que aparezca en la pantalla de menú.
* **idleTime**. Setea el tiempo a esperar a que el personaje haga la animación idle. Si está a 0 no se activará.
* **initialLife**. Cantidad de vida inicial del personaje.
* **ink**. Color de la tinta in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **itemsCountdown**. El marcador de items mostrará el número total de items que tiene que conseguir el jugador al principio del juego e irá descendiendo para que veas los items que te quedan por recoger.
* **itemsEnabled**. Si no está habilitado no se mostrará el marcador de items.
* **itemsToOpenDoors**. Si habilitas esta opción puedes poner una puerta que no se abrirá hasta que hayas recogido ese numero de items. Muy útil para que por ejemplo no se pueda acceder al boss final hasta que casi hayas completado el juego.
* **jetPackFuel**. La cantidad de fuel para el jetPack, se es ditinto de 0 el personaje no saltará y se impulsará con el jetPack.
* **jumpType**. **constant** Salto con una velocidad hacia arriba y hacia abajo constante, el original del motor. **accelerated** Salto con deceleración hacia arriba y acelereción hacia abajo.
* **keysEnabled**. Si no está habilitado no se podrán usar llaves ni puertas de las que se abren con llaves.
* **killJumpingOnTop**. Habilita el poder de matar a los enemigos saltando encima. (Solo juego plataformas)
* **ladersEnabled**. Habilita las escaleras y podrás usarlas en tu juego. Se utilizaran los [4 tiles](/doc/02_images/tileset) acontinuación de las plataformas traspasables.
* **lifeAmount**. Cantidad de vida que incrementa al personaje los items **life**.
* **livesMode**. Habilitado tu personaje morirá cada vez que reciba daño perdiendo 1 vida y volviendo al punto donde entró de la pantalla actual. A su vez sólo ganará 1 vida con los items **life**. Puedes ver este comportamiento [aqui](/doc/03_tiled/lives-mode).
* **mainCharacterExtraFrame**. Si está habilitado, la animación del personaje usara el frame extra.
* **mainCharacterInvencible**. Si activas esta opción el prota será invencible, muy util para probar el juego y ver pantallas.
* **maxAnimatedTilesPerScreen**. Máximo de tiles animados por pantalla.
* **maxEnemiesPerScreen**. Se puede configurar la cantidad de enemigos que aparecen en pantalla (hasta 5). Evitar poner más de los que se usan para optimizar espacio.
* **messagesEnabled**. Si se activa esta opción se mostrará un mensaje de ayuda cuando se entre en contacto con algún item. puerta...
* **messagesFlashEnabled**. Si activas esta opción el mensaje de la zona de notificaciones hará flash al mostrarse.
* **musicEnabled**. Para habilitar o deshabilitar la música AY. Si se habilita la música el juego resultante sólo funcionará en 128K, para hacer una versión 48K tendrás que desmarcar guardar y volver a compilar.
* **newBeeperPlayer**. Para utilizar en nuevo reproductor de beeper mejorado para que el juego se pare mucho menos mientras suena debes activar esta opción. IMPORTANTE: Si quieres aprovechar las bondades de este nuevo player debes hacer los sonidos como se indica en [la sección de FX del manual](/doc/04_sound/fx).
* **paper**. Color del papel in game. Muy útil cuando se cambia el color de fondo del juego y del hud.
* **password**. Password que se pedirá al iniciar el juego para poder jugar. Útil para juegos con más de una carga con sistema de passwords. El password debe ser de 8 caracteres y puede ser alfanumérico, pero no utilices carácteres no ingleses como ñ, acentos...
* **platformMimicEnabled**. Al activar esta opción, los tiles usarán como color de fondo el del tile de al lado para que no quede como un pegote.
* **redefineKeysEnabled**. Habilita la opción de redefinir teclas.
* **shooting**. Con esto habilitamos o deshabilitamos el disparo del personaje.
* **shouldKillEnemies**. Con esta propiedad activa, si una habitación tiene enemigos, no podremos salir de ella hasta que los matemos a todos.
* **showIdleMessage**. Si activas esto, cuando el personaje esté unos segundos parado y entre en el mod idle, mostrara en la parte superior derecha el sprite 15 del spriteset.
* **spriteCollisionPixelPerfect**. Por defecto la colisión con los enemigos tiene cierta "bondad". Si activas esta opción la colisión será pixel perfect.
* **swordEnabled**. Si activas esta opción el prota tendrá la "espada" o arma corta activada, para atacar debes pulsar hacia abajo.
* **swordKillEnemy**. Si esta opción está activada, los enemigos moriran de un "espadazo".
* **textsEnabled**. Si activas esta opción podrás usar los textos largos en pantalla, muy util para darle cierta mecánica de aventura a tu juego.
* **textsInk**. Color de la tinta de los textos en pantalla.
* **textsPaper**. Color del papel de los textos en pantalla.
* **textsWindowHeight**. Altura de la ventana donde se muestran los textos en pantalla.
* **textsWindowWidth**. Ancho de la ventana donde se muestran los textos en pantalla.
* **textsWindowX**. X de la posición superior derecha de la ventana donde se muestran los textos en pantalla.
* **textsWindowY**. Y de la posición superior derecha de la ventana donde se muestran los textos en pantalla.
* **timerSeconds**. Segindos con que se inicializa el timer. Si está a 0 el timer está desactivado.
* **useBreakableTile**. Posibilidad de usar tiles que se rompen. Si está habilitado el tile que se romperá será el que esté definido en la posición 63 del tileset.
Puedes elegir entre 3 opciones:
    * disabled. No hay tiles rompibles.
    * all. Si hay tiles rompibles y al romper uno se rompen todos los de la habitación.
    * individual. Si hay tiles rompibles y se rompen 1 a 1.
* **useBreakableTileByTouch**. Con esta opción activada se habilitan los tiles que se rompen al tocarlos. El tile en el tileset es el 60.
* **useBreakableTileByTouchFrames**. Frames que tardará en romperse los tiles que se rompen con tocarlos.
* **waitPressKeyAfterLoad**. Si habilitas esta opción, tras la carga el juego esperará que pulses una tecla para mostrar el menú.
* **wallJumpEnabled**. Si activas esta opción el personaje podra volver a saltar si está junto a una pared. Como si hiciera perkour.
* **backgroundAttribute**. Color de fondo del juego en decimal en forma de atributos de spectrum. Por ejemplo para color de fondo negro con sprites en blanco seria 7 (00000111). Para color de fondo azul con sprites en blanco seria 15 (00001111). Si no se define este atributo se pintara fondo negro sprites blancos. Podéis usar la calculadora siguiente para saber que valor tenéis que poner.

<div style="margin: auto; width: 50%">
    <p>Generador de Atributos Master System</p>
    <form id="attributeForm">
        <label for="inkColor">Color de Tinta:</label>
        <!-- Añadir color en cada opcion del select -->
        <select id="inkColor">
            <option value="0">Negro</option>
            <option value="1">Azul</option>
            <option value="2">Rojo</option>
            <option value="3">Magenta</option>
            <option value="4">Verde</option>
            <option value="5">Cyan</option>
            <option value="6">Amarillo</option>
            <option value="7" selected>Blanco</option>
        </select><br>
        <label for="paperColor">Color de Papel:</label>
        <select id="paperColor">
            <option value="0">Negro</option>
            <option value="1">Azul</option>
            <option value="2">Rojo</option>
            <option value="3">Magenta</option>
            <option value="4">Verde</option>
            <option value="5">Cyan</option>
            <option value="6">Amarillo</option>
            <option value="7">Blanco</option>
        </select><br>
        <label for="brightness">Brillo:</label>
        <input type="checkbox" id="brightness" name="brightness"><br>
        <label for="flashing">Parpadeo:</label>
        <input type="checkbox" id="flashing" name="flashing"><br>
        <button type="button" onclick="generateAttribute()">Generar Atributo</button>
    </form>
    <br>
    <p id="attributeOutput" style="font-weight: bold"></p>

    <script>
        function generateAttribute() {
            // Leer los valores de los campos de entrada
            var inkColor = document.getElementById('inkColor').value;
            var paperColor = document.getElementById('paperColor').value;
            var brightness = document.getElementById('brightness').checked;
            var flashing = document.getElementById('flashing').checked;

            // Calcular el atributo
            var attribute = calculateAttribute(inkColor, paperColor, brightness, flashing);

            // Mostrar el atributo
            document.getElementById('attributeOutput').innerText = 'Atributo: ' + attribute;
        }

        function calculateAttribute(inkColor, paperColor, brightness, flashing) {
            // Aquí es donde se calcularía el atributo basado en los colores de tinta y papel,
            // el brillo y el parpadeo. Este código es un marcador de posición y debe ser reemplazado
            // con el cálculo real.
            binaryInkColor = decimalToBinary(inkColor).padStart(3, '0');
            binaryPaperColor = decimalToBinary(paperColor).padStart(3, '0');
            binaryBrightness = brightness ? '1' : '0';
            binaryFlashing = flashing ? '1' : '0';

            decimal = parseInt(binaryFlashing + binaryBrightness + binaryPaperColor + binaryInkColor, 2)

            return decimal.toString();
        }

        function decimalToBinary(N) {
            return (N >>> 0).toString(2);
        }
    </script>
</div>

![](/images/general_settings.png)


