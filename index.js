/*jshint esversion: 6 */
// Generate a card on load
window.onload = genValue();

// Generate a random number 1 - max
function genRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

function genValue() {

    // Create value array
    var value = new Array(5);
    var arrayLength = value.length;

    // Set a random number 1 - 8 to the array
    for (var i = 0; i < arrayLength; i++) {
        value[i] = genRandom(8);
    }

    console.log("VALUE: " + value);

    // Using array to set values for card
    var mana = value[0];
    var type = value[1];
    var text = value[2];
    var power = value[3];
    var toughness = value[4];

    // Generate values for the card
    
    genMana(mana);
    genPowerToughness(power, toughness);
    // genColor();
    genType(type);

    // Set the name if there is one
    let nameBox = document.getElementById("nameTextBox").value;
    if (nameBox == "") {
      genName();
    } else {
      cardName.innerHTML = nameBox;
    }
  
    // Set text format to selected format, or stay random if unselected
    let selText = document.querySelector("#selFormat").selectedIndex;
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
        var textEffect = genRandom(8);
        var textTrigger = genRandom(5);
        var textCost = genRandom(4);
        var textAbility = "";

        console.log("textEffect: " + textEffect);
        console.log("textTrigger: " + textTrigger);
        console.log("textCost: " + textCost);
        // console.log("selFormat:" + selTextVal);

        // Type
        const typeArray = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
        textType = typeArray[(genRandom(7) - 1)];

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
        textAbility = abilityArray[(genRandom(8) - 1)];

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
        //let toughnessValue = document.getElementById("cardToughness");

        cardPowerToughness.innerHTML = power + " / " + toughness;
    }

  
    // Color
    function genColor() {
        // Setting color from 1 - 6
        const colorArray = ["colorless", "white", "red", "blue", "green", "black"];
        const container = document.getElementById("container");
        let color = colorArray[(genRandom(6) - 1)];
      
        container.style.backgroundImage = "url('./images/background_" + color + ".png')";
        console.log(color);
        return color;
    }
  
    // Mana
    function genMana(mana) {
        // Set mana
        var manaValue = document.getElementById("cardMana");
        var manaValue2 = document.getElementById("cardMana2");
        var manaValue3 = document.getElementById("cardMana3");

        console.log("mana: " + mana);

        let color = genColor();
        
        // Clear out any symbols from a previous card
        manaValue.style.backgroundImage = "none";
        manaValue2.style.backgroundImage = "none";
        manaValue3.style.backgroundImage = "none";

        //      manaValue.innerHTML = mana;
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
    function genType(number) {

        const typeArray = ["Human", "Elf", "Dwarf", "Vampire", "Construct", "Beast", "Bird", "Phoenix"];
        const typeID = document.getElementById("cardType");

        typeID.innerHTML = "Legendary Creature - " + typeArray[(genRandom(number) - 1)];
    }

    function genName() {
        const primary = ["Aboshan", "Acererak", "Valec", "Rekniros", "Bongata", "Gangzia", "Deguro", "Chagi", "Trevraiyur", "Noviayed", "Lia", "Zuoshon", "Yiunren", "Shiu", "Chenja",
        "Choye", "Aelnina", "Cadduc", "Tigis", "Moji", "Feiti", "Phasha", "Nastaexi", "Tosi", "Vollis"];

        const secondary = ["the Archlich", "Apex Predator", "Mobilized for War", "the Seeker", "Adversary of Tyrants", "Caller of the Pride", "Unyielding",
        "Inspiring Leader", "the Greedhearted", "Valiant Protector", "the Fateshifter", "Captain of Chaos", "the Flame-Chained", "Embraced by the Moon", "Nightmare Muse", 
        "Fire Artisan", "Shadow Slayer", "Scrap Savant", "Rogue Shadowmage", "Anarch of Bolas", "Chaos Bringer", "City Smasher", "Architecht of Law", "Grand Arbiter", "Hand of Control"];

        var primaryName = primary[(genRandom(25) - 1)];
        var secondaryName = secondary[(genRandom(25) - 1)];

        if (secondaryName.substring(0, 4) === "the ") {
            secondaryName = " " + secondaryName;
        } else {
            secondaryName = ", " + secondaryName;
        }

      	const cardName = document.getElementById("cardName");
        cardName.innerHTML = primaryName + secondaryName;
    }
}