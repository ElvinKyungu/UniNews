const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});

//Debut du script de mode sombre
const swicthBtn = document.querySelector('input[type="checkbox"]');
const defaultTheme = window.matchMedia("prefers-color-scheme :dark)");
let currentTheme = localStorage.getItem('theme');

swicthBtn.addEventListener('change', swicthTheme);

if (defaultTheme.matches) {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        swicthBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        swicthBtn.checked = true;
    }
} else {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        swicthBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        swicthBtn.checked = true;
    }
}

function swicthTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log(localStorage.getItem('theme'));
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        console.log(localStorage.getItem('theme'));
    }
}