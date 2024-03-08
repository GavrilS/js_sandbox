function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.expPoints = 0;
}

Player.prototype.gainXP = function(points) {
    this.expPoints += points;
    if (this.expPoints >= 10) {
        this.lvl += 1;
        this.expPoints -= 10;
    }
}

Player.prototype.describe = function() {
    console.log(`Player: Name - ${this.name}; Level - ${this.lvl}; Experience - ${this.expPoints}`);
}

const player = new Player('Arcanum');

const fightBtn = document.getElementById('fight');
const describeBtn = document.getElementById('describe');
// const addName = document.getElementById('add-name');
// const createCharacter = document.getElementById('create-character');

fightBtn.addEventListener('click', () => {
    player.gainXP(1);
    player.describe();
});

describeBtn.addEventListener('click', () => {
    player.describe();
});
