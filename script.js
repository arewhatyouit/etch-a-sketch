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

// TOFIX: Refactor this code for the resize button
resizeBtn.addEventListener("click", function () {
  let resize = prompt("Input grid size:", "16");
  let size = parseInt(userInput, 10);
  height = resize;
  width = resize;

  convert(height);
});

function convert() {
  const dim = 960 / height;
  const heightPx = dim + "px";
  const widthPx = dim + "px";
  return {
    heightPx,
    widthPx
  };
}

function resize(height, width, heightPx, widthPx) {
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
