

const fs = require('fs');

function print(err,data) {
    console.log(err);
    console.log(data);
}

const content2 = fs.readFileSync('week2_js_prac/b.txt','utf-8', print) // Asyncronous

const contents = fs.readFileSync('week2_js_prac/a.txt','utf-8') // Syncronous

console.log(contents)
console.log(content2)
console.log('Done')