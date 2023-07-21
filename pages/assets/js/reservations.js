const modal = document.querySelector('.reservations__modal');
const modalCloseButton = document.querySelector('.reservations__modal__content__header__close-button');
const modalContentDetails = document.querySelector('.reservations__modal__content__header__details');

const billingButtons = document.querySelectorAll('.reservations__informations__row__button');

billingButtons.forEach((button) => {
    if (!button.classList.contains('reservations__informations__row__button--outofstock')) {
        button.addEventListener('click', () => {
            modal.classList.add('reservations__modal--active');
            modalContentDetails.textContent = `Réservation : ${button.parentElement.parentElement.parentElement.children[0].textContent.includes("VIP") ? button.parentElement.children[0].textContent + " (VIP)" : button.parentElement.children[0].textContent}, ${button.parentElement.children[1].textContent}`;
        })
    }
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('reservations__modal--active');
})

const billingForm = document.querySelector('.reservations__modal__content__form');

billingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(billingForm);

    const data = {
        lastName: formData.get('lastName'),
        firstName: formData.get('firstName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        postalAddress: formData.get('postalAddress'),
        postalCode: formData.get('postalCode'),
        city: formData.get('city'),
        country: formData.get('country'),
        quantity: formData.get('reservationQuantity'),
    }

    for (const [key, value] of Object.entries(data)) {
        if (value === '') {
            alert('Veuillez remplir tous les champs du formulaire');
            return;
        }
    }


    billingForm.reset();
    modal.classList.remove('reservations__modal--active');
    alert('Votre réservation a bien été prise en compte !');
})