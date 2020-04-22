const { add } = require('./calculator.js');

// test away!
// describe does nothing but organize the output
describe('calculator.js', () => {
    // test case goes here
    // try to make the tests fail first
    // to make sure you're testing 
    // what you think you're testing
    // also helps avoid false positives 
    // when you test for real
    it('should run tests without errors', () => {
        // arrange - set up the world

        // act - execute the code we're testing

        // assert - check our assumptions
        expect(false).toBeFalsy();
    })

    describe('.add()', () => {
        // start by deciding on what to test
        // happy path is a good place to start:
        // 'if the world is perfect, what does
        // this component/function do?'
        it('should add two numbers', () => {
            // arrange + act (set up and execute)
            expect(add(2, 2)).toBe(4);
            expect(add(4, 7)).toBe(11);
            expect(add(3, 9)).toBe(12);
            expect(add(0, 0)).toBe(0);
                     
            // can find more matchers on jest documentation under Expect
            // https://jestjs.io/docs/en/expect
        })

        it('should return 0 when called with no arguments', () => {
            expect(add()).toBe(0);
        })

        it('should return the number when called with a single number', () => {
            expect(add(7)).toBe(7);
            expect(add(2)).toBe(2);
            expect(add(-5)).toBe(-5);
        })

        it('should return the correct sum of 3 or more numbers', () => {
            expect(add(7, 9, 1)).toBe(17);
            expect(add(1, 2, 3)).toBe(6);         
        })

        // it('should support an array of numbers', () => {
        //     expect(add([2, 2, 5]).toBe(9));
        // })

    })
})

// TDD
// -Write failing test - because you don't have any code yet
// -Write just enough code to pass test
// -Compare test and code, and optimize, refactor,
// clean up with confidence, without adding new functionality 
// -Next step: commit