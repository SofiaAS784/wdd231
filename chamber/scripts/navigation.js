const navButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navigation.classList.toggle('show')
});