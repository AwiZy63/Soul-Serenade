const contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', (e) => {
    const formData = new FormData(contactForm);

    const data = {
        lastName: formData.get('lastName'),
        firstName: formData.get('firstName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };

    for (const [key, value] of Object.entries(data)) {
        if (value === '') {
            alert(`Le champ ${key} est vide !`);
            e.preventDefault();
            return;
        }
    }

    contactForm.reset();
    e.preventDefault();
    alert('Votre message a bien été envoyé !');
});