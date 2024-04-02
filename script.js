// script.js

// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    const resultElement = document.getElementById('bmiResult');
    resultElement.innerHTML = `
        <p>Your BMI: ${bmi.toFixed(2)}</p>
        <p>Category: ${bmiCategory}</p>
    `;
}
