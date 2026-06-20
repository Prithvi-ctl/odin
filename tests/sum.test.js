const {sum,capitalize,reverse,calculator} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});


test("capitalizes a string",()=>{
    expect(capitalize("hello")).toBe("HELLO");
});

test("reverses a string",()=>{
    expect(reverse("hello")).toBe("olleh");
});


test("calculator add",()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test("calculator subtract",()=>{
    expect(calculator.subtract(5,2)).toBe(3);
});

test("calculator multiply",()=>{
    expect(calculator.multiply(3,4)).toBe(12);
}); 

