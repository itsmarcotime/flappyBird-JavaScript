export class TopPipes {
  constructor(game) {
    this.game = game;
    this.pipeArray = [];
    this.pipeWidth = 64;
    this.pipeHeight = 512; // width/height ratio = 384/3072 = 1/8
    this.pipeX = this.game.width;
    this.pipeY = 0;
    this.topPipeImage = topPipe;
    this.isPassed = false;
    this.velocityX = -2;
  }

  update() {
    setInterval(placePipes, 1500);

    // function placePipes() {
    //   this.pipeArray.push(new TopPipes());
    // }
  }

  draw(context) {
    // loop through pipe array
    for (let i = 0; i < this.pipeArray.length; i++) {
      this.pipeX += this.velocityX;
      context.drawImage(this.topPipeImage, this.pipeX, this.pipeY, this.pipeWidth, this.pipeHeight);
    };
  };
};

export class BottomPipes extends TopPipes {
  constructor() {
    super();
    this.bottomPipeImage = bottomPipe;
  };

  update() {

  };

  draw() {

  };
};


