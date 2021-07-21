# _Super Galactic Age Calculator_

#### _Super Galactic Age Calculator- 06/25/21 - Code Review005_

#### By _**Jennifer Bordon**_

## Technologies Used

* _Git_
* _HTML_
* _CSS_ 
* _Bootstrap_
* _jQuery_
* _JavaScript_
* _npm_
* _webpack_
* _Jest_
* _ESLint_


## Description
* This application can take a person's age in Earth years, and then transform it into an age for a respective planet (i.e., Mercury, Venus, Mars, Jupiter)
  - Mercury year is .24 Earth years
  - Venus year is .62 Earth years
  - Mars year is 1.88 Earth years
  - Jupiter year is 11.86 Earth years
* It can also determine how many years a user has left to live on each planet based on their life expectancy on Earth
## Setup/Installation Requirements
* Clone this project into your preferred directory
* In that directory, there should now be a directory labeled "epicodus-galacticAge"
* run `npm i` to install respective plugins/packages
* run `npm start` to go see a live server of the app
* run `npm test` to see the different tests that calculate user's age and life expectancy, respective of planet

## Notes
* This app referenced [Girlstart](http://girlstart.org/wp-content/uploads/2017/07/13.Age-on-Planets.pdf) which provided a basic formula to calculate a planet's age based on their Earth age
* The calculation of life expectancy was arbitrarily created using little research, thus please take it with your own discretion and look at real resources if you'd like a more accurate estimate

## Key for demographics used to calculate life expectancy
* activityLvl: scale 0-3
  * 0 - no daily/weekly exercise
  * 1 - exercises 1-3 times weekly
  * 2 - exercises 4-7 times weekly
  * 3 - exercises daily
* drinkAlc, smoke, wealth, diseases
  * booleans: true or false
* education: scale 1-6
  * 1 - primary education (elementary school)
  * 2 - secondary education (middle school)
  * 3 - tertiary education (high school)
  * 4 - college degree
  * 5 - master's degree
  * 6 - doctorates degree
## Known Bugs

* _Calculated age and years left are approximated, and may not be the most precise_
* _Apps also lacks accommodation for leap years, and will not be an accurate calculation for those with leap year births_

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact Information

_jennifer.bordon@gmail.com_
