// - Venus year is .62 Earth years
export default class Venus {
  constructor(age) {
    this.venusAge = parseFloat((age * .62).toFixed(1));
    this.earthAge = age;
  }
}