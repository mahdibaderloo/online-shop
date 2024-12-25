// DOM Elements //

const categoryBtn = document.querySelector('.category')
const categoryItems = document.querySelector('.category-items')
const categoryAngle = document.querySelector('.category-angle')
const burgerMenu = document.querySelector('.burger-menu')
const closeNav = document.querySelector('.close-nav')
const mobileNavbarBox = document.querySelector('.mobile-navbar-box')
const mobileNavbar = document.querySelector('.mobile-navbar')
const upBtn = document.querySelector('.up-button-box')


// Category //

function categoryItemsOpen () {
    categoryItems.style.opacity = '1'
    categoryAngle.style.transform = 'rotate(180deg)'
}

function categoryItemsClose () {
    categoryItems.style.opacity = '0'
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
    mobileNavbar.style.left = '0'
})

closeNav.addEventListener('click', () => {
    mobileNavbar.style.left = '-81%'
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
        upBtn.style.bottom = '1rem'
    } else {
        mobileNavbarBox.style.position = 'unset'
        upBtn.style.bottom = '-3rem'
    }

})