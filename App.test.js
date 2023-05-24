import { validatePassword } from './App';

describe('Password Utils', () => {
  describe('isPasswordStrong', () => {
    it('should return true for a strong password', () => {
      expect(validatePassword('Baaba0')).toBe(true);
    });

    it('should return false for a weak password', () => {
      expect(validatePassword('Baaabb0')).toBe(false);
    });

    it('should return false for a password with less than 6 characters', () => {
      expect(validatePassword('abc12')).toBe(false);
    });

    it('should return false for a password with more than 20 characters', () => {
      expect(validatePassword('abcdefghijklmnopqrstuvwxyz1234567890')).toBe(false);
    });

    it('should return false for a password without an uppercase letter', () => {
      expect(validatePassword('baaba0')).toBe(false);
    });

    it('should return false for a password without a lowercase letter', () => {
      expect(validatePassword('BAABA0')).toBe(false);
    });

    it('should return false for a password without a digit', () => {
      expect(validatePassword('Baaba')).toBe(false);
    });
  });

  describe('getMinStepsToMakeStrong', () => {
    it('should return 0 for a strong password', () => {
      expect(getMinStepsToMakeStrong('Baaba0')).toBe(0);
    });

    it('should return the correct number of steps for a weak password', () => {
      expect(getMinStepsToMakeStrong('Baaabb0')).toBe(2);
      expect(getMinStepsToMakeStrong('Aa0')).toBe(3);
      expect(getMinStepsToMakeStrong('a0')).toBe(4);
      expect(getMinStepsToMakeStrong('A')).toBe(5);
      expect(getMinStepsToMakeStrong('123456')).toBe(2);
    });
  });
});