const navButton = document.querySelector('#ham-btn');
const navigation = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navigation.classList.toggle('show')
});