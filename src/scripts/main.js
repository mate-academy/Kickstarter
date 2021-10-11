'use strict';

const videos = document.getElementsByTagName('video');
const fraction = 0.8;

function checkScroll() {
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    const x = video.offsetLeft; const y = video.offsetTop;
    const w = video.offsetWidth; const h = video.offsetHeight;
    const r = x + w; // right
    const b = y + h; // bottom

    const visibleX = Math.max(0, Math.min(w, window.pageXOffset
      + window.innerWidth - x, r - window.pageXOffset));
    const visibleY = Math.max(0, Math.min(h, window.pageYOffset
      + window.innerHeight - y, b - window.pageYOffset));

    const visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }
  }
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
