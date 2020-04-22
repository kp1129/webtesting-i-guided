const { validate } = require('./userService');

describe('user-service.js', () => {
    describe('.validate()', () => {
        it('should return false if user is missing username or password', () => {
            expect(validate({})).toBe(false);
        });
        it('should return true if user has both username and password', () => {
            expect(validate({ username: "sam", password: "password"})).toBe(true);
        })
    })
})