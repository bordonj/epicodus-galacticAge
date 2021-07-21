export default class Jupiter {
  constructor(age) {
    this.jupiterAge = parseFloat(((age / 11.86)).toFixed(1));
    this.earthAge = age;
  }
  jupiterLifeExpect(yearsLeft) {
    this.jupiterYearsLeft = parseFloat((yearsLeft / 11.86).toFixed(1));
  }
}