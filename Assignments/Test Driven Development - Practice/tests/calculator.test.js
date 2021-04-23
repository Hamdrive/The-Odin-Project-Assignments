const calculator = require("../codes/calculator")

test('Addition Test', () => {
    expect(calculator("add", 5,3)).toBe(8);
})
test('Division Test', () => {
    expect(calculator("divide", 420,70)).toBe(6);
})
test('Multiply Test', () => {
    expect(calculator("multiply", 5,3)).toBe(15);
})
test('Divide Test', () => {
    expect(calculator("subtract", 22,5)).toBe(17);
})
test('Remainder Test', () => {
    expect(calculator("remainder", 22,7)).toBe(1);
})
