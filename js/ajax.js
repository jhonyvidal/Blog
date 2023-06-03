window.addEventListener('DOMContentLoaded', function() {
    // Obtiene la URL de la página actual
    var currentURL = window.location.href;

    // Asigna la URL al valor del cuadro de texto
    var urlInput = document.getElementById('urlInput');
    urlInput.value = currentURL;

    var showContentsBtn = document.getElementById('showContentsBtn');
    showContentsBtn.addEventListener('click', function() {
        var urlInput = document.getElementById('urlInput').value;
        var statusZone = document.getElementById('statusZone');
        var headersZone = document.getElementById('headersZone');
        var statusCodeZone = document.getElementById('statusCodeZone');
        var contentZone = document.getElementById('contentZone');
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            switch (xhr.readyState) {
                case 0:
                    statusZone.textContent = 'Estado de la petición: No iniciada';
                    break;
                case 1:
                    statusZone.textContent = 'Estado de la petición: Cargando';
                    break;
                case 2:
                    statusZone.textContent = 'Estado de la petición: Cargada';
                    break;
                case 3:
                    statusZone.textContent = 'Estado de la petición: Interactivo';
                    break;
                case 4:
                    statusZone.textContent = 'Estado de la petición: Completada';
                    break;
            }
            
            if (xhr.readyState === 4) {
                statusCodeZone.textContent = 'Código de estado: ' + xhr.status + ' ' + xhr.statusText;
                
                var headers = xhr.getAllResponseHeaders();
                headersZone.textContent = 'Cabeceras HTTP de la respuesta del servidor:\n' + headers;
                
                contentZone.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', urlInput, true);
        xhr.send();
    });
});
