const { isValidPhone } = require('./index');

describe('phone numbers', () => {
  describe('invalid phone numbers', () => {
    it('should return false for undefined', () => {
      expect(isValidPhone(undefined)).toBeFalsy();
    });

    it('should return false for null', () => {
      expect(isValidPhone(null)).toBeFalsy();
    });

    it('should return false for an empty string', () => {
      expect(isValidPhone('')).toBeFalsy();
    });

    it('should return false for alphabets', () => {
      expect(isValidPhone('sdfghjk')).toBeFalsy()
    });

    it('should return false for alphanumerics', () => {
      expect(isValidPhone('34567sdfghj-45678fghj')).toBeFalsy();
    });

    it('should return false for phone numbers which begin with an hyphen', () => {
      expect(isValidPhone('-701-123-345')).toBeTruthy();
      expect(isValidPhone('-701123345')).toBeTruthy();
    });

    it('should return false for phone numbers that are branketed', () => {
      expect(isValidPhone('(254) 701 123 456')).toBeFalsy();
      expect(isValidPhone('(+254) 701 123 456')).toBeFalsy();
      expect(isValidPhone('(+254)-701-123-456')).toBeFalsy();
    });

    it('should return false for invalid international phone numbers with four digits at the end', () => {
      expect(isValidPhone('754-3010')).toBeFalsy();
      expect(isValidPhone('(541) 754-3010')).toBeFalsy();
    })
  });

  describe('valid phone numbers', () => {
    describe('kenyan phone numbers', () => {
      it('should return true for valid phone numbers', () => {
        expect(isValidPhone('+254-701-123-456')).toBeTruthy();
        expect(isValidPhone('+254 701 123 456')).toBeTruthy();
        expect(isValidPhone('254 701 123 456')).toBeTruthy();

        expect(isValidPhone('0-701-123-456')).toBeTruthy();
        expect(isValidPhone('0 701 123 456')).toBeTruthy();
        expect(isValidPhone('0701 123 456')).toBeTruthy();
        expect(isValidPhone('0701-123-456')).toBeTruthy();
        expect(isValidPhone('0701123456')).toBeTruthy();

        expect(isValidPhone('701123456')).toBeTruthy();
        expect(isValidPhone('701123459')).toBeTruthy();
      });
    });
  });

  describe('valid eastern africa phone numbers', () => {
    it('should return true for valid phone numbers with correct country codes for east africa', () => {
      expect(isValidPhone('+255-701-123-456')).toBeTruthy(); //Tanzania
      expect(isValidPhone('+251 701 123 456')).toBeTruthy(); //Ethiopia
      expect(isValidPhone('+256-701-123-456')).toBeTruthy(); //Uganda
    });
  });

  describe('valid international phone numbers', () => {
    it('should return true for valid international phone numbers', () => {
      expect(isValidPhone('+541-754-3010')).toBeTruthy();
      expect(isValidPhone('1-541-754-3010')).toBeTruthy();
      expect(isValidPhone('001-541-754-3010')).toBeTruthy();
    })
  })
});