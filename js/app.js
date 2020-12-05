const button = document.querySelector('.page-nav__toggler');
const menuList = document.querySelector('.page-nav__menu');

button.addEventListener('click', function(event) {
    const menuIcon = document.querySelector('.page-nav__toggler-icon');
    menuList.classList.toggle('page-nav__menu--open');
    menuIcon.classList.toggle('page-nav__toggler-icon--active');
    button.setAttribute('aria-expanded', String(menuList.classList.contains('page-nav__menu--open')));
}, false);


