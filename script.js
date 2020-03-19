const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
menu.querySelectorAll('A').forEach(elem => 
    elem.classList.remove('current')
);
    event.target.classList.add('current');    
});

document.addEventListener('scroll', onScroll);
function onScroll(event) {
    const currentPosition = window.scrollY;
    const divs = document.querySelectorAll('#wrapper>div');
    const links = document.querySelectorAll('#menu a.list-link');
    console.log(divs);
    divs.forEach(elem => {
        if (elem.offsetTop <= currentPosition && elem.offsetTop + elem.offsetHeight > currentPosition) {
            links.forEach((a) => {
                a.classList.remove('current');
                if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('current');
                }
            })
        }
    })
};

const phone = document.querySelector('.vertical');
const black = phone.querySelector('.vertical-black');
phone.addEventListener('click', (event) => {
        if (event.target.style.opacity == 1) {
            black.style.opacity = 0;
        } event.target.style.opacity = 1;
    });    

const phoneHor = document.querySelector('.horisontal');
const blackHor = phoneHor.querySelector('.horisontal-black');
phoneHor.addEventListener('click', (event) => {
    if (event.target.style.opacity == 1) {
        blackHor.style.opacity = 0;
        } event.target.style.opacity = 1;
    });
//slider
let slide = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
    currentSlide = (n + slide.length) % slide.length;
}

function hideSlide(direction) {
    isEnabled = false;
    slide[currentSlide].classList.add(direction);
    slide[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
} 

function showSlide(direction) {
    slide[currentSlide].classList.add('next', direction);
    slide[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}    

function previousSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n - 1);
    showSlide('from-right');
}

function nextSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n + 1);
    showSlide('from-left');
    }


document.querySelector('.control.left').addEventListener('click', function() {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.control.right').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});
//slider end


//tab

const tab = document.getElementById('tab');
const btn = document.querySelectorAll('.button');
const content = document.querySelector('.layout__content');

tab.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {    
    btn.forEach(elem =>      
        elem.classList.remove('act'));
        event.target.classList.add('act');
        content.append(content.children[0]);
        }          
});

//border

const picture = document.querySelectorAll('.layout__content-image');
content.addEventListener('click', (event) => {
    if (event.target.classList.contains('layout__content-image')) {
    for (let i = 0; i < picture.length; i++) {
        if (event.target !== picture[i]) {
            picture[i].classList.remove('border');
        }
    } event.target.classList.add('border');}
});
//form

const BUTTON = document.getElementById('btn');
const closeBtn = document.getElementById('close-btn');

BUTTON.addEventListener('click', () => {
    const themes = document.getElementById('themes').value.toString();
    if (themes != '') {
        document.getElementById('result-themes').innerText = "Тема:" + themes;
        }    else {
            document.getElementById('result-themes').innerText = "Без темы";
        }
    const describe = document.getElementById('describe').value.toString();
        if (describe != '') {
            document.getElementById('result-describe').innerText = "Описание:" + describe;
        } else {
            document.getElementById('result-describe').innerText = "Без описания";
        }        
    document.getElementById('message-block').classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    document.getElementById('result-themes').innerText = '';
    document.getElementById('result-describe').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    
});
