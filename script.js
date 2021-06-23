// Create Board
const board = document.getElementById("board");

const boardSpaces = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
];

boardSpaces.forEach(function (row, rowIndex) {
  row.forEach(function (space) {
    const spaceHTML = `<div class="space" id="${rowIndex + 1}-${space}"></div>`;
    board.insertAdjacentHTML("afterbegin", spaceHTML);
  });
});
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
const snakeOccupiedSpaceStyle = "snake_occupied_space";
const speedOfSnake = 100;
let currentDirection = "";
let currentPosition,
  prevPosition,
  movLeftInterval,
  movRightInterval,
  movDownInterval,
  movUpInterval,
  newTail,
  oldTail;
let i = 1;
let currentFoodPosition = "13-6";

document.getElementById(currentFoodPosition).style.backgroundColor = "red";

///////////////////////////////////////////////////////////////////////////////////////
class Snake {
  constructor(startingPosition) {
    this.currentHeadPosition = startingPosition;
    this.previousHeadPosition = "";
    this.bodyArray = [this.currentHeadPosition];
  }

  moveStyles() {
    document
      .getElementById(`${this.previousHeadPosition}`)
      .classList.remove(snakeOccupiedSpaceStyle);
    document
      .getElementById(`${this.currentHeadPosition}`)
      .classList.add(snakeOccupiedSpaceStyle);

    this.bodyArray.forEach(function (space, index) {
      document.getElementById(space).classList.remove(snakeOccupiedSpaceStyle);
      if (index !== 0) space = space[index - 1];
      console.log(document.getElementById(`'${space}'`));
      document.getElementById(space).classList.add(snakeOccupiedSpaceStyle);
    });
  }

  checkForFood() {
    if (this.currentHeadPosition === currentFoodPosition) {
      oldTail = this.bodyArray[this.bodyArray.length - 1];
      const positionArray = oldTail.slice().split("-");
      if (currentDirection === "up") +positionArray[0]--;
      if (currentDirection === "down") +positionArray[0]++;
      if (currentDirection === "left") +positionArray[1]--;
      if (currentDirection === "right") +positionArray[1]++;
      newTail = positionArray[0] + "-" + positionArray[1];
      this.bodyArray.push(newTail);
    }
  }

  moveLeft() {
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[1]++;
    this.currentHeadPosition = positionArray[0] + "-" + positionArray[1];
    this.moveStyles();
    this.checkForFood();
  }

  moveRight() {
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[1]--;
    this.currentHeadPosition = positionArray[0] + "-" + positionArray[1];
    this.moveStyles();
    this.checkForFood();
  }

  moveUp() {
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[0]++;
    this.currentHeadPosition = positionArray[0] + "-" + positionArray[1];
    this.moveStyles();
    this.checkForFood();
  }

  moveDown() {
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[0]--;
    this.currentHeadPosition = positionArray[0] + "-" + positionArray[1];
    this.moveStyles();
    this.checkForFood();
  }
}

// Create the snake class-based object w/ starting position
const snake = new Snake("11-11");

///////////////////////////////////////////////////////////////////////////////////////
//Game Functions

// Clear all unused intervals
const clearUnusedIntervals = function () {
  if (currentDirection !== "left") clearInterval(movLeftInterval);
  if (currentDirection !== "right") clearInterval(movRightInterval);
  if (currentDirection !== "up") clearInterval(movUpInterval);
  if (currentDirection !== "down") clearInterval(movDownInterval);
};

///////////////////////////////////////////////////////////////////////////////////////
//Game Play Event Listener

const movementEventListener = function (e) {
  if (
    e.code === "ArrowLeft" &&
    currentDirection !== "left" &&
    currentDirection !== "right"
  ) {
    currentDirection = "left";
    clearUnusedIntervals();
    movLeftInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      if (currentPosition) {
        snake.moveLeft();
      } else {
        console.log("Game over");
        clearInterval(movLeftInterval);
        document.removeEventListener("keydown", movementEventListener);
      }
    }, speedOfSnake);
  } else if (
    e.code === "ArrowRight" &&
    currentDirection !== "right" &&
    currentDirection !== "left"
  ) {
    currentDirection = "right";
    clearUnusedIntervals();
    movRightInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      if (currentPosition) {
        snake.moveRight();
      } else {
        console.log("Game over");
        clearInterval(movRightInterval);
        document.removeEventListener("keydown", movementEventListener);
      }
    }, speedOfSnake);
  } else if (
    e.code === "ArrowUp" &&
    currentDirection !== "up" &&
    currentDirection !== "down"
  ) {
    currentDirection = "up";
    clearUnusedIntervals();
    movUpInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      if (currentPosition) {
        snake.moveUp();
      } else {
        console.log("Game over");
        clearInterval(movUpInterval);
        document.removeEventListener("keydown", movementEventListener);
      }
    }, speedOfSnake);
  } else if (
    e.code === "ArrowDown" &&
    currentDirection !== "down" &&
    currentDirection !== "up"
  ) {
    currentDirection = "down";
    clearUnusedIntervals();
    movDownInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      if (currentPosition) {
        snake.moveDown();
      } else {
        console.log("Game over");
        clearInterval(movDownInterval);
        document.removeEventListener("keydown", movementEventListener);
      }
    }, speedOfSnake);
  }
};

// Start game function expression
const gamePlay = function () {
  document.addEventListener("keydown", movementEventListener);
};

// Call game play function immediately
gamePlay();
