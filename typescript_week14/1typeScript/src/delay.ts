
function delayCode( fn: () => void ){
    setTimeout(fn, 1000);
}

delayCode( function() {
    console.log("Delululu")
})