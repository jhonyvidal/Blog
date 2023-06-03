const script3 = document.getElementById("script3");

script3.addEventListener("click", function(event) {
    // Solicitar al usuario una frase
    var frase = prompt("Ingrese una frase:");

    // Convertir la frase a minúsculas
    frase = frase.toLowerCase();

    // Variables para almacenar las vocales encontradas
    var vocales = "";

    // Recorrer cada carácter de la frase y verificar si es una vocal
    for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i];
    if (esVocal(caracter)) {
        // Agregar la vocal encontrada a la variable vocales
        vocales += caracter + " ";
    }
    }

    // Mostrar las vocales encontradas en la frase
    if (vocales !== "") {
        alert("Las vocales encontradas en la frase son: " + vocales);
    } else {
        alert("No se encontraron vocales en la frase.")
    }

    // Función para verificar si un carácter es una vocal
    function esVocal(caracter) {
        return /[aeiouáéíóú]/.test(caracter);
    }
})