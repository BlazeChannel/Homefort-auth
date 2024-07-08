window.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('loginform');
    const warning = document.getElementById('warning');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        warning.innerHTML = '';

        const eMail = document.getElementById('loginemail').value;
        const passWord = document.getElementById('loginpassword').value;

        if (!eMail || !passWord) {
            warning.textContent = 'Please fill out all required fields.';
            warning.className = 'error';
            return;
        }

        const data = {
            eMail,
            passWord,
        };
        warning.textContent = 'Submitting...';
        warning.className = 'progress';

        fetch('https://667ee9bff2cb59c38dc775c7.mockapi.io/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network issue: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {                
                warning.textContent = 'Invalid email or password. Please try again.';
                warning.className = 'error';
            } else {
                warning.textContent = alert('Login successful!');
                warning.className = 'success';
                loginForm.reset();
            }
        })
        .catch(error => {
            warning.textContent = 'There was a problem with the login. Please try again later.';
            warning.className = 'error';
        });
    });
});