export class Player {
    constructor(game) {
        this.game = game;
        this.x = this.game.width/8;
        this.y = this.game.height/2;
        this.width = 34;
        this.height = 24;
        this.image = player;
    };

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
        // context.fillStyle = "green";
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        // add these addtional arguments later sx, sy, sw, sh
    };

};