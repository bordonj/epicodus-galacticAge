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
})