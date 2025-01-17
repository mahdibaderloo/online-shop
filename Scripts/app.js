import { products } from "../Scripts/data-base.js";


// DOM Elements //

const categoryBtn = document.querySelector('.category')
const categoryItems = document.querySelector('.category-items')
const categoryAngle = document.querySelector('.category-angle')
const categoryLinks = document.querySelectorAll('.category-link')
const burgerMenu = document.querySelector('.burger-menu')
const closeNav = document.querySelector('.close-nav')
const mobileNavbarBox = document.querySelector('.mobile-navbar-box')
const mobileNavbar = document.querySelector('.mobile-navbar')
const mobileNavbarPersian = document.querySelector('.mobile-navbar-persian')
const upBtn = document.querySelector('.up-button-box')
const language = document.querySelector('.language-selected')
const productsContainer = document.querySelector('.products')
const showMore = document.querySelector('.show-more')
const categoryImages = document.querySelectorAll('.category-img')
const categoryTitles = document.querySelectorAll('.category-title')
const bestsellers = document.querySelector('.bestsellers-products')
const popupBox = document.querySelector('.popup-box')
const popupTitle = document.querySelector('.popup-title')
const popupImg = document.querySelector('.popup-img')
const popupPrice = document.querySelector('.popup-price')
const colors = document.querySelector('.popup-colors')


// Category (Navbar) //

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
    
    productsContainer.innerHTML = ''
    for (let i = 0 ; i <= 14 ; i ++) {
        let data = products[Math.floor(Math.random() * products.length)]
        
        getProducts(data)
        showMore.style.visibility = 'visible'
    }
    
} 


// Get Products //

function getProducts (data) {
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
                <p style="height:30px; font-weight:bold;" class="product-title">${data.persianTitle}</p>
                <div class="product-img-box">
                    <img src="${data.image}" alt="Product Image" class="product-image" onclick="showPopup(this)">
                </div>
                <p style=" font-size: 18px" class="product-price">${(data.price * 80000).toLocaleString()} تومان</p>
                <button style="font-family: 'Segoe UI'; font-weight:bold; letter-spacing:0px; font-size: 14px" class="add-to-cart">افزودن به سبد خرید <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
            </li>`)
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
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(this)">
                    </div>
                    <p class="bestseller-price">${data.price}$</p>
                    <button class="add-to-cart bestseller-btn">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
        else if (language.innerHTML == 'فارسی') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p style="font-family: 'Segoe UI'; font-weight:bold;" class="bestseller-title">${data.persianTitle}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(this)">
                    </div>
                    <p class="bestseller-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button style="font-family: 'Segoe UI'; font-weight:bold; letter-spacing:0px; font-size: 14px" class="add-to-cart bestseller-btn">افزودن به سبد خرید <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
    }

} 


// Popup //

function showPopup (product) {

    popupBox.style.opacity = '1'
    popupBox.style.visibility = 'visible'

    if (language.innerHTML == 'English') {
        popupTitle.innerHTML = product.parentNode.parentNode.firstElementChild.textContent
        popupImg.src = product.src
        popupPrice.innerHTML = product.parentNode.parentNode.children[2].textContent
    } else {
        popupTitle.innerHTML = product.parentNode.parentNode.firstElementChild.textContent
        popupImg.src = product.src
        popupPrice.innerHTML = product.parentNode.parentNode.children[2].textContent
    }

} 

function hidePopup () {
    popupBox.style.opacity = '0'
    popupBox.style.visibility = 'hidden'
}


// Select Colors //

let colorElements = colors.querySelectorAll('.color')

colorElements.forEach (color => {
    color.addEventListener('click', event => {
        deselectColor()

        if (color.className != 'color selected') {
            color.classList.add('selected')
        }
    })
})

function deselectColor () {
    for (let item of colorElements) {
        item.classList.remove('selected')
    }
}


// Show Category Products //

categoryLinks.forEach (category => {
    category.addEventListener('click', event => {
        event.preventDefault()
        showCategoryProducts(event.target.dataset.category)
    })
})

categoryImages.forEach (category => {
    category.addEventListener('click', event => {
        showCategoryProducts(event.target.dataset.category)
    })
})

categoryTitles.forEach (category => {
    category.addEventListener('click', event => {
        showCategoryProducts(event.target.dataset.category)
    })
})

function showCategoryProducts (data) {
    productsContainer.innerHTML = ''
    showMore.style.visibility = 'hidden'
    window.scrollTo(250, 250)

    switch (data) {
        case 'men':
            products.forEach (product => {
                if (product.category === 'men') {
                    getProducts(product)
                }
            })
            break;

        case 'women':
            products.forEach (product => {
                if (product.category === 'women') {
                    getProducts(product)
                }
            })
            break;

        case 'kids':
            products.forEach (product => {
                if (product.category === 'kids') {
                    getProducts(product)
                }
            })
            break;

        case 'shoes':
            products.forEach (product => {
                if (product.category === 'shoes') {
                    getProducts(product)
                }
            })
            break;

        case 'accessory':
            products.forEach (product => {
                if (product.category === 'accessory') {
                    getProducts(product)
                }
            })
            break;

        case 'hat':
            products.forEach (product => {
                if (product.category === 'hat') {
                    getProducts(product)
                }
            })
            break;

        case 'glasses':
            products.forEach (product => {
                if (product.category === 'glasses') {
                    getProducts(product)
                }
            })
            break;

        default: alert('An error occurred !!! \n یه اتفاقی افتاده !!!')
            break;
    }
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
    if (event.target.id != 'popup' && event.target.className != 'product-image' && event.target.className != 'popup-title' && event.target.className != 'popup-img' && event.target.className != 'popup-box' && event.target.className != 'color-title' && event.target.className != 'popup-colors' && event.target.className != 'color' && event.target.className != 'popup-description' && event.target.className != 'popup-price' && event.target.className != 'color selected') {
        hidePopup()
        deselectColor()
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
window.deselectColor = deselectColor