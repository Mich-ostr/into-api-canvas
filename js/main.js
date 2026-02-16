/*******************************************************
 * Programa: Dibujo de un rectángulo usando Canvas API
 * Autor: (Tu nombre aquí)
 * Fecha: (Fecha actual)
 *
 * Descripción:
 * Este programa utiliza la API Canvas de HTML5 para 
 * dibujar un rectángulo relleno dentro de un elemento 
 * <canvas> cuyo tamaño ahora se ajusta al 50% del 
 * ancho y alto de la pantalla del navegador.
 *
 * Funcionamiento general:
 * 1. Se obtiene el elemento canvas.
 * 2. Se ajusta su tamaño al 50% de la ventana.
 * 3. Se obtiene el contexto 2D.
 * 4. Se define el color de relleno.
 * 5. Se dibuja un rectángulo adaptado al tamaño del canvas.
 *******************************************************/


// ------------------------------------------------------
// 1. Obtener el elemento <canvas> del documento HTML
// ------------------------------------------------------
var canvas = document.getElementById("lienzo");


// ------------------------------------------------------
// 2. Ajustar el tamaño del canvas al 50% de la pantalla
// ------------------------------------------------------

// window.innerWidth  → ancho total visible del navegador
// window.innerHeight → alto total visible del navegador

canvas.width = window.innerWidth * 0.5;   // 50% del ancho
canvas.height = window.innerHeight * 0.5; // 50% del alto


// ------------------------------------------------------
// 3. Obtener el contexto de dibujo en 2D
// ------------------------------------------------------
var ctx = canvas.getContext("2d");


// ------------------------------------------------------
// 4. Definir el color de relleno
// ------------------------------------------------------
ctx.fillStyle = "rgb(69, 214, 195)";


// ------------------------------------------------------
// 5. Dibujar un rectángulo adaptado al nuevo tamaño
// ------------------------------------------------------

// Ahora el rectángulo ocupará todo el canvas
ctx.fillRect(10, 10, 200, 200);
