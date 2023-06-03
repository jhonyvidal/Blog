const script2 = document.getElementById("script2");

script2.addEventListener("click", function(event) {
    
    // Solicitud de dos números
    var numero1 = prompt("Ingrese el primer número:");
    var numero2 = prompt("Ingrese el segundo número:");

    // Convertir los números ingresados a tipo numérico
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Verificar cuál es el mayor número
    var mensaje;

    if (numero1 > numero2) {
    mensaje = "El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").";
    } else if (numero1 < numero2) {
    mensaje = "El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").";
    } else {
    mensaje = "Ambos números son iguales.";
    }

    // Mostrar el resultado en la pantalla
    alert(mensaje);
})