const ConsoleGame = require("console-game-engine");

//import keypress, and config.
const keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);

//New console game!
const game = new ConsoleGame();
//Config of game
const pos = [0, 0], character = " ";

//First render:
game.set(pos[0], pos[1], character);

//Count of key presses:
var moves = 0;

//On keypress:
process.stdin.on('keypress', (ch, key) => {
    //For exit:
    if (ch === "c") {
        game.clear();
        console.log("Game finished with", moves, "moves.");
        process.exit(0);

        //Look for only keys:
    } else if (key) {

        //Reset map:
        game.reset();

        //Change pos:
        switch (key.name) {
            case "left":
                if (pos[0] > 0) pos[0] -= 1;
                break;

            case "right":
                if (pos[0] < game.x - 1) pos[0] += 1;
                break;

            case "up":
                if (pos[1] > 0) pos[1] -= 1;
                break;

            case "down":
                if (pos[1] < game.y - 1) pos[1] += 1;
                break;

            default:
                return;

        }

        //SET and RENDER:
        game.set(pos[0], pos[1], character);
        moves++;
    }

});
