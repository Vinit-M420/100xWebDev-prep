let counter = 0;

function countr(){
    if (counter<60){
        counter = counter + 1;
        console.log(counter);
        setTimeout(countr,1000);
}

}

countr();