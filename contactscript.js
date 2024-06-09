document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact');
    const feedback = document.getElementById('form-feedback');
	
    form.addEventListener('submit', (event) => {
        event.preventDefault();
		
        // Clear previous feedback
        feedback.textContent = '';
		
        // Retrieve form values
        const name = document.getElementById('myName').value.trim();
        const email = document.getElementById('myEmail').value.trim();
        const reason = document.getElementById('myReason').value.trim();
        const comments = document.getElementById('myComments').value.trim();
		
        // Validate name
        if (name === '') {
            feedback.textContent = 'Please enter your name.';
            return;
			} else if (/\d/.test(name)) {
            feedback.textContent = 'Name cannot contain numbers.';
            return;
		}
		
        // Validate email
        if (email === '' || !validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            return;
		}
		
        // Validate reason
        if (reason === '') {
            feedback.textContent = 'Please select a reason for contact.';
            return;
		}
		
        // Validate comments
        if (comments === '') {
            feedback.textContent = 'Please provide your comments.';
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
