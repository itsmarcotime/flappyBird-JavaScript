import { Player } from './player.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 576;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player();
        };

        update() {

        };

        draw() {

        };
    };
});