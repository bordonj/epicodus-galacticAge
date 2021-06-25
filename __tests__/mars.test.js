import Mars from "../src/js/mars";

describe('Mars', () => {
  let mars;

  beforeEach(() => {
    mars = new Mars(30);
  })
  test('should correctly create a mars object and its converted age', () => {
    console.log('mars object', mars);
    expect(mars.marsAge).toEqual(56.4);
  })
  test('in mars object, should have original earth age', () => {
    expect(mars.earthAge).toEqual(30);
  })
})