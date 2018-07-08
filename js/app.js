// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 10;
    this.y = 100;
    this.speed = 30;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Enemies only move sideways, so we only need to adjust the x value
    this.x += (dt * this.speed);
    if (this.x > 500) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
    // TO DO: multiply any movement by the dt parameter
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case "up":
            if (this.y > 50) {
                this.y -= 50;
            } else if (this.y <= 50) {
                this.reset();
            }
            break;
        case "down":
            if (this.y <= 400) {
                this.y += 50;
            }
            break;
        case "left":
            if (this.x >= 50) {
                this.x -= 50;
            }
            break;
        case "right":
            if (this.x <= 375) {
                this.x += 50;
            }
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy()];
var player = new Player();
// Note: unable to instantiate enemies and player using Object.create
// Throws an error: "Uncaught TypeError: enemy.update is not a function at engine.js:94"

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
