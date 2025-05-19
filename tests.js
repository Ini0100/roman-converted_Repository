// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman - Decimal to Roman values', function() {
  it('should convert 6 to "VI"', function() {
    expect(integerToRoman(6)).to.equal('VI');
  });

  it('should convert 17 to "XVII"', function() {
    expect(integerToRoman(17)).to.equal('XVII');
  });

  it('should convert 545 to "DXLV"', function() {
    expect(integerToRoman(545)).to.equal('DXLV');
  });

  it('should convert 2468 to "MMCDLXVIII"', function() {
    expect(integerToRoman(2468)).to.equal('MMCDLXVIII');
  });

  it('should convert 3888 to "MMMDCCCLXXXVIII"', function() {
    expect(integerToRoman(3888)).to.equal('MMMDCCCLXXXVIII');
  });

  it('should convert 3000 to "MMM"', function() {
    expect(integerToRoman(3000)).to.equal('MMM');
  });

  it('should throw error for 4000', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for 0', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for negative number', function() {
    expect(() => integerToRoman(-7)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for decimal number', function() {
    expect(() => integerToRoman(5.57)).to.throw("The number must be an integer.");
  });
});

describe('romanToInteger - Roman to Decimal values', function() {
  it('should convert "VI" to 6', function() {
    expect(romanToInteger('VI')).to.equal(6);
  });

  it('should convert "XI" to 11', function() {
    expect(romanToInteger('XI')).to.equal(11);
  });

  it('should convert "DCCXXXVII" to 737', function() {
    expect(romanToInteger('DCCXXXVII')).to.equal(737);
  });

  it('should convert "MMMDLVII" to 3557', function() {
    expect(romanToInteger('MMMDLVII')).to.equal(3557);
  });

  it('should convert "MMMDCCCLXXXVIII" to 3888', function() {
    expect(romanToInteger('MMMDCCCLXXXVIII')).to.equal(3888);
  });

  it('should convert "MMM" to 3000', function() {
    expect(romanToInteger('MMM')).to.equal(3000);
  });

  it('should throw error for "abc"', function() {
    expect(() => romanToInteger('abc')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for empty input', function() {
    expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for "IIII"', function() {
    expect(() => romanToInteger('IIII')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for "IC"', function() {
    expect(() => romanToInteger('IC')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for "VIIII"', function() {
    expect(() => romanToInteger('VIIII')).to.throw("Input must be a valid Roman numeral.");
  });
});

