import LifeExpect from "../src/js/lifeExpect";

describe('Life Expect', () => {
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
  })

  test('should create a lifeExpect object that can calculate life expectancy based on some demographics', () => {
    console.log('lifeExpect', lifeExpect);
    expect(lifeExpect.lifeExpectYears).toEqual(90.6);
  })
  test('lifeExpect object should contain variable that calulates how many years user has left to live', () => {
    console.log('yearsLeft', yearsLeft);
    expect(lifeExpect.yearsLeft).toEqual(60.6);
  })
  
})
