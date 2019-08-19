class Paddle {
  constructor(game_width, game_height) {
    this.width = 150;
    this.height = 30;

    this.position = {
      x: game_width / 2 - this.width / 2,
      y: game_height - this.height - 10
    };
  }
  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("game_screen");
let ctx = canvas.getContext("2d");

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
