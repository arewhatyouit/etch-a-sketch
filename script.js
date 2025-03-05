const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const resizeBtn = document.querySelector("#size");

let height = 4;
let width = 4;

initialSetup();
function initialSetup() {
  const dim = 960 / height;
  const heightPx = dim + "px";
  const widthPx = dim + "px";
  for (let i = 0; i < height * width; i++) {
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.className = "grid";
    grid.style.height = heightPx;
    grid.style.width = widthPx;
    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = "lightblue";
    });
    resetBtn.addEventListener("click", function () {
      grid.style.backgroundColor = "darkgrey";
    });
  }
}

//TOFIX: input validation
resizeBtn.addEventListener("click", function () {
  let input = prompt("Input a grid size ranging from 1-100:", "16");

  if (input > 100 || input < 1) {
    input = prompt("Invalid input, try again. Input a grid size ranging from 1-100:", "16");
  } else {

  let resize = parseInt(input, 10);
  height = resize;
  width = resize;

  const dim = 960 / height;
  const heightPx = dim + "px";
  const widthPx = dim + "px";


    container.innerHTML = '';


  for (let i = 0; i < height * width; i++) {
    const grid = document.createElement("div");
    container.appendChild(grid);
    grid.className = "grid";
    grid.style.height = heightPx;
    grid.style.width = widthPx;
    console.log("grid loop ran!");
    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = "lightblue";
    });
    resetBtn.addEventListener("click", function () {
      grid.style.backgroundColor = "darkgrey";
    });
  }
  }
});