const caesarcipher = require("../codes/caesarcipher");

test('Caesar Cipher Test 1 ', () => {
    expect(caesarcipher("attack at dawn", 8)).toBe("ibbiks ib liev");
})

test("Caesar Cipher Test 2 ", () => {
  expect(caesarcipher("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis", 25)).toBe("knqdl hortl cnknq rhs zlds bnmrdbsdstq zchohrhbhmf dkhs. odqrohbhzshr");
});
