// shared-code/index.js
const add = (a, b) => {
    return a + b;
}

const product = (a, b) => {
    return a * b;
}

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

export { add, product, factorial };