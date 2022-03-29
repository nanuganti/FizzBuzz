const processFizzBuzz = require("../helloFizzBuzz");
const { expectedFizzBuzzOutput } = require("../mocks/fizzBuzzOutput");
describe("fizzBuzz", () => {
    it("should return fizzBuzz ", () => {
        const outPut = processFizzBuzz([1, 3, 5, "", 15, "A", 23]);
        expect(outPut).toEqual(expectedFizzBuzzOutput);
    });
})