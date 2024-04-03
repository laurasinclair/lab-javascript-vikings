// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` :  `${this.name} has died in act of combat`
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` :  `A Saxon has died in combat`
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health < 1) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return randomSaxon.receiveDamage(randomViking.strength);
    }

    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health < 1) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return randomViking.receiveDamage(randomSaxon.strength);
    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}