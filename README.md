# BMI Calculator

## Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [How it Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple JavaScript class that calculates and categorizes the Body Mass Index (BMI) of a person. The BMI is a measure of body weight in relation to height, and it is used to determine whether a person is underweight, normal, overweight, or obese.

## Installation

To use this class, you need to have a JavaScript environment set up. This could be a simple text editor or a full-fledged IDE like Visual Studio Code or WebStorm. No additional dependencies are required for this project.

## Usage

You can use this class by creating a new instance of the `person` class and passing the name, weight, and height of the person as arguments to the constructor. Then, you can call the `bmiClass` method on the instance to get the BMI of the person and the category they fall into.

Here's an example:

```javascript
const joseph = new person("Joseph", 130, 1.75);
console.log(joseph.bmiClass());
```

This will output the name of the person, their weight, their BMI, and the category they fall into based on their BMI.

## How it Works

1. Class Definition and Constructor

The `person` class is defined with three properties: `name`, `weight`, and `height`. The constructor function is used to initialize these properties when a new instance of the class is created.

2. BMI Calculation

The `bmiCalc` method calculates the BMI of the person using the formula: `weight / (height \* height)`. This formula is used to calculate the BMI of a person in kilograms and meters. The BMI is a measure of body weight in relation to height, and it is used to determine whether a person is underweight, normal, overweight, or obese.

3. BMI Classification

The `bmiClass` method categorizes the person's BMI based on the following ranges:

- Underweight: BMI < 18.5
- Normal Weight: 18.5 >= BMI < 25
- Overweight: 25 >= BMI < 30
- Obese: 30 >= BMI < 40
- Severely Obese: BMI >= 40

The method returns a string that includes the person's name, weight, BMI, and the category they fall into.

4. Instantiation and Usage

A new instance of the `person` class is created with the name "Joseph", weight 130kg, and height 1.75m. The `bmiClass` method is then called on this instance and the result is logged to the console.

```javascript
const joseph = new person("Joseph", 130, 1.75);
console.log(joseph.bmiClass());
```

## Contributing

Contributions are welcome! Please read the [Contributing guide](https://github.com/github/docs/blob/main/content/get-started/quickstart/create-a-repo.md) for details.

## License

This project is licensed under the [GPL License](https://choosealicense.com/licenses/gpl-3.0/).
