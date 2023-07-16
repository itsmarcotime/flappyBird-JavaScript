import { Player } from './player.js';
import { InputStuff } from './input.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 640;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.score = 0;
            this.player = new Player(this);
            this.input = new InputStuff();
        };

        update() {
            this.player.update(this.input.keys);
        };

        draw(context) {
            this.player.draw(context);
        };
    };

    const game = new Game(canvas.width, canvas.height);

    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    };
    animate();
});