/// <reference path="./index.ts" />
module PlayControlPlayerAudiofile {
    export var getCompressionType = function(pathArg:string) {
        var compressionType:string;
        var fileType = getFileType(pathArg);
        switch (fileType){
            case "mp3":
                compressionType = "lossy";
                break;
            case "m4v":
            case "flac":
                compressionType = "lossless";
                break;
            default:
                plugins.beautylog.error("Filetype not recognised: " + fileType);
                compressionType = "unknown"
                break;
        };
        return compressionType;
    };

    export var getFileType = function(pathArg) {
        var fileType:string = plugins.pathParse(pathArg).ext;
        fileType = fileType.replace(/\.([a-z]*)/,"$1"); //remove . form fileType
        return fileType;
    };

    export var getLocationType = function(pathArg){
        return "local";
    }
}