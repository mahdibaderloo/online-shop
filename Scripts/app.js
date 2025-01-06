// DOM Elements //

const categoryBtn = document.querySelector('.category')
const categoryItems = document.querySelector('.category-items')
const categoryAngle = document.querySelector('.category-angle')
const burgerMenu = document.querySelector('.burger-menu')
const closeNav = document.querySelector('.close-nav')
const mobileNavbarBox = document.querySelector('.mobile-navbar-box')
const mobileNavbar = document.querySelector('.mobile-navbar')
const mobileNavbarPersian = document.querySelector('.mobile-navbar-persian')
const upBtn = document.querySelector('.up-button-box')
const language = document.querySelector('.language-selected')


// Category //

function categoryItemsOpen () {
    categoryItems.style.opacity = '1'
    categoryItems.style.pointerEvents = 'unset'
    categoryAngle.style.transform = 'rotate(180deg)'
}

function categoryItemsClose () {
    categoryItems.style.opacity = '0'
    categoryItems.style.pointerEvents = 'none'
    categoryAngle.style.transform = 'rotate(0deg)'
}

categoryBtn.addEventListener('click', event => {
    event.preventDefault()
    
    if (categoryItems.style.opacity === '0') {
        categoryItemsOpen()
    } else {
        categoryItemsClose()
    }
})


// Mobile Navbar //

burgerMenu.addEventListener('click', () => {
    if (language.innerHTML == 'فارسی') {
        mobileNavbarPersian.style.right = '0'
    }
    else {
        mobileNavbar.style.left = '0'
    }

})

closeNav.addEventListener('click', () => {
    if (language.innerHTML == 'فارسی') {
        mobileNavbarPersian.style.right = '-95%'
    }
    else {
        mobileNavbar.style.left = '-81%'
    }

})


// Up Button //

upBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})


// fetch('https://api.escuelajs.co/api/v1/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))




// Window //

window.addEventListener('click', event => {
    if (event.target.className != 'category-items' && event.target.className != 'nav-link category') {
        categoryItemsClose()
    }
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY >= 295) {
        mobileNavbarBox.style.position = 'fixed'
        upBtn.style.bottom = '2rem'
    } else {
        mobileNavbarBox.style.position = 'unset'
        upBtn.style.bottom = '-3rem'
    }

})