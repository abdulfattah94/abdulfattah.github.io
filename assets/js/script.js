//burger menu
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const menuList = document.querySelectorAll('.menu li')

let active = () => {
    menu.classList.toggle('nav-active')
    menuList.forEach((list, index) => {
        if (list.style.animation){
            list.style.animation = ''
        }else{
        list.style.animation = `menuFade 0.5s ease forwards ${index / 7 + 0.3}s`}
        })
    burger.classList.toggle('toggle')
}
burger.addEventListener('click', active);

const lightboxContainer = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightbox-img')
const img = document.querySelector('.grid').children
const counter = document.querySelector('.lightbox-counter')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const closeBtn = document.querySelector('.lightbox-close span')
let index
let imgSrc

lightboxContainer.addEventListener('click', event => {
    if(event.target === closeBtn || event.target === lightboxContainer ){
        lightbox()
    }
})

for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', () => {
        index = i
        lightbox()
        changeImage()
    })
}
function lightbox(){
    lightboxContainer.classList.toggle('open')
}

function changeImage(){
    imgSrc = img[index].getAttribute('src')
    lightboxImage.src = imgSrc
    counter.innerHTML = `image ${index + 1} of ${img.length}`
}

function next(){
    if(index === img.length - 1){
        index = 0
    }else{
        index++
    }    
    changeImage()
}

function prev(){
    if(index === 0){
        index = img.length - 1
    }else{
        index--
    }
    changeImage()
}
