const fs = require('fs');
let file = fs.readFileSync('happy.txt', 'utf-8');
let filearr = file.split('\n'); 
console.log(filearr.length);
