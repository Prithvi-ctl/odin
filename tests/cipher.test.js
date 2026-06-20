const cipherText = require('./ceasercipher');

test("cipherText",()=>{
    expect(cipherText("hello",3)).toBe("KHOOR");  
});

