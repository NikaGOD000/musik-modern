function playSong(src, title) {
  const audio = document.getElementById('audio');
  const nowPlaying = document.getElementById('now-playing');

  audio.src = src;
  audio.play();
  nowPlaying.textContent = `Sedang memutar: ${title}`;
}