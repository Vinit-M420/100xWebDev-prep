const fs = require('fs');

function writeFile(resolve) {
    fs.writeFile('week2_js_prac/test.txt', content, err => {
        if (err) {
            console.error(err);
        } else {
            fs.readFile('week2_js_prac/test.txt', 'utf-8', function(err, data) {
                if (err) {
                    console.error(err);
                } else {
                    resolve(data);
                }
            });
        }
    });
}

function write(){
    return new Promise(writeFile)
}

function callback(contents) {
    console.log(contents.trim());
}


const content = 'Some content!';

let p = write()
console.log(p)

p.then(callback)


