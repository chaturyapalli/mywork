// Form validation (Optional, can add validation checks here)
function validateForm(event) {
    event.preventDefault(); // Prevent form submission to check validations

    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const gender = document.querySelector('input[name="gender"]:checked');

    // Phone Number Validation: Should be numbers only
    const phoneRegex = /^[0-9]+$/;
    if (!phone.value.match(phoneRegex)) {
        alert('Phone number should only contain numbers.');
        return false;
    }

    // Email Validation: Should contain '@'
    if (!email.value.includes('@')) {
        alert('Email should contain "@" symbol.');
        return false;
    }

    // Password Validation: Should meet the criteria
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password.value.match(passwordRegex)) {
        alert('Password must be at least 6 characters long, include one uppercase letter, one number, and one special character.');
        return false;
    }

    // Confirm Password Validation: Should match the password
    if (password.value !== confirmPassword.value) {
        alert('Password and confirm password should match.');
        return false;
    }

    // Gender Validation: One radio button must be selected
    if (!gender) {
        alert('Please select a gender.');
        return false;
    }

    // If all validations pass, submit the form and redirect
    handleSubmit(event);
}

// Form submission handling and redirection
function handleSubmit(event) {
    // Optionally, you can validate the form here, but in this case we already did that in `validateForm`
    
    // Now redirect the user to another page
    window.location.href = 'success.html';  // Replace with your destination URL
}

// Attach the validation function to the form submission
document.getElementById('registrationForm').addEventListener('submit', validateForm);
