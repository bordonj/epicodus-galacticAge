// export function Project() {
// }

//- Mercury year is .24 Earth years

export default class Mercury {
  constructor(age) {
    this.age = parseFloat((age * .24).toFixed(1));
  }
}

// example commits for the following:
  // Good Fail: Add first test and Example Class.
  // Passing: Add constructor logic, pass first test.