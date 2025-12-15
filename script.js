// Obtener todos los elementos
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaPremio = document.getElementById('pantalla-premio');
const pantallaMeme = document.getElementById('pantalla-meme');
const confetiContenedor = document.getElementById('confeti');
const audioFestejo = document.getElementById('audio-festejo');

const btnIniciar = document.getElementById('btn-iniciar');
const btnRecibir = document.getElementById('btn-recibir');
const btnRegresarPremio = document.getElementById('btn-regresar-premio');

// Funciones para cambiar de pantalla
function irAPantalla(pantallaAMostrar) {
  pantallaInicio.style.display = 'none';
  pantallaPremio.style.display = 'none';
  pantallaMeme.style.display = 'none';
  pantallaAMostrar.style.display = 'block';
}

// Función para crear confeti
function crearConfeti() {
  // Limpiar confeti anterior (si hay)
  confetiContenedor.innerHTML = '';

  // Crear 100 piezas de confeti
  for (let i = 0; i < 100; i++) {
    const pieza = document.createElement('div');
    pieza.classList.add('confeti-pieza');
    
    // Asignar color aleatorio
    const colorNum = Math.floor(Math.random() * 5) + 1;
    pieza.classList.add(`color1${colorNum}`); // Corregí aquí: era color1${colorNum} pero debe ser color${colorNum}
    
    // Posición horizontal aleatoria
    pieza.style.left = `${Math.random() * 100}%`;
    
    // Duración de la animación aleatoria (entre 2 y 5 segundos)
    pieza.style.animationDuration = `${2 + Math.random() * 3}s`;
    
    // Retraso aleatorio para que no caiga todo a la vez
    pieza.style.animationDelay = `${Math.random() * 2}s`;
    
    confetiContenedor.appendChild(pieza);
  }

  // Eliminar confeti después de 7 segundos
  setTimeout(() => {
    confetiContenedor.innerHTML = '';
  }, 7000);
}

// Eventos de los botones
btnIniciar.addEventListener('click', () => {
  irAPantalla(pantallaPremio);
  crearConfeti(); // Crear confeti
  audioFestejo.currentTime = 0; // Reiniciar audio si ya estaba reproduciéndose
  audioFestejo.play().catch(err => {
    console.log('No se pudo reproducir el audio:', err);
    // Algunos navegadores requieren interacción del usuario para reproducir audio
  });
});

btnRecibir.addEventListener('click', () => irAPantalla(pantallaMeme));
btnRegresarPremio.addEventListener('click', () => irAPantalla(pantallaPremio));