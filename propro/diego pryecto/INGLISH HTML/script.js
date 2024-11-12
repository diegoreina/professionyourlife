document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del carrusel
    let currentIndex = 0; // Índice de la imagen actual
    const images = document.querySelectorAll('.carousel-container img'); // Selecciona todas las imágenes

    function showImage(index) {
        // Ocultar todas las imágenes
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function changeImage(direction) {
        currentIndex += direction; // Cambia el índice según la dirección
        // Asegúrate de que el índice se mantenga dentro del rango
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Vuelve a la última imagen
        } else if (currentIndex >= images.length) {
            currentIndex = 0; // Vuelve a la primera imagen
        }
        showImage(currentIndex); // Muestra la imagen correspondiente
    }

    // Inicializa el carrusel mostrando la primera imagen
    showImage(currentIndex);

    // Función para alternar el contenido
    function toggleSubContent(id) {
        var elements = document.querySelectorAll('.sub-content');

        // Ocultar todos los contenidos
        elements.forEach(function(el) {
            el.classList.remove('active');
            el.style.display = 'none'; // Asegúrate de ocultar el contenido
        });

        // Mostrar el contenido seleccionado
        var selectedElement = document.getElementById(id);
        if (selectedElement) {
            selectedElement.classList.toggle('active'); // Alternar la visibilidad
            selectedElement.style.display = selectedElement.classList.contains('active') ? 'block' : 'none'; // Mostrar u ocultar
        }
    }

    // Asignar el evento click a los botones de navegación
    document.querySelectorAll('.button-content button').forEach(function(button) {
        button.addEventListener('click', function() {
            var id = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleSubContent(id);
        });
    });

    // Ocultar sub-contenidos al cargar
    const subContents = document.querySelectorAll('.sub-content');
    subContents.forEach(content => {
        content.classList.remove('active'); // Asegúrate de que están ocultos
        content.style.display = 'none'; // Asegúrate de que están ocultos
    });

    // Asignar eventos a los botones del carrusel
    document.getElementById('prev').addEventListener('click', function() {
        changeImage(-1);
    });

    document.getElementById('next').addEventListener('click', function() {
        changeImage(1);
    });
});

