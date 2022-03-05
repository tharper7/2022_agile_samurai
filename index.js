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


  // Using array to set values for card
  let mana = seed[0];
  let type = seed[1];
  let text = seed [2];
  let power = seed[3];
  let toughness = seed[4];
  
  // Set Power and Toughness
  let powerValue = document.getElementById("cardPower");
  let toughnessValue = document.getElementById("cardToughness");
  
  powerValue.innerHTML = power + " /";
  toughnessValue.innerHTML = toughness;

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

  // Set text format effects/keywords
  let textBox = document.getElementById("cardText");
  let textType = genRandom(7);
  let textEffect = genRandom(8);
  let textTrigger = genRandom(5);
  let textCost = genRandom(4);
  let textAbility = genRandom(8);
  
  switch(textType) {
    case 1:
      textType = "Creature";
      break;
    case 2:
      textType = "Artifact";
      break;
    case 3:
      textType = "Enchantment";
      break;
    case 4:
      textType = "Instant";
      break;
    case 5:
      textType = "Sorcery";
      break;
    case 6:
      textType = "Planeswalker";
      break;
    case 7:
      textType = "Land";
      break;
  }
  
  switch(textEffect) {
    case 1:
      textEffect = "draw a card";
      break;
    case 2:
      textEffect = "create a 2/2 black zombie creature token";
      break;
    case 3:
      textEffect = "draw two cards and then discard a card";
      break;
    case 4:
      textEffect = "return a noncreature card from your graveyard to your hand";
      break;
    case 5:
      textEffect = "return a target nonland permanent to it's owners hand";
      break;
    case 6:
      textEffect = "exile a card from a graveyard";
      break;
    case 7:
      textEffect = "add one mana of any color to your mana pool";
      break;
    case 8:
      textEffect = "make target player mill 2 cards";
      break;
  }
  
  switch(textTrigger) {
    case 1:
      textTrigger = "dies";
      break;
    case 2:
      textTrigger = "enters the battlefield";
      break;
    case 3:
      textTrigger = "leaves the battlefield";
      break;
    case 4:
      textTrigger = "attacks";
      break;
    case 5:
      textTrigger = "deals combat damage";
      break;
  }
  
  switch(textAbility) {
    case 1:
      textAbility = "Deathtouch";
      break;
    case 2:
      textAbility = "Lifelink";
      break;
    case 3:
      textAbility = "Vigilance";
      break;
    case 4:
      textAbility = "First Strike";
      break;
    case 5:
      textAbility = "Double Strike";
      break;
    case 6:
      textAbility = "Indestructible";
      break;
    case 7:
      textAbility = "Haste";
      break;
    case 8:
      textAbility = "Trample";
      break;
  }
  
  // Set text format and add it to the textbox
  switch(text) {
    case 1:
      textBox.innerHTML = "Whenever you cast a " + textType + " spell, you may " + textEffect + ".";
      break;
    case 2:
      textBox.innerHTML = "Whenever a creature you control " + textTrigger + ", you may " + textEffect + ".";
      break;
    case 3:
      textBox.innerHTML = textAbility + "<br>" + textCost + ", TAP: " + textEffect + " and you gain 3 life.";
      break;
    case 4:
      textBox.innerHTML = textAbility + "<br>If you cast a " + textType + " this turn, creatures you control get +" + textCost + "/+" + textCost + ".";
      break;
    case 5:
      textBox.innerHTML = textAbility + "<br>Sacrifice " + textCost + " other creatures: " + textEffect + ". Target " + textType + " gains shroud until end of turn.";
      break;
    case 6:
      if (textType.equals("Instant") || textType.equals("Sorcery")) {
        textBox.innerHTML = textAbility + "<br>If you have cast at least " + textCost + " " + textType + ", until end of turn " + textType + " you control can't be countered.";
      } else {
        textBox.innerHTML = textAbility + "<br>If you control at least " + textCost + " " + textType + ", " + textType + "s you control have indestructible.";
      }
      console.log("Type: " + textType);
      break;
    case 7:
      textBox.innerHTML = "At the begining of your upkeep, you may play a " + textType + " card from your graveyard. This spell costs " + textCost + " less to cast.";
      break;
    case 8:
      textBox.innerHTML = textAbility + "<br>At the beginning of your end step, you may discard a card. If you do, " + textEffect; 
  }
  
  
  
}