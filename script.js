// lessonsmore
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function toggleImage(element) {
const img = element.querySelector('img');
if (img.src.includes('favoritefalse.png')) {
    img.src = 'images/favorite.png'; // Укажите путь к другому изображению
} else {
    img.src = 'images/favoritefalse.png'; // Возврат к исходному изображению
}
}


// reservation code
$(document).ready(function(){
    $('.reservcardcode').each(function(){
        var parentHeight = $(this).parent('.reservcardinfo').outerHeight();
        $(this).css('height', parentHeight);
    });
});


const reservCardCodes = document.querySelectorAll('.reservcardcode');

// Применяем обработчик события к каждому элементу
reservCardCodes.forEach(function(reservCardCode) {
reservCardCode.onclick = function() {
    document.getElementById('confirmcancellesson').style.display = "block";
}
});

// // Настраиваем обработчик для кнопки закрытия
// document.querySelector('.close').onclick = function() {
//     document.getElementById('confirmcancellesson').style.display = "none";
// }

// Настраиваем обработчик для кнопки отмены
document.getElementById('denyCancel').onclick = function() {
document.getElementById('confirmcancellesson').style.display = "none";
}