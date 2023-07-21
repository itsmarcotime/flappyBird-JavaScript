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
  };

  placePipes() {
    let topPipe = {
      img: this.topPipeImage,
      x: this.pipeX,
      y: this.pipeY,
      width: this.pipeWidth,
      height: this.pipeHeight,
      passed: false,
    };
    this.pipeArray.push(topPipe);
  }

  update() {
    // Update pipe positions
    for (let i = 0; i < this.pipeArray.length; i++) {
      this.pipeArray[i].x += this.velocityX;
    }

    // Remove pipes that are off canvas
    this.pipeArray = this.pipeArray.filter(
      (pipe) => pipe.x + this.pipeWidth > 0
    );
  };
  

  // update() {
  //   // start spawning
  //   setInterval(() => placePipes(), 1500);
  //   const placePipes = () => {
  //     let topPipe = {
  //       img: this.topPipeImage,
  //       x: this.pipeX,
  //       y: this.pipeX,
  //       width: this.pipeWidth,
  //       height: this.pipeHeight,
  //       passed: false
  //     };
  //     this.pipeArray.push(topPipe);
  //   };

  // };

  draw(context) {
    // loop through pipe array
    for (let i = 0; i < this.pipeArray.length; i++) {
      this.pipeX += this.velocityX;
      context.drawImage( this.topPipeImage, this.pipeX, this.pipeY, this.pipeWidth, this.pipeHeight);
    }
  }
}

export class BottomPipes extends TopPipes {
  constructor() {
    super();
    this.bottomPipeImage = bottomPipe;
  }

  update() {}

  draw() {}
}
