const fs = require('fs');
const path = require('path');
const os = require('os');

const savePassword = (password, usage) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 644, (e, id) => {
        fs.write(id,usage + ' : ' + password + os.EOL, ()=> {
            fs.close(id, () => {
                console.log('Password saved to password.txt !')
            })
        });
    })
}

module.exports = savePassword