import LifeExpect from "../src/js/lifeExpect";
import Venus from "../src/js/venus";

describe('Venus', () => {
  let venus;

  beforeEach(() => {
    venus = new Venus(30);
  })

  test('should correctly create a venus object and its converted age', () => {
    console.log('venus class', venus);
    expect(venus.venusAge).toEqual(18.6);
  })
  test('in venus object, should have original earthAge', () => {
    expect(venus.earthAge).toEqual(30);
  })
  test('in venus object, should calculate expected years left to live on venus', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
    let newVenus = new Venus(30);
    newVenus.venusLifeExpect(lifeExpect.yearsLeft);
    expect(newVenus.venusYearsLeft).toBeCloseTo(37.6);
  })
})