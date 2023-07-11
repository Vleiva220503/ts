"use strict";
(() => {
    let avenger = 10;
    const villanos = 20;
    if (avenger < villanos) {
        console.log("estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avenger = Number('123f');
    console.log({ avenger });
});
