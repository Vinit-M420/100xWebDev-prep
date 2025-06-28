const users = [{
    name: 'Elige',
    kidneys: [{
        healthy:false
    },{
        healthy: true
    }]
}]


let kidneyys = users[0].kidneys;

console.log(kidneyys);

let healthyk = kidneyys.filter(kidneyy => kidneyy.healthy);
const allHealthy = users[0].kidneys.filter(kidney => kidney.healthy);


console.log(allHealthy);
