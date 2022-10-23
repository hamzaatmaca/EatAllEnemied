import Controls from "./controls.js";

class Soldier {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.controls = new Controls();
  }

  run() {
    this.#soldierRun();
    this.#collesionBorderDetection();
  }
  #soldierRun() {
    this.controls.forward == true ? (this.y -= 10) : "";
    this.controls.back == true ? (this.y += 5) : "";
    this.controls.right == true ? (this.x += 5) : "";
    this.controls.left == true ? (this.x -= 5) : "";
  }
  #collesionBorderDetection() {
    if (this.controls.left && this.x <= this.width) {
      this.x = this.width;
    }
    if (this.controls.right && this.x >= window.innerWidth - this.width) {
      this.x = window.innerWidth - this.width;
    }
    if (this.controls.forward == true && this.y <= this.width) {
      this.y = this.width;
    }
    if (
      this.controls.back == true &&
      this.y >= window.innerHeight - this.width
    ) {
      this.y = window.innerHeight - this.width;
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.font = "20px Arial";
    ctx.fillText(
      "Press Arrow Key And Move Circle Eat All the Enemies by Falling on Them",
      10,
      50
    );
    ctx.stroke();
    ctx.fill();
  }
}

export default Soldier;
