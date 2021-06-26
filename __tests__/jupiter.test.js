import LifeExpect from "../src/js/lifeExpect";
import Jupiter from "../src/js/jupiter";

describe('Jupiter', () => {
  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter(30);
  }) 
  test('should create jupiter object and its converted age', () => {
    expect(jupiter.jupiterAge).toBeCloseTo(2.5)
  })
  test('in jupiter object, should have original earth age', () => {
    expect(jupiter.earthAge).toEqual(30);
  })
  test('in jupiter object, should calculate expected years to live on jupiter', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
    console.log ('lifeExpect object', lifeExpect);
    let newJupiter = new Jupiter(30);
    newJupiter.jupiterLifeExpect(lifeExpect.yearsLeft);
    console.log('newJupiter object', newJupiter);
    expect(newJupiter.jupiterYearsLeft).toBeCloseTo(5.1)
  })
})