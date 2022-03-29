const processFizzBuzz = (inputArray) => {
    let finalOutPutJson = [];
    inputArray.forEach(element => {
        let fizzBuzzOutPut = runFizzBuzzService(element);
        let outPutJson = {
            input: element,
            output: fizzBuzzOutPut
        }
        finalOutPutJson.push(outPutJson);
    });
    return finalOutPutJson;
}

const runFizzBuzzService = (inputNumber) => {
    if (!Number.isInteger(inputNumber)) {
        return "invalid Item";
    }
    if (inputNumber % 3 === 0) {
        return "Fizz"
    } else if (inputNumber % 5 === 0) {
        return "Buzz";
    } else {
        return [`Divided ${inputNumber} by 3`, `Divided ${inputNumber} by 5`];
    }
}

module.exports = processFizzBuzz;