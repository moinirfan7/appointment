document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simple validation
    if (name === '' || email === '' || phone === '' || date === '' || time === '') {
        displayMessage('All fields are required!', 'error');
        return;
    }

    // If validation passes
    displayMessage('Appointment successfully booked!', 'success');
});

function displayMessage(message, type) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;

    if (type === 'success') {
        responseMessage.style.color = 'green';
    } else if (type === 'error') {
        responseMessage.style.color = 'red';
    }
}
