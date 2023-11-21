class person {
  name;
  weight;
  height;

  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  bmiCalc() {
    return this.weight / (this.height * this.height);
  }

  bmiClass() {
    const bmi = this.bmiCalc();
    if (bmi < 18.5) {
      return `${this.name} weighs ${
        this.weight
      }kg and is Underweight\nYour BMI is ${this.bmiCalc().toFixed(1)}`;
    } else if (bmi >= 18.5 && bmi < 25) {
      return `${this.name} weighs ${
        this.weight
      }kg and is Normal Weight\nYour BMI is ${this.bmiCalc().toFixed(1)}`;
    } else if (bmi >= 25 && bmi < 30) {
      return `${this.name} weighs ${
        this.weight
      }kg and is Overweight\nYour BMI is ${this.bmiCalc().toFixed(1)}`;
    } else if (bmi >= 30 && bmi < 40) {
      return `${this.name} weighs ${
        this.weight
      }kg and is Obese\nYour BMI is ${this.bmiCalc().toFixed(1)}`;
    } else {
      return `${this.name} weighs ${
        this.weight
      }kg and is Severely Obese\nYour BMI is ${this.bmiCalc().toFixed(1)}`;
    }
  }
}

const joseph = new person("Joseph", 130, 1.75);
console.log(joseph.bmiClass());
