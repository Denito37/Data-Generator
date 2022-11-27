const darkMode = document.getElementById('dMode');
const mainE = document.getElementById('main');

darkMode.addEventListener('click', () =>{
    mainE.classList.toggle('darkMode');
});