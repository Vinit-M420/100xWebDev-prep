
function isLegal(age:number){
    if (age >= 18){
        return true;
    }
    return false;
}

let ans = isLegal(15);

console.log(ans);