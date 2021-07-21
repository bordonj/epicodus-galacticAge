import LifeExpect from "../src/js/lifeExpect";

describe('Life Expect', () => {
  
  test('should create a lifeExpect object that can calculate life expectancy based on some demographics', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, true, 6, false);
    expect(lifeExpect.lifeExpectYears).toEqual(90.6);
  })
  test('lifeExpect object should contain variable that calulates how many years user has left to live', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
    expect(lifeExpect.yearsLeft).toEqual(60.6);
  })
  test(`lifeExpect object should show different lifeExpectYears for different argument inputs ('female', 60, 45, 0, true, true, 1, 1, false)`, () => {
    let lifeExpect = new LifeExpect('female', 60, 45, 0, true, true, 1, 1, false);
    expect(lifeExpect.lifeExpectYears).toBeLessThan(70);
  })
  test(`lifeExpect object should show different lifeExpectYears for argument inputs ('male', 60, 45, 1, true, true, 0, 1, true)`, () => {
    let lifeExpect = new LifeExpect('male', 33, 39, 0, true, true, 0, 1, true);
    expect(lifeExpect.lifeExpectYears).toBeLessThan(60);
  })
  test(`lifeExpect object should show different lifeExpectYears for different argument inputs ('non-conforming', 60, 45, 0, true, true, 1, 1, false`, () => {
    let lifeExpect = new LifeExpect('non-conforming', 30, 45, 1, true, true, 0, 1, true);
    expect(lifeExpect.lifeExpectYears).toBeLessThan(50);
  })
  test('lifeExpect object should return number of 0 if user age is not passed life expectancy', () => {
    let lifeExpect = new LifeExpect('male', 30, 45, 2, true, true, 0, 1, true);
    lifeExpect.checkSurpassedLifeExpec();
    expect(lifeExpect.surpassedYears).toEqual(0);
  })
  test('lifeExpect object should return number of years for user who surpassed life expectancy', () => {
    let lifeExpect = new LifeExpect('non-binary', 60, 39, 0, true, true, 0, 1, true);
    lifeExpect.checkSurpassedLifeExpec();
    expect(lifeExpect.surpassedYears).toBeGreaterThanOrEqual(0);
  })
})
