// Obtener los elementos
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

// Añadir eventos al pasar el mouse sobre el primer div
text1.addEventListener('mouseenter', () => {
    text2.style.display = 'flex'; // Cambiar el display a flex
    text2.style.justifyContent = 'flex-start'; // Alinear el contenido a la izquierda
    text2.style.alignItems = 'center'; // Centrar verticalmente
    text2.style.width = '36%'; // Ajustar el ancho al 36%
    text2.style.marginRight = 'auto'; // Empujar el contenido restante hacia la derecha            
});

text1.addEventListener('mouseleave', () => {
    text2.style.display = 'none'; // Ocultar el div cuando el mouse sale
});

// Agrandar la imagen al hacer clic en el div "caja2" y volver a su tamaño al salir
const caja2 = document.getElementById('caja2');
const img = document.getElementById('img');

caja2.addEventListener('click', () => {
    img.style.width = '40%'; // Agrandar un 100% (de 20% a 40%)
});

caja2.addEventListener('mouseleave', () => {
    img.style.width = '20%'; // Volver al tamaño inicial
});

// Agrandar la letra del tercer div al hacer doble clic
const caja3 = document.getElementById('caja3');

caja3.addEventListener('dblclick', () => {
    caja3.style.fontSize = '2em'; // Agrandar el tamaño de la fuente
});