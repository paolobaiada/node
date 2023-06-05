const fs = require('fs');

fs.writeFile('./file1.txt','hello, how are you', (err) => {
if(err) {
    console.error(err)
}
else 
console.log('written')
})