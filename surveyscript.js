document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear previous feedback
        feedback.textContent = '';

        // Retrieve form values
        const name = document.getElementById('myName2').value.trim();
        const email = document.getElementById('myEmail2').value.trim();
        const explanation = document.getElementById('myExplanation').value.trim();
        const answer = document.getElementById('myAnswer').value.trim();

        // Validate name
        // Validate name
		if (name === '') {
			feedback.textContent = 'Please enter your name.';
			return;
		} else if (/\d/.test(name)) {
			feedback.textContent = 'Name cannot contain numbers.';
			return;
		}

        // Validate email format
        if (email === '') {
            feedback.textContent = 'Please enter your email address.';
            return;
        } else if (!validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        // Validate explanation length
        if (explanation.length < 10) {
            feedback.textContent = 'Explanation must be at least 10 characters long.';
            return;
        }

        // Validate answer length
        if (answer.length < 10) {
            feedback.textContent = 'Answer must be at least 10 characters long.';
            return;
        }

        // If validation passes
        feedback.textContent = 'Form submitted successfully!';
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
