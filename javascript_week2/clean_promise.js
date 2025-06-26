const fs = require('fs');

// Executor function for Promise
function readTheFile(resolve) {
    fs.readFile('javascript_week2/a.txt', 'utf-8', function(err, data) {
        resolve(data);
    });
}

// Promisified readFile
function readFile(filename) {
    return new Promise(readTheFile);
}

// The final callback to consume data
function callback(contents) {
    console.log(contents.trim());
}

// Call and use
const p = readFile();
console.log(p) // Promise Object or Proxy to async
p.then(callback);
