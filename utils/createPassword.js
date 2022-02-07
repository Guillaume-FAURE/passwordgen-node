const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '.-_@!#$/&+*'

const createPassword = (length=15, hasNumbers=true, hasSymbols=true) => {
    let chars = letters;
    let password = '';
    hasNumbers ? (chars+= numbers) : ''
    hasSymbols ? (chars+= symbols) : ''
    for (let i=0;i<length;i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return password
}

module.exports = createPassword;