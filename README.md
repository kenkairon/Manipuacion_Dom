CUE: MANIPULACIÓN DEL DOM CON JAVASCRIPT
REBOUND EXERCISE: MANIPULANDO EL DOM

Para resolver este ejercicio, debe haber revisado la lectura y los videos de la CUE Manipulación del
DOM con JavaScript.

EJERCICIO
Considerando los conocimientos adquiridos durante esta CUE, vamos a manipular el DOM en base
al HTML que se entrega a continuación: 

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interacciones con el DOM</title>
    <link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>
    <div class="caja1 container">
        <div id="text1">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, accusantium distinctio accusamus totam rem at ex alias labore veniam aliquam nisi recusandae esse voluptatum culpa veritatis enim porro dolor quis?</p>
        </div>
        <div id="text2">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, accusantium distinctio accusamus totam rem at ex alias labore veniam aliquam nisi recusandae esse voluptatum culpa veritatis enim porro dolor quis?</p>
        </div>
        <br>
    </div>
    <div id="caja2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/800px-Pac-Man_Cutscene.svg.png" id="img" width="20%" alt="">
    </div>
    <div id="caja3">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, accusantium distinctio accusamus totam rem at ex alias labore veniam aliquam nisi recusandae esse voluptatum culpa veritatis enim porro dolor quis?</p>
    </div>
    <script src="assets/js/script.js"></script>
</body>
</html>

 • Al pasar el mouse por el primer <div> “text1” se mostrará el segundo y al salir de él se
ocultará nuevamente.
• Al hacer clic en el <div> id “caja2” la imagen deberá agrandarse un 100% y al salir de ella,
volver a su tamaño inicial.
• Con el tercer <div> la letra se agrandará al hacer doble clic en él.
• La imagen seleccionada para el trabajo es irrelevante.  
