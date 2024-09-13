function showAlert(message) {
    const modal = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    alertMessage.textContent = message; 
    modal.style.display = 'block'; 
 
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
 
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const hourlyRate = document.getElementById('hourlyRate');
    const hoursWorkedInputs = document.querySelectorAll('input[name="hours_worked"]');
    const processBtn = document.getElementById('processBtn');
    const fullName = document.getElementById('fullName');
    const weeklyWage = document.getElementById('weeklyWage'); 

    document.getElementById("firstName").focus();

    hoursWorkedInputs.forEach((input) => {
        input.addEventListener('input', function () {
            const hours = parseFloat(input.value);
            if (hours > 8) {
                showAlert('Hours worked per day cannot exceed 8 hours.');
                input.value = '';
            }
        });
    });

    processBtn.addEventListener('click', function () {

        if (!firstName.value || !lastName.value || !hourlyRate.value || Array.from(hoursWorkedInputs).some(input => input.value === '')) {
            showAlert('Please fill in all the fields before processing.');
            return;
        }

        const hourlySalary = parseFloat(hourlyRate.value);
        let totalHours = 0;

        hoursWorkedInputs.forEach((input) => {
            totalHours += parseFloat(input.value);
        });

        const totalWage = totalHours * hourlySalary;

        fullName.value = `${firstName.value} ${lastName.value}`;
        weeklyWage.value = `$${totalWage.toFixed(2)}`;
    });
});

