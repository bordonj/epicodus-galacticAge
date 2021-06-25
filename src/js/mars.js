// - Mars year is 1.88 Earth years
export default class Mars {
  constructor(age) {
    this.marsAge = parseFloat((age * 1.88).toFixed(1));
  }
}