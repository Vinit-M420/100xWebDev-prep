const fs = require('fs');

function writeFile(resolve) {
    fs.writeFile('javascript_week2/test.txt', content, err => {
        if (err) {
            console.error(err);
        } else {
            fs.readFile('week2_js_prac/test.txt', 'utf-8'	
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


