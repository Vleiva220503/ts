(() => {
    let avenger:number = 10;


    const villanos: number = 20;
    if(avenger < villanos){
        console.log("estamos en problemas");
    }else{
        console.log("Nos salvamos");
    }

    avenger = Number('123f');
    console.log({avenger});

})