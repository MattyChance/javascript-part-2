function Warrior(name, gender, level, weapon, power) {
    this.name = name;
    this.gender = gender;
    this.level = level;
    this.weapon = weapon;
    this.power = Math.round(Math.random() * 100);
}

Warrior.prototype.fight = function() {
    console.log(this.name + ' rushes to the arena with ' + this.weapon)
};

Warrior.prototype.faceoff = function(opponent) {
    if (opponent.power < this.power) {
        console.log('Warrior ' + this.name + ' used ' + this.weapon + ' and kicked ' + opponent.name + "'s ass!");
    }
    else if (opponent.power > this.power) {
        console.log('Warrior ' + this.name + ' sucks! Go home and get trained!');
    }
    else if (opponent.power === this.power) {
        console.log("It's a tie!");
    }
};

var warriorFinn = new Warrior('Finn', 'M', 8, "Hero's Sword");
var warriorJake = new Warrior('Jake', 'M', 8, 'Jake hammer');
var warriorIceKing = new Warrior('Ice King', 'M', 7, 'Freeze gun');
var warriorMarceline = new Warrior('Marceline', 'F', 10, 'Vampire Axe');
var warriorPrincessBubblegum = new Warrior('Princess Bubblegum', 'F', 5, 'CandyCrash');

console.log(warriorMarceline.faceoff(warriorIceKing));
