document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surprise-button');
    const nosotrosLink = document.getElementById('nosotros-link');
    const inicioLink = document.getElementById('inicio-link');
    const mainImage = document.getElementById('main-image');
    const audioPlayer = document.getElementById('audio-player'); // Elemento de audio

    const welcomeSection = document.querySelector('.welcome');
    const surpriseContent = document.getElementById('surprise-content');

    // Estado inicial de reproducción
    let isPlaying = false;

    // Función para ocultar la imagen y la sección de bienvenida
    const hideMainContent = () => {
        mainImage.style.display = 'none';
        welcomeSection.style.display = 'none';
    };

    // Función para mostrar la imagen y la sección de bienvenida
    const showMainContent = () => {
        mainImage.style.display = 'block';
        welcomeSection.style.display = 'block';
        surpriseContent.style.display = 'none';
    };

    // Función para reproducir o pausar la canción
    const toggleAudio = () => {
        if (isPlaying) {
            audioPlayer.pause(); // Pausa la canción
            surpriseButton.textContent = '⏯️Mi Princesa - Jason Garcia'; // Actualiza el texto del botón
        } else {
            audioPlayer.play(); // Reproduce la canción
            surpriseButton.textContent = '⏯️Mi Princesa'; // Actualiza el texto del botón
        }
        isPlaying = !isPlaying; // Cambia el estado
    };

    // Configura los eventos para los enlaces
    if (nosotrosLink) {
        nosotrosLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideMainContent();
            surpriseContent.innerHTML = '<iframe src="https://aronhdez23122005.github.io/CARTASARAHI/INVITACION.html" title="Sorpresa" width="100%" height="1000px" style="border:none;"></iframe>';
            surpriseContent.style.display = 'block';
        });
    }

    if (inicioLink) {
        inicioLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMainContent();
        });
    }

    // Evento para el botón sorpresa
    surpriseButton.addEventListener('click', () => {
        toggleAudio(); // Reproduce o pausa la canción
    });
});
