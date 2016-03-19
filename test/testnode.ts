/// <reference path="typings/tsd.d.ts" />
var PlayControlPlayer = require("./index.js");

var myPlayer = PlayControlPlayer.new();
myPlayer.playFromFS("./test/test-audiofiles/flac/16bit/03 Diavolo.flac");

