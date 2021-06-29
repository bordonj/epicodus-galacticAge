import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Jupiter from './js/jupiter';
import Mercury from './js/mercury';
import Mars from './js/mars';
import Venus from './js/venus';
import LifeExpect from './js/lifeExpect';
$(document).ready(function() {
  $('#demo').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const sex = $('#sex').val();
    const bmi = parseFloat($('#bmi').val());
    const actLvl = parseFloat($('#actLvl').val());
    const smoke = $('#smoke').val();
    const drink = $('#drink').val();
    const wealth = $('#wealth').val();
    const education = parseFloat($('#education').val());
    const disease = $('#diseases').val();
    let arg = [];
    arg.push(sex, age, bmi, actLvl, drink, smoke, wealth, education, disease);
    for (let i = 0; i < arg.length; i++) {
      arg[i] === 'false' ? 
        arg[i] = false :
        arg[i] === 'true' ?
          arg[i] = true :
          null;
    }
    
    $('#age').val("");
    $('#sex').val("");
    $('#bmi').val("");
    $('#actLvl').val("actLvls");
    $('#smoke').val("smokeStatus");
    $('#drink').val("drinkStatus");
    $('#wealth').val("wealthStatus");
    $('#education').val("educationStatus");
    $('#diseases').val("diseaseStatus");

    const ageExpect = new LifeExpect(arg[0], arg[1], arg[2], arg[3], arg[4], arg[5], arg[6], arg[7], arg[8]);
    ageExpect.checkSurpassedLifeExpec();
    const newMercury = new Mercury(age);
    newMercury.mercuryLifeExpect(ageExpect.yearsLeft);
    const newVenus = new Venus(age);
    newVenus.venusLifeExpect(ageExpect.yearsLeft);
    const newMars = new Mars(age);
    newMars.marsLifeExpect(ageExpect.yearsLeft);
    const newJupiter = new Jupiter(age);
    newJupiter.jupiterLifeExpect(ageExpect.yearsLeft);
    
    $('#response').html(`
    <h1><b>Current Age</b>: ${newMars.earthAge}</h1>
    <p><b>Mercury Age</b>: ${newMercury.mercuryAge} <i>Years Left</i>: ${newMercury.mercuryYearsLeft}</p>
    <p><b>Venus Age</b>: ${newVenus.venusAge} <i>Years Left</i>: ${newVenus.venusYearsLeft}</p>
    <p><b>Mars Age</b>: ${newMars.marsAge} <i>Years Left</i>: ${newMars.marsYearsLeft}</p> 
    <p><b>Jupiter Age</b>: ${newJupiter.jupiterAge} <i>Years Left</i>: ${newJupiter.jupiterYearsLeft}</p>
    <p><b>Life Expectancy</b>: ${ageExpect.lifeExpectYears}</p>
    <p><b>Years surpassed</b>: ${ageExpect.surpassedYears}</p>
    `);
  });
});