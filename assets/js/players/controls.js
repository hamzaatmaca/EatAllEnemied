class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.back = false;
    this.#soldierControlHandler();
  }
  #soldierControlHandler() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
        case "ArrowDown":
          this.back = true;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
        case "ArrowDown":
          this.back = false;
        default:
          break;
      }
    });
  }
}

export default Controls;
