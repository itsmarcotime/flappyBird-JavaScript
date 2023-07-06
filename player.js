export class Player {
    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 70;
        this.x = 20;
        this.y = 230;
        this.image = player;
    }

    update(input) {
        if (input.includes(' ')) {
            this.y--;
        }
    };

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
        // add these addtional arguments later sx, sy, sw, sh
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
};