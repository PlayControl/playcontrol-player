/// <reference path="./index.ts" />
class Player {
    player;
    constructor(){

    }
    playAudiofile(audiofileArg:Audiofile){
        plugins.beautylog.info("Playing audio from " + audiofileArg.path.blue);
        plugins.beautylog.info("File Type is " + audiofileArg.fileType.blue);
        plugins.beautylog.info("Compression Type is " + audiofileArg.compressionType.blue);
        if (audiofileArg.compressionType === "lossy") {
            plugins.beautylog.warn("you are playing back a lossy file.");
        } else if (audiofileArg.compressionType === "lossless") {
            plugins.beautylog.success("you are playing back a lossless file.");
        } else {
            plugins.beautylog.error("check the specified file");
        }
        if (audiofileArg.locationType === "local") {
            plugins.beautylog.log("locationType is local");
            this.player = plugins.av.Player.fromFile(audiofileArg.path);
            this.player.play();
        } else if (audiofileArg.locationType === "server") {
            this.player = plugins.av.Player.fromURL(audiofileArg.path);
            this.player.preload();
            this.player.on('ready',() => {
                console.log("ready");
                this.player.play();
            });
        }

    };
    playFromPath(){

    };
    playFromFS(pathArg:string){
        var audiofile = new Audiofile(pathArg);
        this.playAudiofile(audiofile);
    };
    playFromUrl(pathArg:string){
        var audiofile = new Audiofile(pathArg);
        audiofile.locationType = "server";
        this.playAudiofile(audiofile);
    }
    volume(percentageArg:number) {
        this.player.volume = percentageArg;
    }
    currentTime(){

    }
}

class Audiofile {
    public path:string;
    public locationType:string;
    public fileType:string;
    public compressionType:string;
    constructor(pathArg) {
        this.path = plugins.path.resolve(pathArg);
        this.compressionType = PlayControlPlayerAudiofile.getCompressionType(pathArg);
        this.locationType = PlayControlPlayerAudiofile.getLocationType(pathArg);
        this.fileType = PlayControlPlayerAudiofile.getFileType(pathArg);
    };

}