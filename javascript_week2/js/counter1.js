let counter = 0;

function countup() {
    if (counter <= 60){
    counter = counter + 1;
    console.log(counter);
}}

setIntesrval(countup, 1000);


