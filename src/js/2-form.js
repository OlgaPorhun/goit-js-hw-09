document.addEventListener('DOMContentLoaded', function () {
    const formData = {
        email: "",
        message: ""
    };

    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        Object.assign(formData, parsedData);

        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }

    document.querySelector('.feedback-form').addEventListener('input', function (event) {
        const { name, value } = event.target;
        formData[name] = value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    document.querySelector('.feedback-form').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!formData.email || !formData.message) {
            alert('Fill please all fields');
            return;
        }

        console.log(formData);

        localStorage.removeItem('feedback-form-state');
        Object.keys(formData).forEach(key => formData[key] = "");
        document.querySelector('.feedback-form').reset();
    });
});