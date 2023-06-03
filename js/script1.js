const script1 = document.getElementById("script1");

script1.addEventListener("click", function(event) {
    // Obtener la cadena de entrada del usuario
    var entrada = prompt("Ingrese una cadena:");

    // Eliminar los espacios en blanco y convertir todo a minúsculas
    var cadena = entrada.toLowerCase().replace(/\s/g, '');

    // Crear una copia invertida de la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');

    // Verificar si la cadena original es igual a la cadena invertida
    if (cadena === cadenaInvertida) {
    alert("La cadena ingresada es un palíndromo.");
    } else {
    alert("La cadena ingresada no es un palíndromo.");
    }
})

