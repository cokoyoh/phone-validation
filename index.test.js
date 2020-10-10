const { validate } = require('./index');

describe('phone numbers', () => {
  describe('invalid phone numbers', () => {
    it('should return false for undefined', () => {
      expect(validate(undefined)).toBeFalsy();
    });

    it('should return false for null', () => {
      expect(validate(null)).toBeFalsy();
    });
  });

  describe('valid phone numbers', () => {
    it('should return true for valid phone numbers', () => {
      expect(validate('+254-701-123-456')).toBeTruthy()
    })
  })
})