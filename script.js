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
const foodOccupiedSpace = "food_occupied_space";
const speedOfSnake = 100;
const currentScore = document.getElementById("current_score");
const highScoreDisplay = document.getElementById("high_score");
const startBtn = document.getElementById("start_btn");
const boardOverlay = document.getElementById("board_overlay");
let currentDirection = "";
let bodyArrayCopy = [];
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
let score = 0;
let highScore = 0;

document.getElementById(currentFoodPosition).classList.add(foodOccupiedSpace);

///////////////////////////////////////////////////////////////////////////////////////
class Snake {
  constructor(startingPosition) {
    this.currentHeadPosition = startingPosition;
    this.previousHeadPosition = "";
    this.bodyArray = [this.currentHeadPosition];
  }

  moveFoodPosition() {
    do {
      const positionArray = currentFoodPosition.slice().split("-");
      positionArray[0] = Math.ceil(Math.random() * 19);
      positionArray[1] = Math.ceil(Math.random() * 19);
      currentFoodPosition = positionArray[0] + "-" + positionArray[1];
    } while (this.bodyArray.includes(currentFoodPosition));
  }

  moveStyles() {
    document
      .getElementById(`${this.previousHeadPosition}`)
      .classList.remove(snakeOccupiedSpaceStyle);
    document
      .getElementById(`${this.currentHeadPosition}`)
      .classList.add(snakeOccupiedSpaceStyle);
  }

  checkForFood() {
    if (this.currentHeadPosition === currentFoodPosition) {
      score++;
      if (score > highScore) highScore = score;
      updateScores();
      document
        .getElementById(currentFoodPosition)
        .classList.remove(foodOccupiedSpace);
      oldTail = this.bodyArray[this.bodyArray.length - 1];
      const positionArray = oldTail.slice().split("-");
      if (currentDirection === "up") +positionArray[0]--;
      if (currentDirection === "down") +positionArray[0]++;
      if (currentDirection === "left") +positionArray[1]--;
      if (currentDirection === "right") +positionArray[1]++;
      newTail = positionArray[0] + "-" + positionArray[1];
      this.bodyArray.push(newTail);
      this.moveFoodPosition();

      document
        .getElementById(currentFoodPosition)
        .classList.add(foodOccupiedSpace);
    }
  }

  moveBody() {
    this.bodyArray.forEach(function (snake, index, array) {
      if (index > 0) {
        document
          .getElementById(`${array[index]}`)
          .classList.remove(snakeOccupiedSpaceStyle);
        array[index] = bodyArrayCopy[index - 1];
        document
          .getElementById(`${array[index]}`)
          .classList.add(snakeOccupiedSpaceStyle);
      }
    });
  }

  moveLeft() {
    bodyArrayCopy = this.bodyArray.map((val) => val);
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[1]++;
    if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
    } else {
      this.currentHeadPosition = this.bodyArray[0] =
        positionArray[0] + "-" + positionArray[1];

      this.moveStyles();
      this.moveBody();
      this.checkForFood();
    }
  }

  moveRight() {
    bodyArrayCopy = this.bodyArray.map((val) => val);
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[1]--;
    if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
    } else {
      this.currentHeadPosition = this.bodyArray[0] =
        positionArray[0] + "-" + positionArray[1];

      this.moveStyles();
      this.moveBody();
      this.checkForFood();
    }
  }

  moveUp() {
    bodyArrayCopy = this.bodyArray.map((val) => val);
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[0]++;
    if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
    } else {
      this.currentHeadPosition = this.bodyArray[0] =
        positionArray[0] + "-" + positionArray[1];

      this.moveStyles();
      this.moveBody();
      this.checkForFood();
    }
  }

  moveDown() {
    bodyArrayCopy = this.bodyArray.map((val) => val);
    this.previousHeadPosition = this.currentHeadPosition;
    const positionArray = this.currentHeadPosition.slice().split("-");
    +positionArray[0]--;
    if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
    } else {
      this.currentHeadPosition = this.bodyArray[0] =
        positionArray[0] + "-" + positionArray[1];

      this.moveStyles();
      this.moveBody();
      this.checkForFood();
    }
  }
}

// Create the snake class-based object w/ starting position
const snake = new Snake("11-11");

///////////////////////////////////////////////////////////////////////////////////////
//Game Functions

const resetGame = function () {
  snake.currentHeadPosition = "11-11";
  snake.previousHeadPosition = "";
  snake.bodyArray = [snake.currentHeadPosition];
  currentDirection = "";
  currentPosition = "";
  prevPosition = "";
  newTail = "";
  oldTail = "";
  score = 0;
  clearAllIntervals();
  updateScores();
  // Reset board, remove snake body
  boardSpaces.forEach(function (row, rowIndex) {
    row.forEach(function (space) {
      document
        .getElementById(`${rowIndex + 1}-${space}`)
        .classList.remove(snakeOccupiedSpaceStyle);
    });
  });
  //Prompt user to start new game
  boardOverlay.style.display = "block";
};

// Clear all unused intervals
const clearUnusedIntervals = function () {
  if (currentDirection !== "left") clearInterval(movLeftInterval);
  if (currentDirection !== "right") clearInterval(movRightInterval);
  if (currentDirection !== "up") clearInterval(movUpInterval);
  if (currentDirection !== "down") clearInterval(movDownInterval);
};

// Clear all intervals
const clearAllIntervals = function () {
  clearInterval(movLeftInterval);
  clearInterval(movRightInterval);
  clearInterval(movUpInterval);
  clearInterval(movDownInterval);
  document.removeEventListener("keydown", movementEventListener);
};

// Update Scores
const updateScores = function () {
  currentScore.textContent = "";
  highScoreDisplay.textContent = "";

  currentScore.insertAdjacentHTML(
    "beforeend",
    `<h2>Current Score: </h2><p>${score}</p>`
  );
  highScoreDisplay.insertAdjacentHTML(
    "beforeend",
    `<h2>High Score: </h2><p>${highScore}</p>`
  );
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
      snake.moveLeft();
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
      snake.moveRight();
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
      snake.moveUp();
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
      snake.moveDown();
    }, speedOfSnake);
  }
};

// Start game function expression
const gamePlay = function () {
  document.addEventListener("keydown", movementEventListener);
};

startBtn.addEventListener("click", function () {
  gamePlay();
  updateScores();
  boardOverlay.style.display = "none";
});
