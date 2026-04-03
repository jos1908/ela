function reproducirSonidoYMostrarTexto() {
  const audio = document.getElementById('audio');
  const textoElemento = document.getElementById('texto-aparece');
  const gif = document.getElementById('cartman-gif');

  const textoCompleto = "Kyle te amo bebé puedes vivir escapando fingir que te gustan las niñas pero cuando nos besamos hay magia no lo perdamos Kyle quiero abrazarte por las mañanas y amarte por las noches Kyle te prometo solo amor y felicidad plena I swear by the moon and stars in the sky I'll be there JOSS.";
  let index = 0;

  textoElemento.innerHTML = '';
  audio.play();

  gif.style.display = 'block'; // 👈 mostrar el gif al presionar
  gif.style.filter = 'grayscale(0%)';
  gif.style.opacity = '1';

  const intervalo = setInterval(() => {
    textoElemento.innerHTML += textoCompleto[index];
    index++;
    if (index >= textoCompleto.length) {
      clearInterval(intervalo);
    }
  }, 81);
}
function reproducirSonidoYMostrarTexto() {
  const audio = document.getElementById('audio');
  const textoElemento = document.getElementById('texto-aparece');
  const gif = document.getElementById('cartman-gif');

  const textoCompleto = "Kyle te amo bebé puedes vivir escapando fingir que te gustan las niñas pero cuando nos besamos hay magia no lo perdamos Kyle quiero abrazarte por las mañanas y amarte por las noches Kyle te prometo solo amor y felicidad plena I swear by the moon and stars in the sky I'll be there JOSS.";
  let index = 0;

  textoElemento.innerHTML = '';
  audio.play();

  gif.style.display = 'block'; // 👈 mostrar el gif al presionar
  gif.style.filter = 'grayscale(0%)';
  gif.style.opacity = '1';

  const intervalo = setInterval(() => {
    textoElemento.innerHTML += textoCompleto[index];
    index++;
    if (index >= textoCompleto.length) {
      clearInterval(intervalo);
    }
  }, 81);
}
function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(crearCorazon, 200); // 👈 Esto es lo que hace que aparezcan constantemente
