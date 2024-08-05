document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiConclusion = document.getElementById('bmi-conclusion');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (weight && height) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            let conclusion = '';

            if (bmi < 18.5) {
                conclusion = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                conclusion = 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                conclusion = 'Overweight';
            } else {
                conclusion = 'Obese';
            }

            bmiValue.textContent = bmi;
            bmiConclusion.textContent = conclusion;
            resultDiv.classList.remove('hidden');
        } else {
            alert('Please enter both weight and height.');
        }
    }
});
