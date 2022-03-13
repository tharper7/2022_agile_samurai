// Generate a card on load
window.onload = genValue();

// Generate a random number 1 - max
function genRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

function genValue() {

    // Create value array
    let value = new Array(5);
    let arrayLength = value.length;

    // Set a random number 1 - 8 to the array
    for (let i = 0; i < arrayLength; i++) {
        value[i] = genRandom(8);
    }

    console.log("VALUE: " + value);

    // Using array to set values for card
    let mana = value[0];
    let type = value[1];
    let text = value[2];
    let power = value[3];
    let toughness = value[4];

    // Generate values for the card
    genName();
    genMana(mana);
    genText(text);
    genPowerToughness(power, toughness);
    genColor();
    genType(type);


    // Mana
    function genMana(mana) {
        // Set mana
        let manaValue = document.getElementById("cardMana");
        console.log(mana)
        manaValue.innerHTML = mana;
    }

    // Text
    function genText(textValue) {
        // Set text format effects/keywords
        let textBox = document.getElementById("cardText");
        let textType = "";
        let textEffect = genRandom(8);
        let textTrigger = genRandom(5);
        let textCost = genRandom(4);
        let textAbility = "";

        console.log("textEffect: " + textEffect);
        console.log("textTrigger: " + textTrigger);
        console.log("textCost: " + textCost);

        // Type
        const typeArray = ["Creature", "Artifact", "Enchantment", "Instant", "Sorcery", "Planeswalker", "Land"];
        textType = typeArray[(genRandom(7) - 1)];


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
                textEffect = "make target player mill 2 cards";
                break;
        }

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
                console.log("Type: " + textType);
                break;
            case 7:
                textBox.innerHTML = "At the begining of your upkeep, you may play a " + textType + " card from your graveyard. This spell costs " + textCost + " less to cast.";
                break;
            case 8:
                textBox.innerHTML = textAbility + "<br>At the beginning of your end step, you may discard a card. If you do, " + textEffect;
                break;
        }
    }


    // Power/Toughness
    function genPowerToughness(power, toughness) {
        // Set Power and Toughness
        let powerValue = document.getElementById("cardPower");
        let toughnessValue = document.getElementById("cardToughness");

        powerValue.innerHTML = power + " /";
        toughnessValue.innerHTML = toughness;
    }

    // Color
    function genColor() {
        // Setting color from 1 - 6
        const colorArray = ["d3d3d3", "ffffff", "ff3c3c", "397a04", "4775ff", "5c5c5c"];
        const container = document.getElementById("container");

        container.style.backgroundColor = "#" + colorArray[(genRandom(6) - 1)];
    }

    // Type
    function genType(number) {

        const typeArray = ["Human", "Elf", "Dwarf", "Vampire", "Construct", "Beast", "Bird", "Phoenix"];
        const typeID = document.getElementById("cardType");

        typeID.innerHTML = "Legendary Creature - " + typeArray[(genRandom(number) - 1)];
    }

    function genName() {
        let name;
        const primary = ["Aboshan", "Acererak", "Valec", "Rekniros", "Bongata", "Gangzia", "Deguro", "Chagi", "Trevraiyur", "Noviayed", "Lia", "Zuoshon", "Yiunren", "Shiu", "Chenja",
        "Choye", "Aelnina", "Cadduc", "Tigis", "Moji", "Feiti", "Phasha", "Nastaexi", "Tosi", "Vollis"];

        const secondary = ["the Archlich", "Apex Predator", "Mobilized for War", "the Seeker", "Adversary of Tyrants", "Caller of the Pride", "Unyielding",
        "Inspiring Leader", "the Greedhearted", "Valiant Protector", "the Fateshifter", "Captain of Chaos", "the Flame-Chained", "Embraced by the Moon", "Nightmare Muse", 
        "Fire Artisan", "Shadow Slayer", "Scrap Savant", "Rogue Shadowmage", "Anarch of Bolas", "Chaos Bringer", "City Smasher", "Architecht of Law", "Grand Arbiter", "Hand of Control"];

        primaryName = primary[(genRandom(25) - 1)];
        secondaryName = secondary[(genRandom(25) - 1)];

        if (secondaryName.substring(0, 4) === "the ") {
            secondaryName = " " + secondaryName;
        } else {
            secondaryName = ", " + secondaryName;
        }

        cardName.innerHTML = primaryName + secondaryName;
    }
}