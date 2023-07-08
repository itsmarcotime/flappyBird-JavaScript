export class Player {
    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 70;
        this.x = 20;
        this.y = 230;
        this.vy = 0;
        this.weight = 1;
        this.image = player;
    }

    update(input) { 
        // jumping movement 
        if (input.includes(' ')) {
            this.vy -= 5;
        };

        this.y += this.vy;

        if (!this.hitGround()) {
            this.vy += this.weight;
        } else {
            // also add end game function right here
            this.vy = 0;
        };
        
        // top boundaries 
        if (this.y < 0) {
            this.y = 0;
        };
    };

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        // add these addtional arguments later sx, sy, sw, sh
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    hitGround() {
        return this.y >= this.game.height - this.height;
    };
};