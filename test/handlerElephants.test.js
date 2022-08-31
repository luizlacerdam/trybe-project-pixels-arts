const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se nenhum parametro enviado retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se o parametro for um numero retorna uma string de error', () => {
    expect(handlerElephants(69)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se parametros diferentes retorna null', () => {
    expect(handlerElephants('sadds')).toBeNull();
  });
  it('Testa se parametro "count" retorna 4', () => {
    expect(typeof handlerElephants('count')).toBe('number');
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se parametro "names" retorna os nomes dos elephantes', () => {
    expect(Array.isArray(handlerElephants('names'))).toBeTruthy();
    expect(handlerElephants('names').length).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se parametro "averageAge" retorna a media de idade dos elephantes', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
