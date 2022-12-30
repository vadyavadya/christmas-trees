const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('navigation_active');
});