import Controls from "./controls.js";

class Enemy {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 6);
    this.dx = this.speed != 0 ? this.speed : 1;
    this.dy = this.speed != 0 ? this.speed : 1;
    this.width = width;
    this.controls = new Controls();
    this.enemyRotateTrigger = Math.floor(Math.random() * 10);
    this.palette = [
      "green",
      "blue",
      "pink",
      "yellow",
      "red",
      "orange",
      "aqua",
      "darkorange",
      "purple",
      "cadetblue",
      "cornsilk",
      "dimgrey",
      "hotpink",
      "lawngreen",
      "black",
      "limegreen",
      "orange",
      "plum",
      "skyblue",
    ];
  }

  run() {
    this.#enemyRun();
    this.#collesionBorderDetection();
  }

  #enemyRun() {
    if (this.enemyRotateTrigger < 5) {
      this.x += this.dx;
      this.y += this.dy;
    } else {
      this.x -= this.dx;
      this.y -= this.dy;
    }
  }
  #collesionBorderDetection() {
    if (this.x <= this.width) {
      this.dx = -this.dx;
    }
    if (this.x >= window.innerWidth - this.width) {
      this.dx = -this.dx;
    }
    if (this.y <= this.width) {
      this.dy = -this.dy;
    }
    if (this.y >= window.innerHeight - this.width) {
      this.dy = -this.dy;
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    ctx.fillStyle =
      this.palette[Math.ceil(Math.random() * this.palette.length)];
    ctx.fill();
  }
}

export default Enemy;
