import { products } from "../Scripts/data-base.js";


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
const productsContainer = document.querySelector('.products')
const bestsellers = document.querySelector('.bestsellers-products')


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





// Window //

window.addEventListener('load', () => {
    for (let i = 0 ; i <= 14 ; i ++) {
        let data = products[Math.floor(Math.random() * products.length)]

        if (language.innerHTML == 'English') {
            productsContainer.insertAdjacentHTML('beforeend', `
                <li class="product" id="${data.id}">
                    <p class="product-title">${data.title}</p>
                    <div class="product-img-box">
                        <img src="${data.image}" alt="Product Image" class="product-image">
                    </div>
                    <p class="product-price">${data.price}$</p>
                    <button class="add-to-cart">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
                </li>`)
        }
        else if (language.innerHTML == 'فارسی') {
            productsContainer.insertAdjacentHTML('beforeend', `
                <li class="product" id="${data.id}">
                    <p style="height:30px;" class="product-title">${data.persianTitle}</p>
                    <div class="product-img-box">
                        <img src="${data.image}" alt="Product Image" class="product-image">
                    </div>
                    <p class="product-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button class="add-to-cart">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
                </li>`)
        }
    }

    for (let i = 0 ; i <= 3 ; i ++) {

        let data = products[Math.floor(Math.random() * products.length)]
        if (language.innerHTML == 'English') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p class="bestseller-title">${data.title}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image">
                    </div>
                    <p class="bestseller-price">${data.price}$</p>
                    <button class="add-to-cart bestseller-btn">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
        else if (language.innerHTML == 'فارسی') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p class="bestseller-title">${data.persianTitle}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image">
                    </div>
                    <p class="bestseller-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button class="add-to-cart bestseller-btn">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
    }
})

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