// Create Board
const board = document.getElementById("board");

const boardSpaces = [
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
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
const foodOccupiedSpace = "food_occupied_space";
const btnSelectedStyle = "btn_selected";
const currentScore = document.getElementById("current_score");
const highScoreDisplay = document.getElementById("high_score");
const startBtn = document.getElementById("start_btn");
const boardOverlay = document.getElementById("board_overlay");
const gameBoard = document.getElementById("board_wrapper");

// Color Theme Buttons
const themeNeonBtn = document.getElementById("theme_neon");
const themeClassicBtn = document.getElementById("theme_classic");
const themeDesertBtn = document.getElementById("theme_desert");

// Level Buttons
const levelEasyBtn = document.getElementById("level_easy");
const levelMediumBtn = document.getElementById("level_medium");
const levelHardBtn = document.getElementById("level_hard");

// Level Speeds
const easy = 100;
const medium = 70;
const hard = 50;

// Theme styles
const classicSnakeStyle = "snake_occupied_space_classic";
const neonSnakeStyle = "snake_occupied_space_neon";
const desertSnakeStyle = "snake_occupied_space_desert";

const classicBoardStyle = "classic_board_style";
const neonBoardStyle = "neon_board_style";
const desertBoardStyle = "desert_board_style";

let gameBoardStyle = neonBoardStyle;
let snakeOccupiedSpaceStyle = classicSnakeStyle;
let speedOfSnake = easy;
let currentDirection = "";
let bodyArrayCopy = [];
let currentPosition,
  prevPosition,
  movLeftInterval,
  movRightInterval,
  movDownInterval,
  movUpInterval,
  newTail,
  oldTail,
  prevDirection;
let i = 1;
let currentFoodPosition = "13-6";
let score = 0;
let highScore = 0;

document.getElementById(currentFoodPosition).classList.add(foodOccupiedSpace);
gameBoard.classList.add(classicBoardStyle);

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
      positionArray[0] = Math.ceil(Math.random() * 24);
      positionArray[1] = Math.ceil(Math.random() * 24);
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

      this.bodyArray.push(oldTail);
      this.moveFoodPosition();

      document
        .getElementById(currentFoodPosition)
        .classList.add(foodOccupiedSpace);
    }
  }

  moveBody() {
    this.bodyArray.forEach(function (_, index, array) {
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
    // If player hits direction keys too close together, this prevents snake from running backwards into itself and causing game over
    if (snake.bodyArray[1] === positionArray[0] + "-" + positionArray[1]) {
      clearAllIntervals();
      resumePrevCourse();
      // If snake runs into itself or outside of border
    } else if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
      // If snake goes into valid space
    } else {
      prevDirection = "left";
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
    // If player hits direction keys too close together, this prevents snake from running backwards into itself and causing game over
    if (snake.bodyArray[1] === positionArray[0] + "-" + positionArray[1]) {
      clearAllIntervals();
      resumePrevCourse();
      // If snake runs into itself or outside of border
    } else if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
      // If snake goes into valid space
    } else {
      prevDirection = "right";
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
    // If player hits direction keys too close together, this prevents snake from running backwards into itself and causing game over
    if (snake.bodyArray[1] === positionArray[0] + "-" + positionArray[1]) {
      clearAllIntervals();
      resumePrevCourse();
      // If snake runs into itself or outside of border
    } else if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
      // If snake goes into valid space
    } else {
      prevDirection = "up";
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
    // If player hits direction keys too close together, this prevents snake from running backwards into itself and causing game over
    if (snake.bodyArray[1] === positionArray[0] + "-" + positionArray[1]) {
      clearAllIntervals();
      resumePrevCourse();
      // If snake runs into itself or outside of border
    } else if (
      snake.bodyArray.includes(positionArray[0] + "-" + positionArray[1]) ||
      !document.getElementById(positionArray[0] + "-" + positionArray[1])
    ) {
      resetGame();
      // If snake goes into valid space
    } else {
      prevDirection = "down";
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

const resumePrevCourse = function () {
  if (prevDirection === "left") {
    currentDirection = "left";
    clearUnusedIntervals();
    movLeftInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      snake.moveLeft();
    }, speedOfSnake);
  }
  if (prevDirection === "right") {
    currentDirection = "right";
    clearUnusedIntervals();
    movRightInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      snake.moveRight();
    }, speedOfSnake);
  }
  if (prevDirection === "up") {
    currentDirection = "up";
    clearUnusedIntervals();
    movUpInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      snake.moveUp();
    }, speedOfSnake);
  }
  if (prevDirection === "down") {
    currentDirection = "down";
    clearUnusedIntervals();
    movDownInterval = setInterval(() => {
      currentPosition = document.getElementById(snake.currentHeadPosition);
      snake.moveDown();
    }, speedOfSnake);
  }
  gamePlay();
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
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Difficulty Menu Event Listeners
levelEasyBtn.addEventListener("click", function () {
  speedOfSnake = easy;
  // Change btn styles
  levelEasyBtn.classList.add(btnSelectedStyle);
  levelMediumBtn.classList.remove(btnSelectedStyle);
  levelHardBtn.classList.remove(btnSelectedStyle);
});
levelMediumBtn.addEventListener("click", function () {
  speedOfSnake = medium;
  // Change btn styles
  levelMediumBtn.classList.add(btnSelectedStyle);
  levelEasyBtn.classList.remove(btnSelectedStyle);
  levelHardBtn.classList.remove(btnSelectedStyle);
});
levelHardBtn.addEventListener("click", function () {
  speedOfSnake = hard;
  // Change btn styles
  levelHardBtn.classList.add(btnSelectedStyle);
  levelMediumBtn.classList.remove(btnSelectedStyle);
  levelEasyBtn.classList.remove(btnSelectedStyle);
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Color Theme Menu Event Listeners
themeClassicBtn.addEventListener("click", function () {
  snakeOccupiedSpaceStyle = classicSnakeStyle;

  // Change button styles
  themeClassicBtn.classList.add(btnSelectedStyle);
  themeNeonBtn.classList.remove(btnSelectedStyle);
  themeDesertBtn.classList.remove(btnSelectedStyle);

  gameBoard.classList.remove(neonBoardStyle);
  gameBoard.classList.add(classicBoardStyle);
  gameBoard.classList.remove(desertBoardStyle);
});

themeNeonBtn.addEventListener("click", function () {
  snakeOccupiedSpaceStyle = neonSnakeStyle;

  // Change button styles
  themeClassicBtn.classList.remove(btnSelectedStyle);
  themeNeonBtn.classList.add(btnSelectedStyle);
  themeDesertBtn.classList.remove(btnSelectedStyle);

  gameBoard.classList.add(neonBoardStyle);
  gameBoard.classList.remove(classicBoardStyle);
  gameBoard.classList.remove(desertBoardStyle);
});

themeDesertBtn.addEventListener("click", function () {
  snakeOccupiedSpaceStyle = desertSnakeStyle;

  // Change button styles
  themeClassicBtn.classList.remove(btnSelectedStyle);
  themeNeonBtn.classList.remove(btnSelectedStyle);
  themeDesertBtn.classList.add(btnSelectedStyle);

  gameBoard.classList.remove(neonBoardStyle);
  gameBoard.classList.remove(classicBoardStyle);
  gameBoard.classList.add(desertBoardStyle);
});

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
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

// Start button clicked
startBtn.addEventListener("click", function () {
  gamePlay();
  updateScores();
  // hide menu overlay
  boardOverlay.style.display = "none";
});

//Immediately update scores
updateScores();
