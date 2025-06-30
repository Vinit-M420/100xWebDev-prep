const fs = require('fs');

function print(err,data) {
    console.log(err);
    console.log(data);
}

const content2 = fs.readFileSync('javascript_week2/b.txt','utf-8', print) // Asyncronous

const contents = fs.readFileSync('javascript_week2/a.txt','utf-8') // Syncronous

console.log(contents)
console.log(content2)
console.log('Done')