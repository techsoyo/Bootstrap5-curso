document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('cambiarColorBtn');
    var texto = document.getElementById('textoColor');
    var colores = ['text-primary', 'text-success', 'text-danger', 'text-warning'];
    var indiceColor = 0;

    boton.addEventListener('click', function() {
        texto.className = colores[indiceColor];
        indiceColor = (indiceColor + 1) % colores.length;
    });
});