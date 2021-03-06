import LifeExpect from "../src/js/lifeExpect";
import Mercury from "../src/js/mercury";

describe ('Mercury', () => {
  let mercury;

  beforeEach(() => {
    mercury = new Mercury(30)
  })

  test('should correctly create a mercury object and its converted age', () => {
    expect(mercury.mercuryAge).toBeCloseTo(125)
  })
  test('in mercury object, should have original earth age', () => {
    expect(mercury.earthAge).toEqual(30);
  })
  test('in mercury object, should calculate expected years left to live on mercury', () => {
    let lifeExpect = new LifeExpect('female', 30, 16.8, 2, false, false, 1, 6, false);
    let newMercury = new Mercury(30);
    newMercury.mercuryLifeExpect(lifeExpect.yearsLeft);
    expect(newMercury.mercuryYearsLeft).toBeCloseTo(252.5);
  })

})
// - Mercury year is .24 Earth years
// - Venus year is .62 Earth years
// - Mars year is 1.88 Earth years
// - Jupiter year is 11.86 Earth years


// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });



// --------------------------------
// import { Entry } from '../src/journal';

// describe('Entry', () => {

//   test('should correctly create an Entry object with 2 keys (counter and entry)', () => {
//     const newEntry = new Entry('my potato');
//     expect(newEntry.counter).toEqual(0);
//     expect(newEntry.entry).toEqual('my potato');
//   });
//   test('should correctly count words and return the number)', () => {
//     const newEntry = new Entry('my potato');
//     let wordCount = newEntry.countWords();
//     expect(wordCount).toEqual(2);
//   });
//   test('should correctly count vowels and consonants)', () => {
//     const newEntry = new Entry('my potato');
//     let vcCount = newEntry.countVC();
//     expect(vcCount).toEqual(`vowels: ${3} consonants: ${5}`);
//   });
// });