import { Player } from './player.js';
import { InputStuff } from './input.js';
import { TopPipes, BottomPipes } from './pipes.js';

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
        this.topPipes = new TopPipes(this);

        this.spawnPipeInterval = 1500; // Adjust the interval as needed
        this.lastSpawnTime = 0;
      };

      spawnPipes() {
        setTimeout(() => {
            this.topPipes.placePipes(); // Spawn a new pipe
        }, "1500");
      };
      

      update() {
        this.spawnPipes()
        this.player.update(this.input.keys);
        this.topPipes.update();
        // this.bottomPipe.update();
      };

      draw(context) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.player.draw(context);
        this.topPipes.draw(context);
        // this.bottomPipe.draw(context);
      };
    };

    const game = new Game(canvas.width, canvas.height);
    game.spawnPipes();

    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    };
    animate();
});