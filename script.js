function reproducirSonido() {
  const audio = document.getElementById('audio');
  
  // Verificamos si el audio existe y se puede reproducir
  if (audio) {
    console.log("Reproduciendo sonido...");
    audio.play().catch(error => {
      console.log("Error al intentar reproducir el audio: ", error);
    });
  } else {
    console.log("El archivo de audio no se encuentra.");
  }
}
