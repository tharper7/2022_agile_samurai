/*jshint esversion: 6 */
// Generate a card on load
window.onload = genValue();

// Generate a random number 1 - max
function genRandomOneMax(max) {
  return Math.floor(Math.random() * max + 1);
}

// Generate a random number 0 - items
function genRandomZeroItems(items) {
  return Math.floor(Math.random() * items);
}

// Generate a random boolean
function genRandomBoolean() {
  return Math.random() < 0.5;
}

function genValue() {

    // Create value array
    var value = new Array(5);
    var arrayLength = value.length;

    // Set a random number 1 - 8 to the array
    for (var i = 0; i < arrayLength; i++) {
        value[i] = genRandomOneMax(8);
    }

    console.log("VALUE: " + value);

    // Using array to set values for card
    var mana = value[0];
    var type = value[1];
    var text = value[2];
    var power = value[3];
    var toughness = value[4];

    // Generate random color
    genColor();

    // Generate values for the card
    genPowerToughness(power, toughness);
  
    // Set text format to selected format, or stay random if unselected
    var selText = document.querySelector("#selFormat").selectedIndex;
    if (selText == 0) {
      genText(text);
    } else {
      genText(selText);
    }
    

    // Text
    function genText(textValue) {
        // Set text format effects/keywords
        var textBox = document.getElementById("cardText");
        var textType = "";
        var textEffect = genRandomOneMax(8);
        var textTrigger = genRandomOneMax(5);
        var textCost = genRandomOneMax(4);
        var textAbility = "";

        console.log("textEffect: " + textEffect);
        console.log("textTrigger: " + textTrigger);
        console.log("textCost: " + textCost);

        // Type
        const typeArray = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
        textType = typeArray[(genRandomZeroItems(typeArray.length))];

        // Effect
        switch (textEffect) {
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
              textEffect = "target player mills 2 cards";
              break;
        }
        
      
        // Triggers
        switch (textTrigger) {
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

        // Ability
        const abilityArray = ["Deathtouch", "Lifelink", "Vigilance", "First Strike", "Double Strike", "Indestructible", "Haste", "Trample"];
        textAbility = abilityArray[(genRandomZeroItems(abilityArray.length))];

        // Set text format and add it to the textbox
      
        
        switch (textValue) {
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
                if (textType == "Instant" || textType == "Sorcery") {
                    textBox.innerHTML = textAbility + "<br>If you have cast at least " + textCost + " " + textType + ", until end of turn " + textType + " you control can't be countered.";
                } else {
                    textBox.innerHTML = textAbility + "<br>If you control at least " + textCost + " " + textType + ", " + textType + "s you control have indestructible.";
                }
                break;
            case 7:
                if (textType == "Land") {
                  textBox.innerHTML = textAbility + "<br>At the begining of your upkeep, you may play a " + textType + " card from your graveyard.";
                } else {
                  textBox.innerHTML = "At the begining of your upkeep, you may play a " + textType + " card from your graveyard. This spell costs " + textCost + " less to cast.";
                }
                break;
            case 8:
                textBox.innerHTML = textAbility + "<br>At the beginning of your end step, you may discard a card. If you do, " + textEffect;
                break;
        }
        
    }


    // Power/Toughness
    function genPowerToughness(power, toughness) {
        // Set Power and Toughness
        var cardPowerToughness = document.getElementById("cardPowerToughness");
        //var toughnessValue = document.getElementById("cardToughness");

        cardPowerToughness.innerHTML = power + " / " + toughness;
    }

  
    // Color
    function genColor() {
      // Setting color from 1 - 6
      const colorArray = ["colorless", "white", "red", "blue", "green", "black"];
      const container = document.getElementById("container");
    
      var color;
      var selColor = document.querySelector("#selColor").value;
      console.log("selColor Value: " + selColor);


      if (selColor != "default") {
        color = selColor;
      } else {
        color = colorArray[(genRandomZeroItems(colorArray.length))];
      }
      container.style.backgroundImage = "url('./images/background_" + color + ".png')";
      console.log("Color: " + color);

      genMana(color);
      genType(color);
      genName(color);
      return color;
    }
  
    // Mana
    function genMana(color) {
        var mana = genRandomOneMax(8);

        // Set mana
        var manaValue = document.getElementById("cardMana");
        var manaValue2 = document.getElementById("cardMana2");
        var manaValue3 = document.getElementById("cardMana3");

        console.log("mana: " + mana);
        
        // Clear out any symbols from a previous card
        manaValue.style.backgroundImage = "none";
        manaValue2.style.backgroundImage = "none";
        manaValue3.style.backgroundImage = "none";

        if (color == "colorless") {
          manaValue.style.backgroundImage = "url('./images/" + mana + ".png')";
        } else {
          switch (mana) {
            case 1:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              break;
            case 2:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/1.png')";
              break;
            case 3:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/2.png')";
              break;
            case 4:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue3.style.backgroundImage = "url('./images/2.png')";
              break;
            case 5:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue3.style.backgroundImage = "url('./images/3.png')";
              break;
            case 6:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue3.style.backgroundImage = "url('./images/4.png')";
              break;
            case 7:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue3.style.backgroundImage = "url('./images/5.png')";
              break;
            case 8:
              manaValue.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue2.style.backgroundImage = "url('./images/mana_" + color + ".png')";
              manaValue3.style.backgroundImage = "url('./images/6.png')";
              break;
          }
        }
    }

    // Type
    function genType(color) {
        const typeID = document.getElementById("cardType");

        var creature;

        switch(color) {
          case "green":
            // Decide if creature is going to be an elf, beast, or null
            var random = genRandomZeroItems(4);
            if (random == 0) {
              creature = "Elf";
            } else if (random == 1) {
              creature = "Beast";
            } else {
              creature = null;
            }
            break;

          case "red":
            // Is creature going to be a dwarf?
            genRandomBoolean() ? creature = "Dwarf" : creature = null;
            break;

          case "black":
            // Is creature going to be a vampire?
            genRandomBoolean() ? creature = "Vampire" : creature = null;
            break;
          
          case "blue":
            // Is creature going to be a leviathan?
            genRandomBoolean() ? creature = "Leviathan" : creature = null;
            break;
          
          case "uncollored":
            // Is creature going to be a construct?
            genRandomBoolean() ? creature = "Construct" : creature = null;
            break;
        }

        if (creature == null) {
          genRandomBoolean() ? creature = "Human" : creature = "Bird";
        }

        typeID.innerHTML = "Legendary Creature - " + creature;

        genImage(creature);
    }

    function genImage(creature) {
      var imageDiv = document.getElementById("imgDiv");
      var imageString;

      imageString = creature + "_" + genRandomOneMax(5);

      imageDiv.style.backgroundRepeat = "no-repeat";
      imageDiv.style.backgroundSize = "cover";
      imageDiv.style.backgroundImage = "url('./images/" + imageString + ".jpg')";
    }

    function genName(color) {
      // Set the name if there is one
      var nameBox = document.getElementById("nameTextBox").value;
    
      if (nameBox != "") {
        cardName.innerHTML = nameBox;
      } else {
        
        const primary = ["Aboshan", "Acererak", "Valec", "Rekniros", "Bongata", "Gangzia", "Deguro", "Chagi", "Trevraiyur", "Noviayed", "Lia", "Zuoshon", "Yiunren", "Shiu", "Chenja",
        "Choye", "Aelnina", "Cadduc", "Tigis", "Moji", "Feiti", "Phasha", "Nastaexi", "Tosi", "Vollis"];
        var primaryName = primary[(genRandomZeroItems(primary.length))];
        var secondaryName;
        const greenSecondary = ["Valiant Protector", "Embraced by the moon", "Anarch of Bolas", "Caller of the Pride"];
        const redSecondary = ["Mobilized for war", "Captain of Chaos", "The Flame-Chained", "Fire Artisan", "Scrap Savant", "City Smasher"];
        const blueSecondary = ["the Seeker", "Nightmare Muse", "Architecht of Law", "Grand Arbiter", "Hand of Control"];
        const blackSecondary = ["the Archlich", "Apex Predator", "the Fateshifter", "Shadow Slayer", "Rogue Shadowmage", "Chaos Bringer"];
        const whiteSecondary = ["Adversary of Tyrants", "Unyielding", "Inspiring Leader", "the Greedhearted"];


        // Generate random secondary name off of color
        if (color == "green") {
          secondaryName = greenSecondary[genRandomZeroItems(greenSecondary.length)];
        } else if (color == "red") {
          secondaryName = redSecondary[genRandomZeroItems(redSecondary.length)];
        } else if (color == "black") {
          secondaryName = blackSecondary[genRandomZeroItems(blackSecondary.length)];
        } else if (color == "white" || color == "colorless") {
          secondaryName = whiteSecondary[genRandomZeroItems(whiteSecondary.length)];
        } else if (color == "blue") {
          secondaryName = blueSecondary[genRandomZeroItems(blueSecondary.length)];
        }

        if (secondaryName.substring(0, 4) === "the ") {
            secondaryName = " " + secondaryName;
        } else {
            secondaryName = ", " + secondaryName;
        }

      	const cardName = document.getElementById("cardName");
        cardName.innerHTML = primaryName + secondaryName;
      }
    }
}