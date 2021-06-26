// export function Project() {
// }

//- Mercury year is .24 Earth years

export default class Mercury {
  constructor(age) {
    this.mercuryAge = parseFloat((age * .24).toFixed(1));
    this.earthAge = age;
  }
  mercuryLifeExpect(yearsLeft) {

  }
}

// example commits for the following:
  // Good Fail: Add first test and Example Class.
  // Passing: Add constructor logic, pass first test.