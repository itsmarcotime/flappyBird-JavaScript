export class Player {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 100;
    }

    update() {
        
    };

    draw(context) {\
        context.fillRec(this.x, this.y, 0, 0)
    };
};