export default class Venus {
  constructor(age) {
    this.venusAge = parseFloat((age / .62).toFixed(1));
    this.earthAge = age;
  }
  venusLifeExpect(yearsLeft) {
    this.venusYearsLeft = parseFloat((yearsLeft /.62).toFixed(1));

  }
}