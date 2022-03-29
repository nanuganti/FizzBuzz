const expectedFizzBuzzOutput = [
    { input: 1, output: ['Divided 1 by 3', 'Divided 1 by 5'] },
    { input: 3, output: 'Fizz' },
    { input: 5, output: 'Buzz' },
    { input: '', output: 'invalid Item' },
    { input: 15, output: 'Fizz' },
    { input: 'A', output: 'invalid Item' },
    { input: 23, output: ['Divided 23 by 3', 'Divided 23 by 5'] }
];

module.exports = { expectedFizzBuzzOutput }