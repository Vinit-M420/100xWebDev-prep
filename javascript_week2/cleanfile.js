let fs = require('fs');

let txt = fs.readFileSync('javascript_week2/cleanfile.txt','utf-8');

txt = (txt.split(/\s+/).join(' '))
console.log(txt)

fs.writeFileSync('javascript_week2/cleanfile.txt',txt , err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
