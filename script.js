const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
const resizeBtn = document.querySelector("#size");
const rainbow = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];
let rainbowIndex = 0;

let height = 16;
let width = 16;

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
      grid.style.backgroundColor = rainbow[rainbowIndex];
      rainbowIndex = (rainbowIndex + 1);
      if (rainbowIndex > 6) {
        rainbowIndex = 0;
      };
    });
    resetBtn.addEventListener("click", function () {
      grid.style.backgroundColor = "darkgrey";
    });
  }
}

function validateSize() {
  let input = prompt("Input a grid size ranging from 1-100:", "");
  let resize = parseInt(input, 10);

  if (input === null) {
    console.log(input);
    return;
  } else if (resize > 100 || resize < 1 || isNaN(resize)) {
    alert("Invalid input. Input a grid size ranging from 1-100");
    validateSize();
    return;
  } else {
    let resize = parseInt(input, 10);
    height = resize;
    width = resize;

    const dim = 960 / height;
    const heightPx = dim + "px";
    const widthPx = dim + "px";

    container.innerHTML = "";

    for (let i = 0; i < height * width; i++) {
      const grid = document.createElement("div");
      container.appendChild(grid);
      grid.className = "grid";
      grid.style.height = heightPx;
      grid.style.width = widthPx;

      grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = rainbow[rainbowIndex];
        rainbowIndex = (rainbowIndex + 1);
        if (rainbowIndex > 6) {
          rainbowIndex = 0;
        };
      });

      resetBtn.addEventListener("click", function () {
        grid.style.backgroundColor = "darkgrey";
      });
    }
  }
}

resizeBtn.addEventListener("click", validateSize);


// TODO: Extra credit #2 implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
