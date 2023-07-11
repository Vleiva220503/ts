"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mediom"] = 1] = "mediom";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currenAudio = AudioLevel.mediom;
    console.log(currenAudio);
    console.log(AudioLevel);
});
