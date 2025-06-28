const date = new Date();

console.log(date);
let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
let counter = 0

function clock(){
    if (sec < 60){
        sec = sec + 1;
    }
    else {
        sec = 1;
        min = min + 1;
    };

    if (min == 60){
        min = 0;
        sec = 1;
        hour = hour + 1;
    } 


    console.log(hour+ ":" + min + "::" + sec);
    setTimeout(clock,1000);
}

clock();