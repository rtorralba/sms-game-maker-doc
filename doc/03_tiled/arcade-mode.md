---
title: Diseñando el Juego. Modo Arcade
description: Mecánicas de juego estilo arcade, pantallas individuales y pantallas intermedias
---

# Modo Arcade (`arcadeMode`)

Si activas la propiedad **`arcadeMode = true`** en la configuración de la fase, la estructura del juego adopta una dinámica clásica de arcade de los años 80:

---

## 1. Reglas del Modo Arcade

* **Progresión Pantalla a Pantalla:** Las pantallas se juegan de forma aislada e independiente en lugar de con exploración libre abierta.
* **Superación de Pantalla:** Para completar cada habitación, el jugador debe recoger todos los ítems de esa pantalla. Al recoger el último ítem, aparece la llave que da acceso directo a la siguiente pantalla.
* **Wrap-around (Bordes Conectados):** Si el escenario no tiene muros en los bordes laterales, el protagonista puede salir por el borde izquierdo y aparecer instantáneamente por el borde derecho de la pantalla (y viceversa).
* **Posicionamiento del Personaje:** Cada pantalla debe contar con su correspondiente spawn de `mainCharacter`.

---

## 2. Parámetros del Modo Arcade

* **`arcadeHurryUpSeconds` (int):** Temporizador regresivo en segundos. Si expira el tiempo antes de recoger los ítems, se activa el estado de prisa ("Hurry Up"), acelerando el ritmo de la música y aumentando la agresividad de los enemigos.
* **`arcadeShowIntermediateScreen` (bool):** Si está activo, al superar cada pantalla se muestra una cortinilla o pantalla intermedia de conteo de puntos y bonus antes de pasar a la siguiente habitación.
* **`arcadeModeResetOnKill` (bool):** Si se activa, al perder una vida se reinicia la pantalla completa (restituyendo los ítems y enemigos a su estado inicial).
* **`arcadeModeFirstScreen` (int):** Permite elegir en qué pantalla específica arrancar la partida (muy útil durante el desarrollo para probar salas concretas sin jugar desde el principio).
