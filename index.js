// Generate a random number 1 - max
function genRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

function genSeed() {

  // Create seed array
  let seed = new Array(5);
  let arrayLength = seed.length;

  // Set a random number 1 - 8 to the array
  for (let i = 0; i < arrayLength; i++) {
    seed[i] = genRandom(8);
  }

  console.log("SEED: " + seed);

  //alert(seed);

  // Using array to set values for card
  let mana = seed[0];
  let type = seed[1];
  let text = seed [2];
  let power = seed[3];
  let toughness = seed[4];

  // Setting color from 1 - 6
  let color = genRandom(6);
  console.log("COLOR: " + color);
  let container = document.getElementById("container");

  switch(color) {
    case 1:
      // Colorless
      container.style.backgroundColor = "#d3d3d3";
      break;
    case 2:
      // White
      container.style.backgroundColor = "#ffffff";
      break;
    case 3:
      // Red
      container.style.backgroundColor = "#ff3c3c";
      break;
    case 4:
      // Green
      container.style.backgroundColor= "#397a04";
      break;
    case 5:
      // Blue
      container.style.backgroundColor = "#4775ff";
      break;
    case 6:
      // Black
      container.style.backgroundColor = "#5c5c5c";
      break;
  }

}