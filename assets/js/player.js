export class Player {
    constructor(game) {
        this.game = game;
        // this.width = 90;
        // this.height = 70;
        // this.x = 20;
        // this.y = 230;
        // this.vy = 0;
        // this.jump = -11.5;
        // this.size = [51, 36];
        // this.weight = 1.2;
        this.x = this.game.width/8;
        this.y = this.game.height/2;
        this.width = 34;
        this.height = 24;
        this.image = player;
    }

    update(input) { 

        // jumping movement 
        // if (input.includes(' ')) {
        //     this.vy -= 3.3;
        // };
        // this.y += this.vy;
        // applyGravity()

        // if (!this.hitGround()) {
        //     this.vy += this.weight;
        // } else {
        //     // also add end game function right here
        //     this.vy = 0;
        // };
    };

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        // add these addtional arguments later sx, sy, sw, sh
        // context.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    
};