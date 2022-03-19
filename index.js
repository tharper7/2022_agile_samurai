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
    var color;
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
      var textEffect = genRandomOneMax(6);
      var textTrigger = genRandomOneMax(5);
      var textCost = genRandomOneMax(4);
      var textAbility = "";

      // Type
      // Choses which array to use depending on color
      if (color == "colorless") {
        const typeArrayColorless = ["Creature", "Artifact"];
        textType = typeArrayColorless[(genRandomZeroItems(typeArrayColorless.length))];
        
      } else if (color == "white"){
        const typeArrayWhite = ["Creature", "Enchantment", "Planeswalker"];
        textType = typeArrayWhite[(genRandomZeroItems(typeArrayWhite.length))];
        
      } else if (color == "blue") {
        const typeArrayBlue = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker"];
        textType = typeArrayBlue[(genRandomZeroItems(typeArrayBlue.length))];
        
      } else if (color == "black") { 
        const typeArrayBlack = ["Creature", "Artifact", "Planeswalker"];
        textType = typeArrayBlack[(genRandomZeroItems(typeArrayBlack.length))];
        
      } else if (color == "red") {
        const typeArrayRed = ["Creature", "Instant", "Sorcery", "Planeswalker", "Land"];
        textType = typeArrayRed[(genRandomZeroItems(typeArrayRed.length))];
        
      } else if (color == "green") {
        const typeArrayGreen = ["Creature", "Artifact", "Enchantment", "Land"];
        textType = typeArrayGreen[(genRandomZeroItems(typeArrayGreen.length))];
      }
      // "colorless", "white", "red", "blue", "green", "black"
      
        // Effect
        switch (textEffect) {
          case 1:
            if (color == "colorless" || color == "blue" || "white") {
              textEffect = "draw a card";
            } else if (color == "black") {
              textEffect = "lose 1 life and draw a card";
            } else if (color == "red") {
              textEffect = "draw a card, then discard a card";
            } else if (color == "green"){
              textEffect = "add one mana of any color to your mana pool";
            } else {
                textEffect = "";
            }
              break;
          case 2:
            if (color == "colorless") {
              textEffect = "create a 3/3 colorless construct artfact creature";
            } else if (color == "white") {
              textEffect = "create a 1/1 white bird creature token with lifelink";
            } else if (color == "red") {
              textEffect = "create a 1/1 red goblin creature token with haste";
            } else if (color == "blue") {
              textEffect = "create a 1/1 blue drake creature token with flying";
            } else if (color == "green") {
              textEffect = "create a 3/3 green beast creature token with trample";
            }  else if (color == "black") {
              textEffect = "create a 2/2 black zombie creature token";
            } else {
                textEffect = "";
            }
              break;
          case 3:
            if (color == "colorless") {
                textEffect = "exile target artifact you control then draw a card";
              } else if (color == "white") {
                textEffect = "draw a card and gain 3 life";
              } else if (color == "red") {
                textEffect = "draw two cards and then discard a card";
              } else if (color == "blue") {
                textEffect = "scy two draw two";
              } else if (color == "green") {
                textEffect = "draw a card, you may put a land from your hand onto the battlefield";
              }  else if (color == "black") {
                textEffect = "draw two cards and lose two life";
              } else {
                textEffect = "";
              }
              break;
          case 4:
              textEffect = "return a noncreature card from your graveyard to your hand";
            if (color == "colorless") {
                textEffect = "exile target card from any graveyard";
              } else if (color == "white") {
                textEffect = "return target creature from your graveyard to your hand";
              } else if (color == "red") {
                textEffect = "deal three damgage to any target";
              } else if (color == "blue") {
                textEffect = "return a noncreature card from your graveyard to your hand";
              } else if (color == "green") {
                textEffect = "exile target creature card from a graveyard then put a +1/+1 counter on target creature.";
              }  else if (color == "black") {
                textEffect = "return target creature card from your graveyard to the battlefield";
              } else {
                textEffect = "";
              }
              break;
          case 5:
            if (color == "colorless") {
                textEffect = "exile target card from any graveyard";
              } else if (color == "white") {
                textEffect = "return target creature from your graveyard to your hand";
              } else if (color == "red") {
                textEffect = "exile target instent from graveyard. You may play the targeted instent from exile this turn";
              } else if (color == "blue") {
                textEffect = "return a noncreature card from your graveyard to your hand";
              } else if (color == "green") {
                textEffect = "exile target creature card from a graveyard then put a +1/+1 counter on target creature.";
              }  else if (color == "black") {
                textEffect = "return target creature card from your graveyard to the battlefield";
              } else {
                textEffect = "";
              }
              break;
          case 6:
              if (color == "colorless") {
                textEffect = "exile target colorless permanent";
              } else if (color == "white") {
                textEffect = "exile target creature";
              } else if (color == "red") {
                textEffect = "deal three damage to any target";
              } else if (color == "blue") {
                textEffect = "return target permenent to its owners hand";
              } else if (color == "green") {
                textEffect = "target creature fights anouther target creature";
              }  else if (color == "black") {
                textEffect = "destroy target creature";
              } else {
                textEffect = "";
              }
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
      if (color == "colorless") {
        const abilityArrayColorless = ["Vigilance", "First Strike", "Indestructible", "Trample"];
        textAbility = abilityArrayColorless[(genRandomZeroItems(abilityArrayColorless.length))];
        
      } else if (color == "white"){
        const abilityArrayWhite = ["Lifelink", "Vigilance", "First Strike", "Flying"];
        textAbility = abilityArrayWhite[(genRandomZeroItems(abilityArrayWhite.length))];
        
      } else if (color == "blue") {
        const abilityArrayBlue = ["Flying"];
        textAbility = abilityArrayBlue[(genRandomZeroItems(abilityArrayBlue.length))];
        
      } else if (color == "black") { 
        const abilityArrayBlack = ["Deathtouch", "Lifelink", "Flying"];
        textAbility = abilityArrayBlack[(genRandomZeroItems(abilityArrayBlack.length))];
        
      } else if (color == "red") {
        const abilityArrayRed = ["Vigilance", "First Strike", "Double Strike", "Haste"];
        textAbility = abilityArrayRed[(genRandomZeroItems(abilityArrayRed.length))];
        
      } else if (color == "green") {
        const abilityArrayGreen = ["Vigilance", "Trample"];
        textAbility = abilityArrayGreen[(genRandomZeroItems(abilityArrayGreen.length))];
      }

        // Set text format and add it to the textbox
      
        
        switch (textValue) {
            case 1:
                textBox.innerHTML = "Whenever you cast a " + textType + " spell, you may " + textEffect + ".";
                break;
            case 2:
                textBox.innerHTML = "Whenever a creature you control " + textTrigger + ", you may " + textEffect + ".";
                break;
            case 3:
                textBox.innerHTML = textAbility + "<br>" + textCost + ", TAP: " + textEffect;
                break;
            case 4:
                if (color == "green" || color == "red" || color == "colorless" || color == "white") {
                  textBox.innerHTML = textAbility + "<br>If you cast a " + textType + " this turn, creatures you control get +" + textCost + "/+" + textCost + ".";
                } else {
                  textBox.innerHTML = textAbility + "<br>If you cast a " + textType + " this turn, creatures you control get " + textAbility + ".";
                }
                break;
            case 5:
                textBox.innerHTML = textAbility + "<br>Sacrifice " + textCost + " other creatures: " + textEffect + ". Target " + textType + " gains shroud until end of turn.";
                break;
            case 6:
                if (textType == "Instant" || textType == "Sorcery") {
                    textBox.innerHTML = textAbility + "<br>If you have cast at least " + textCost + " " + textType + ", until end of turn " + textType + " you control can't be countered.";
                } else {
                    textBox.innerHTML = textAbility + "<br>If you control at least " + textCost + " " + textType + ", " + textType + "s you control have " + textAbility;
                }
                break;
            case 7:
                  textBox.innerHTML = textAbility + "<br>At the begining of your upkeep, you may " + textEffect + ".";
                break;
            case 8:
                textBox.innerHTML = textAbility + "<br>At the beginning of your end step, you may discard a card. If you do, " + textEffect + ".";
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

        genName(color);
    }

    function genName(color) {
      // Set the name if there is one
      var nameBox = document.getElementById("nameTextBox").value;
    
      if (nameBox != "") {
        cardName.innerHTML = nameBox;
      } else {
        
        const primary = ["Aboshan", "Acererak", "Valec", "Rekniros", "Bongata", "Gangzia", "Deguro", "Chagi", "Trevraiyur", "Noviayed", "Lia", "Zuoshon", "Yiunren", "Shiu", "Chenja",
        "Choye", "Aelnina", "Cadduc", "Tigis", "Moji", "Feiti", "Phasha", "Nastaexi", "Tosi", "Vollis"];

        const greenSecondary = ["Valiant Protector", "Embraced by the moon", "Anarch of Bolas", "Caller of the Pride"];
        const redSecondary = ["Mobilized for war", "Captain of Chaos", "The Flame-Chained", "Fire Artisan", "Scrap Savant", "City Smasher"];
        const blueSecondary = ["the Seeker", "Nightmare Muse", "Architecht of Law", "Grand Arbiter", "Hand of Control"];
        const blackSecondary = ["the Archlich", "Apex Predator", "the Fateshifter", "Shadow Slayer", "Rogue Shadowmage", "Chaos Bringer"];
        const whiteSecondary = ["Adversary of Tyrants", "Unyielding", "Inspiring Leader", "the Greedhearted"];

        var primaryName = primary[(genRandomZeroItems(primary.length))];



        // if (secondaryName.substring(0, 4) === "the ") {
        //     secondaryName = " " + secondaryName;
        // } else {
        //     secondaryName = ", " + secondaryName;
        // }

      	const cardName = document.getElementById("cardName");
        cardName.innerHTML = primaryName;

    }
  }
}