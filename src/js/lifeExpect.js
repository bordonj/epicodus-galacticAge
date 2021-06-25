export default class LifeExpect {
  constructor(sex, age, bmi, activityLvl, drinkAlc, smoke, wealth, education, diseases) {
    let avgLifeExpect = 72.6;
    if (sex === 'female') {
      avgLifeExpect += 10;
      if (bmi >= 40) {
        avgLifeExpect -= 5;
      }
      console.log('gender female', avgLifeExpect);
    } else if (sex ==='male') {
      avgLifeExpect += 3;
      if (bmi >= 40) {
        avgLifeExpect -= 10;
      }
    } else {
      avgLifeExpect -= 15;
      if (bmi >= 40) {
        avgLifeExpect -= 8;
      }
    }
    if (bmi < 18) {
      avgLifeExpect -= 2;
    }
    if (activityLvl === 0) {
      avgLifeExpect -= 5;
    } else if (activityLvl === 1) {
      avgLifeExpect += 1;
    } else if (activityLvl > 1) {
      avgLifeExpect += 2;
    }
    if (drinkAlc) {
      avgLifeExpect -= 5
    }
    if (smoke) {
      avgLifeExpect -= 10;
    }
    if (wealth) {
      avgLifeExpect += 3;
    }
    if (education > 3) {
      avgLifeExpect += 5;
    }
    if (diseases) {
      avgLifeExpect -= 8;
    }
    this.lifeExpectYears = parseFloat((avgLifeExpect).toFixed(1));
    this.yearsLeft = parseFloat((avgLifeExpect - age).toFixed(1));
  }
}