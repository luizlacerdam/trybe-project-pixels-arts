const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se sem parametros retorna o objeto certo', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa recebendo parametro retorna certo', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa de parametro de dia errado retorna error', () => {
    expect(() => { getOpeningHours('Wednesssday', '09:00-PM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa de parametro de abreviação errada retorna error', () => {
    expect(() => { getOpeningHours('Wednesday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa de parametro de hora errada retorna error', () => {
    expect(() => { getOpeningHours('Wednesday', '0A:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('Testa de parametro de hora maior que 12 e retorna error', () => {
    expect(() => { getOpeningHours('Wednesday', '14:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Testa de parametro de minuto errado e retorna error', () => {
    expect(() => { getOpeningHours('Wednesday', '08:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
