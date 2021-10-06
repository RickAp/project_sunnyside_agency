const button = document.querySelector('.header__hamburger');
const links = document.querySelector('.header__links');

button.addEventListener('click', function(){
    if(links.style.display === 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
})










