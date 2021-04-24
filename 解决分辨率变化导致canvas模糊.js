const canvas = document.querySelector('canvas');
const [width, height] = [window.innerWidth, window.innerHeight];

const radio = window.devicePixelRatio;
canvas.width = width * radio;
canvas.height = height * radio;
const ctx = canvas.getContext('2d');
ctx.scale(radio, radio);
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';