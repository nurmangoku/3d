const card  = document.querySelector('.card')
const container = document.querySelector('.container')

const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description= document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

container.addEventListener('mousemove', e => {
    let  xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let  yAxis = (window.innerHeight / 2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener('mouseenter', e => {
    card.style.transition = `none`

    title.style.transform = `translateZ(150px)`
    sneaker.style.transform = `translateZ(200px) rotate(-45deg)`
    purchase.style.transform = `translateZ(75px)`
    description.style.transform = `translateZ(125px)`
    sizes.style.transform = `translateZ(100px)`
})



container.addEventListener('mouseleave', e => {
    card.style.transition = `all .5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = `translateZ(0)`
    sneaker.style.transform = `translateZ(0) rotate(0)`
    purchase.style.transform = `translateZ(0)`
    description.style.transform = `translateZ(0)`
    sizes.style.transform = `translateZ(0)`
})