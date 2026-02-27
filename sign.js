function toggleForm(formType) {
    const login = document.getElementById('login-form');
    const signup = document.getElementById('signup-form');
    const forgot = document.getElementById('forgot-form');

    // Add fade-out effect
    [login, signup, forgot].forEach(f => f.classList.add('hidden'));

    if (formType === 'login') login.classList.remove('hidden');
    if (formType === 'signup') signup.classList.remove('hidden');
    if (formType === 'forgot') forgot.classList.remove('hidden');
}

function validateForm(event, type) {
    event.preventDefault();
    let isValid = true;
    const form = event.target;
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const parent = input.parentElement;
        if (input.value.trim() === "") {
            parent.classList.add('error');
            isValid = false;
        } else {
            parent.classList.remove('error');
        }
    });

    if (!isValid) {
        alert("Plz fill the details");
    } else {
        // Success: Redirect to existing 404 page
        window.location.href = "404.html"; 
    }

    return false;
}