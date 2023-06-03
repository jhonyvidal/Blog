const script4 = document.getElementById("script4");

script4.addEventListener("click", function(event) {

    // Solicitar al usuario una frase
    var frase = prompt("Ingrese una frase:");

    // Convertir la frase a minúsculas
    frase = frase.toLowerCase();

    // Objeto para almacenar el conteo de las vocales
    var conteoVocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
    };

    // Recorrer cada carácter de la frase y verificar si es una vocal
    for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i];
    if (esVocal(caracter)) {
        // Incrementar el conteo de la vocal correspondiente
        conteoVocales[caracter]++;
    }
    }

    // Mostrar el conteo de las vocales
    for (var vocal in conteoVocales) {
        alert("La vocal '" + vocal + "' aparece " + conteoVocales[vocal] + " veces.")
        console.log("La vocal '" + vocal + "' aparece " + conteoVocales[vocal] + " veces.");
    }

    // Función para verificar si un carácter es una vocal
    function esVocal(caracter) {
    return /[aeiouáéíóú]/.test(caracter);
    }
})