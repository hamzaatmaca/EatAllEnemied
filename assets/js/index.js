import Soldier from "./players/soldier.js";
import Enemy from "./players/enemy.js";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
const ctx = canvas.getContext("2d");


const soldier = new Soldier(canvas.width / 2, canvas.height / 2, 40);

/********************* CREATE MULTIPLE ENEMY *******************/
let enemyArr = [];
let enemyCount = () => {
  let count = 20;
  if (count == 0) {
    count = 1;
  }

  return count;
};
for (let i = 0; i < enemyCount(); i++) {
  enemyArr.push(
    new Enemy(
      Math.floor(Math.random() * canvas.width),
      Math.floor(Math.random() * canvas.height),
      Math.floor(Math.random() * 30) > 20 ? Math.ceil(Math.random() * 30) : 20
    )
  );
}

engine();

function engine() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /********************* DRAW MULTIPLE ENEMY AND COLLISION DETECTION *******************/
  for (let i = 0; i < enemyArr.length; i++) {
    enemyArr[i].draw(ctx);
    enemyArr[i].run();

    let triangleX = enemyArr[i].x - soldier.x;
    let triangleY = enemyArr[i].y - soldier.y;
    let distance = Math.sqrt(triangleX * triangleX + triangleY * triangleY);

    if (distance < soldier.width) {
      soldier.width = soldier.width + enemyArr[i].width / 10;
      let countDeadBody = enemyArr.indexOf(enemyArr[i]);
      if (countDeadBody > -1) {
        enemyArr.splice(countDeadBody, 1);
      }
      if (enemyArr.length == 0) {
        let start = prompt(
          "--------------------------------------",
          "All Enemy Has Been Killed Start Again Press Ok"
        );
        if (start == "All Enemy Has Been Killed Start Again Press Ok") {
          location.reload();
        } else {
          location.reload();
        }
      }
    }
  }
  soldier.run();
  soldier.draw(ctx);
  requestAnimationFrame(engine);
}
