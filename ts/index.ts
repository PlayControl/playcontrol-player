/// <reference path="typings/tsd.d.ts" />
/// <reference path="./playcontrol.player.classes.ts" />
/// <reference path="./playcontrol.player.audiofile.ts" />
/// <reference path="./playcontrol.player.cli.ts" />
console.log("starting player module..."); //logging start to console
import plugins = require("./playcontrol.player.plugins");
var plugins = PlayControlPlayerPlugins.init(); //load depedencies to plugins object
var PlayControlPlayer = {
    new:function(){
        return new Player();
    }
};

module.exports = PlayControlPlayer;
