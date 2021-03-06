//Burger & nav animations

const burger = document.getElementById('burger')
const nav = document.getElementById('nav-list-container')
const navlinks = document.querySelectorAll('.nav-link')
const line1 = document.getElementById('line-1')
const line2 = document.getElementById('line-2')
const line3 = document.getElementById('line-3')

let navOpen = false

function toggleNav(){
  if(navOpen === false){
    line1.style.animation = 'line-1 1s forwards'
    line2.style.animation = 'line-2 0.5s forwards'
    line3.style.animation = 'line-3 1s forwards'
    nav.style.animation = 'm-nav-open 0.75s forwards'
    nav.style.display = 'grid'
    document.body.style.overflow = 'hidden'
    navOpen = true
  } else {
    line1.style.animation = 'close-line-1 1s forwards'
    line2.style.animation = 'close-line-2 0.5s forwards'
    line3.style.animation = 'close-line-3 1s forwards'
    nav.style.animation = 'm-nav-close 0.75s forwards'
    document.body.style.overflow = 'visible'
    navOpen = false
  }
}

burger.addEventListener('click', toggleNav)
if(document.body.clientWidth < 1024){
  navlinks.forEach(item => {
      item.addEventListener('click', toggleNav)
  })
}

//Title animations

const title = document.getElementById('title')
let titleLett = 0

function sayHi(){
    const firstSentence = "Hola mundo!"

    if(titleLett < firstSentence.length){
        title.textContent += firstSentence.charAt(titleLett)
        titleLett++
        setTimeout(sayHi, 100)
    }
}

const skillsTitle = document.getElementById('skills-title')
let skLett = 0

function projects(){
    const projectsText = 'Mis proyectos'
    if(proLett <  projectsText.length){
        projectsTitle.textContent += projectsText.charAt(proLett)
        proLett++
        setTimeout(projects, 100)
    }
}

const projectsTitle = document.getElementById('projects-title')
let proLett = 0

function skills(){
  const skillsText = 'Mis habilidades'
  if(skLett < skillsText.length){
        skillsTitle.textContent += skillsText.charAt(skLett)
        skLett++
        setTimeout(skills, 100)
    }
}

const minorSkillsTitle = document.getElementById('minor-skills-title')
const certificationsTitle = document.getElementById('certifications-title')
let skSubTitA = 0
let skSubTitB = 0

function minorSkills(){
  const firstSubTitle = 'Habilidades en pr??ctica'
  
  if(skSubTitA < firstSubTitle.length){
    minorSkillsTitle.textContent += firstSubTitle.charAt(skSubTitA)
    skSubTitA++
    setTimeout(minorSkills, 100)
  }
}
function certifications(){
  const secondSubTitle = 'Certificaciones'
  
  if(skSubTitB < secondSubTitle.length){
    certificationsTitle.textContent += secondSubTitle.charAt(skSubTitB)
    skSubTitB++
    setTimeout(certifications, 100)
  }
}
function typingTexts(){
    sayHi()
}

document.addEventListener('DOMContentLoaded', typingTexts)

//IntersectionObserver for projects & skills sections

const options= {}
const projectSection = document.getElementById('projects')
const skillsSection = document.getElementById('skills');

let projectObserver = new IntersectionObserver(function(breakpoint){
  breakpoint.forEach(entry => {
    if(entry.isIntersecting === true){
      setTimeout(projects, 500)
    }
  })
})
let skillsObserver = new IntersectionObserver(function(breakpoint){
    breakpoint.forEach(entry => {
        if(entry.isIntersecting === true){
            setTimeout(skills, 500)
            setTimeout(minorSkills, 1000)
            setTimeout(certifications, 1500)  
        }
    })
}, options)

projectObserver.observe(projectSection)
skillsObserver.observe(skillsSection)

//Mini-projects carousel

const mPrContainer = document.getElementById('mini-pr-container')
const cards = document.querySelectorAll('.m-project')
const leftArrow = document.getElementById('m-pr-left')
const rightArrow = document.getElementById('m-pr-right')

let i = 0;
let carouselWidth = mPrContainer.clientWidth

rightArrow.addEventListener('click', () => i++)
leftArrow.addEventListener('click', () => i--)

//Slide entre elementos

cards.forEach(() => {
    rightArrow.addEventListener('click', () => {
        slide()
    })
    leftArrow.addEventListener('click', () => {
        slide()
    })
})

function slide() {
    if(i > cards.length - 1) i = 0
    else if (i < 0) i = cards.length - 1
    cards.forEach((card) => {
        card.style.transform = 'translateX(-' + (carouselWidth * i)+ 'px)'
    })
}

slide()

//Slide de im??genes

const imgCarousel = document.getElementById('img-carousel')
const aboutMeImages = document.querySelectorAll('.about-me-img')
let imgCounter = 0
let imgHeight = imgCarousel.clientHeight

function imgSlide(){
    aboutMeImages.forEach((img) => {
    img.style.transform = 'translateY(-' + (imgHeight * imgCounter)+ 'px)'
  })
}

function autoslide(){
  if(imgCounter < aboutMeImages.length - 1) imgCounter++
  else {
    imgCounter = 0
    triggerAutoslide()
  }
  imgSlide()
}

function triggerAutoslide(){
  for (let i = 0; i < aboutMeImages.length; i++){
    setTimeout(autoslide, i * 2000);
  } 
}

triggerAutoslide()

//Contact-bubble

const bubble = document.getElementById('contact-bubble')
const bubbleLogo = document.getElementById('contact-bubble-logo')
const contactContainer = document.getElementById('bubble-contact-list')
let isBubbleOpen = false

bubble.addEventListener('click', () => {
  if(isBubbleOpen === false){
    isBubbleOpen = true
    bubble.style.animation = 'expand-bubble 1s'
    bubble.style.height = '20rem'
    bubble.style.backgroundColor = '#473946'
    contactContainer.style.display = 'flex'
    bubbleLogo.style.display = 'none'
  } else if(isBubbleOpen === true){
    isBubbleOpen = false
    bubble.style.animation = 'burst-bubble 1.5s'
    bubble.style.height = '4rem'
    bubble.style.backgroundColor = '#000'
    contactContainer.style.display = 'none'
    bubbleLogo.style.display = 'block'
  }
})