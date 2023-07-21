const button = document.querySelector('.navbar__header__collapse-button');
const content = document.querySelector('.navbar__content');
const icon = document.querySelector('.navbar__header__collapse-button i');

button.addEventListener('click', () => {
    if (content.classList.contains("navbar__content--active")) {
        content.classList.remove("navbar__content--active");
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    } else {
        content.classList.add("navbar__content--active");
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
})