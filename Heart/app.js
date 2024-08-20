const grayHeart = document.querySelector('.gray-heart');
const redHeart = document.querySelector('.red-heart');

grayHeart.addEventListener('click', () => {
    redHeart.classList.add('animation');
    gray-heart.classList.add('fill-color');
}) ;

redHeart.addEventListener('click', () => {
    redHeart.classList.remove('animation');
    gray-heart.classList.remove('fill-color');
}) ;
