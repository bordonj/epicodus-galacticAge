// - Jupiter year is 11.86 Earth years
export default class Jupiter {
  constructor(age) {
    this.jupiterAge = parseFloat((age * 11.86).toFixed(1));
  }
}