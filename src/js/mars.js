export default class Mars {
  constructor(age) {
    this.marsAge = parseFloat((age / 1.88).toFixed(1));
    this.earthAge = age;
  }
  marsLifeExpect(yearsLeft) {
    this.marsYearsLeft = parseFloat((yearsLeft / 1.88).toFixed(1));
  }
}