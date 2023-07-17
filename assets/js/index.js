import { Player } from './player.js';
import { InputStuff } from './input.js';
import { Pipes, BottomPipe } from './pipes.js';

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
            // this.topPipe = new Pipes(this);
            // this.bottomPipe = new BottomPipe();
        };

        update() {
            this.player.update(this.input.keys);
            // this.topPipe.update();
            // this.bottomPipe.update();
        };

        draw(context) {
            this.player.draw(context);
            // this.topPipe.draw(context);
            // this.bottomPipe.draw(context);
            
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

    setInterval(placePipes, 1500);

    function placePipes() {

    };
});