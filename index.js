// Generate a random number 0-9
function genRandom(max) {
  return Math.floor(Math.random() * max);
  
  
  
}

function genSeed() {

  // Create seed array
  var seed = new Array(5);
  var arrayLength = seed.length;

  // Set a random number 0 - 9
  for (var i = 0; i < arrayLength; i++) {
    seed[i] = genRandom(9);
  }

  alert(seed);
}