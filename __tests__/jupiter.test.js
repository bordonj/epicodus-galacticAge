import Jupiter from "../src/js/jupiter";

describe('Jupiter', () => {
  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter(30);
  }) 
  test('should create jupiter object and its converted age', () => {
    expect(jupiter.jupiterAge).toEqual(355.8)
  })
})