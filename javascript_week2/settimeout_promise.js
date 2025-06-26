
function setTimeoutPromisified2(ms){
return new Promise(function(resolve){
setTimeout(resolve,ms);
})
}


function setTimeoutPromisified(resolve) {
    console.log('Timer for 10sec started')
    setTimeout(resolve, 10000);
}


function settime() {
    return new Promise(setTimeoutPromisified);
}

const p = settime();

function callmebaby(){
    console.log('Im here!');
}

p.then(callmebaby)


