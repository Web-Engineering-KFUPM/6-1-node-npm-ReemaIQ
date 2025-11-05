export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    // start with the first number, subtract the rest
    return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

export function multiply(numbers) {
    return numbers.reduce((result, num) => result * num, 1);
}

export function divide(numbers) {
    return numbers.slice(1).reduce((result, num) => {
        if (num === 0) {
            throw new Error("Division by zero is invalid");
        }
        return result / num;
    }, numbers[0]);
}
// actual place is here, not in calculator.js