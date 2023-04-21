var foo = 30; // does not create window.foo

export const sum = (a, b) => a + b;
export const numbers = [5, 10, 15, 20, 25, foo];

const product = (a, b) => a * b;
export default product;