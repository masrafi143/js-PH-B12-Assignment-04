function onlyCharacter(str) {
    if(typeof str !== 'string'){
        return "Invalid";
    } 
    return str.split(' ').join('').toUpperCase();
}