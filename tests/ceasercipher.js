const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function ceaserCipher(string, shift) {
    let cipherText = "";
    for(let i = 0; i < string.length; i++) {
            let char = string[i];

        let upper = char== char.toUpperCase();
        let lower = char.toUpperCase();

        if(alphabet.includes(lower)){

        index = alphabet.indexOf(char[i]);
        new char = alphabet[(index + shift) % alphabet.length];
        cipherText += upper ? char[i] : char.toLowerCase();
    }
    else{
        cipherText += char;
    }
    return cipherText;
}
}

module.exports = ceaserCipher;
