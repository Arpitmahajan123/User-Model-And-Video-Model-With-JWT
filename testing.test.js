// Sample Function.

function greet(name) {
    console.log(`Hello, ${name}!`);
}


// Testing Function.

test('Greet Return Correct Greeting', () => {

    const actual = greet("World");
    const expected = "Hello, World!";
    assert.strictEqual(actual, expected);

});













