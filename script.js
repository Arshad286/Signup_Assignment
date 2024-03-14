
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const submitBtn = document.getElementById('submit-btn');
    const errorMsg = document.getElementById('error-msg');

    const validateForm = () => {
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const mobilePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !mobile || !dob || !email || !password) {
            errorMsg.textContent = 'All fields are required';
            return false;
        }

        if (!mobilePattern.test(mobile)) {
            errorMsg.textContent = 'Invalid mobile number';
            return false;
        }

        if (!emailPattern.test(email)) {
            errorMsg.textContent = 'Invalid email address';
            return false;
        }

        if (password.length < 6) {
            errorMsg.textContent = 'Password must be at least 6 characters long';
            return false;
        }

        errorMsg.textContent = '';
        return true;
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            const userData = {
                name: document.getElementById('name').value,
                mobile: document.getElementById('mobile').value,
                dob: document.getElementById('dob').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = 'profile.html';
        }
    });

    form.addEventListener('input', function() {
        submitBtn.disabled = !validateForm();
    });
});
