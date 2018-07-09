// Constants
const colWidth = 101;
const rowHeight = 83;
const playerStartCol = 2;
const playerStartRow = 5;

// Enemies our player must avoid
var Enemy = function(yPos) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 10;
    this.y = yPos;
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
    this.x = playerStartCol * colWidth;
    this.y = playerStartRow * rowHeight;
};

Player.prototype.update = function() {
    // Check for win condition
    /* if (this.y == 0) {
        alert("You win!");
        this.reset;
    } */
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = playerStartCol * colWidth;
    this.y = playerStartRow * rowHeight;
}

Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case "up":
            if (this.y >= rowHeight) {
                this.y -= rowHeight;
            }
            break;
        case "down":
            if (this.y <= 4 * rowHeight) {
                this.y += rowHeight;
            }
            break;
        case "left":
            if (this.x >= colWidth) {
                this.x -= colWidth;
            }
            break;
        case "right":
            if (this.x <= 3 * colWidth) {
                this.x += colWidth;
            }
            break;
    }
};

var allEnemies = [];
// Create enemy objects and add to allEnemies array
function createEnemies() {
    for (let i=63; i <= 235; i+=rowHeight) {
        allEnemies.push(new Enemy(i));
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
createEnemies();

// Place the player object in a variable called player
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
