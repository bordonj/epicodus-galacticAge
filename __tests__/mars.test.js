import LifeExpect from "../src/js/lifeExpect";
import Mars from "../src/js/mars";

describe('Mars', () => {
  let mars;

  beforeEach(() => {
    mars = new Mars(30);
  })
  test('should correctly create a mars object and its converted age', () => {
    console.log('mars object', mars);
    expect(mars.marsAge).toBeCloseTo(16);
  })
  test('in mars object, should have original earth age', () => {
    expect(mars.earthAge).toEqual(30);
  })
  test('in mars object, should calculate expected years left to live on mars', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
    let newMars = new Mars(30);
    newMars.marsLifeExpect(lifeExpect.yearsLeft);
    expect(newMars.marsYearsLeft).toBeCloseTo(32.2);


  })
})