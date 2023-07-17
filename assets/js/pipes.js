export class Pipes {
    constructor(game) {
        this.game = game;
        this.pipeArray = [];
        this.pipeWidth = 64;
        this.pipeHeight = 512;  // width/height ratio = 384/3072 = 1/8
        this.topPipeX = this.game.width;
        this.topPipeY = 0;
        this.topPipeImage = topPipe;
        this.isPassed = false;
    };

    update() {

    };

    draw(context) {
        context.drawImage(this.image, this.pipeX, this.pipeY, this.pipeWidth, this.pipeHeight);
    };
};

export class BottomPipe extends Pipes {
    constructor() {
        super();
        this.bottomPipeImage = bottomPipe;

    };

    update() {

    };

    draw(context) {

    };
};