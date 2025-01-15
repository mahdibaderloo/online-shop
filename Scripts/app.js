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
const popupBox = document.querySelector('.popup-box')


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


// Show Products //

function showProducts () {

    for (let i = 0 ; i <= 14 ; i ++) {
        let data = products[Math.floor(Math.random() * products.length)]

        if (language.innerHTML == 'English') {
            productsContainer.insertAdjacentHTML('beforeend', `
                <li class="product" id="${data.id}">
                    <p class="product-title">${data.title}</p>
                    <div class="product-img-box">
                        <img src="${data.image}" alt="Product Image" class="product-image" onclick="showPopup(this)">
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
                        <img src="${data.image}" alt="Product Image" class="product-image" onclick="showPopup(${data})">
                    </div>
                    <p class="product-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button class="add-to-cart">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
                </li>`)
        }
    }
    
} 


// Show Bestsellers //

function showBestsellers () {

    for (let i = 0 ; i <= 3 ; i ++) {

        let data = products[Math.floor(Math.random() * products.length)]

        if (language.innerHTML == 'English') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p class="bestseller-title">${data.title}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(${data})">
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
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(${data})">
                    </div>
                    <p class="bestseller-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button class="add-to-cart bestseller-btn">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
    }

} 


// Popup //

function showPopup (product) {

    popupBox.style.opacity = '1'
    popupBox.style.visibility = 'visible'
    popupBox.innerHTML = ''
    let popupContent = `
                <p class="popup-title">${product.parentNode.parentNode.firstElementChild.textContent}</p>
        <div class="popup-image-box">
            <img src="${product.src}" alt="" class="popup-img">
        </div>
        <div class="popup-colors">
            <p class="color-title">Colors : </p>
            <span class="color" id="black"></span>
            <span class="color" id="white"></span>
            <span class="color" id="gray"></span>
            <span class="color" id="blue"></span>
            <span class="color" id="yellow"></span>
            <span class="color" id="red"></span>
        </div>
        <p class="popup-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corporis ab eos laudantium facere enim consequuntur officiis reprehenderit voluptatum, assumenda amet nemo? Temporibus praesentium quas a. Doloribus accusamus ut explicabo sequi, labore officiis harum? Vero nemo nulla praesentium nam.</p>
        <p class="popup-price">${product.parentNode.parentNode.children[2].textContent}</p>
        <button class="popup-btn">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button> `

    popupBox.insertAdjacentHTML('beforeend' , popupContent)
} 

function hidePopup () {
    popupBox.style.opacity = '0'
    popupBox.style.visibility = 'hidden'
}





// Window //

window.addEventListener('load', () => {
    
    showProducts()
    showBestsellers()
})

window.addEventListener('click', event => {
    if (event.target.className != 'category-items' && event.target.className != 'nav-link category') {
        categoryItemsClose()
    }
    if (event.target.id != 'popup' && event.target.className != 'product-image' && event.target.className != 'popup-title' && event.target.className != 'popup-img' && event.target.className != 'popup-box' && event.target.className != 'color-title' && event.target.className != 'popup-colors' && event.target.className != 'color' && event.target.className != 'popup-description' && event.target.className != 'popup-price') {
        hidePopup()
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



window.showPopup = showPopup