
// Generate a random number 0-9
function genRandom(max) {
  return Math.floor(Math.random() * max);
  
  
  
}

function genSeed() {

  // Create seed array
  var seed = new Array(5);

  // Assign each array element a number 0-9
  seed.forEach(function(element, index) {
    seed[index] = genRandom(9); 
  });

  alert(seed);
}