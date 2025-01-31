import { products } from "../Scripts/data-base.js";


// DOM Elements //

const loginTitle = document.querySelector('.login-link')
const searchInput = document.querySelector('.search-input')
const searchResults = document.querySelector('.search-results')
const searchSubmit = document.querySelector('.search-submit')
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
const popupBtn = document.querySelector('.popup-btn')
const colors = document.querySelector('.popup-colors')
const toast = document.querySelector('.toast-box')
const toastTitle = document.querySelector('.toast-title')


// Variables 

let items = []
let randomProduct = []
let NumberOfProducts = 20


// Search //

searchInput.addEventListener('keyup', () => {
    let searchValue = searchInput.value
    if (searchValue) {
        searchResults.style.display = 'flex'

        let filteredWords = []
        if (language.innerHTML === 'English') {
            filteredWords = randomProduct.filter ( product => { 
                return product.title.toLowerCase().startsWith(searchValue) 
            })
        } else {
            filteredWords = randomProduct.filter ( product => { 
                return product.persianTitle.toLowerCase().startsWith(searchValue) 
            })
        }
        suggestionWordsGenerator(filteredWords)

    } else {
        searchResults.style.display = 'none'
        searchResults.innerHTML = ''
    }
})


// suggestion Words Generator //

function suggestionWordsGenerator (words) {
    let wordsArray = []
    if (language.innerHTML === 'English') {
        wordsArray = words.map( word => {
            return `<li class="search-result" onclick="selectResult(this)">${word.title.replace(',', "'")}</li>`
        })
    } else {
        wordsArray = words.map( word => {
            return `<li class="search-result" onclick="selectResult(this)">${word.persianTitle}</li>`
        })
    }


    let customWord = null

    if (wordsArray.length === 0) {
        searchResults.innerHTML = ''
        customWord = `<li class="search-result" onclick="selectResult(this)">${searchInput.value}</li>`
    } else {
        customWord = wordsArray.join('')
    }
    searchResults.innerHTML = customWord
}


// Select Search Result //

function selectResult (el) {
    searchInput.value = el.textContent
    searchResults.textContent = ''
    searchResults.style.display = 'none'
}


// Search Submit //

searchSubmit.addEventListener('click', () => {
    let inputValue = searchInput.value
    let filterProducts = randomProduct.filter ( product => {
        return product.title === inputValue.replace("'", ',')
    })
    filterProducts.forEach (products => {
        productsContainer.innerHTML = ''
        window.scrollTo(250, 250)
        getProducts(products)
        showMore.innerHTML = 'get all products'
    })
})


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
    bestsellers.innerHTML = ''

    let i = products.length
    let index = 0

    while (i--) {
        index = Math.floor(Math.random() * (i+1));
        randomProduct.push(products[index]);
        products.splice(index,1);
    }

    if (NumberOfProducts === 70) {
        showMore.style.display = 'none'
    }

    for (let i = 0; i < NumberOfProducts; i++) {
        let data = randomProduct[i]
        getProducts(data)
    }
    getBestsellers(randomProduct)
    showMore.style.visibility = 'visible'
    
} 


// Get Products //

function getProducts (data) {
    if (language.innerHTML == 'English') {
        productsContainer.insertAdjacentHTML('beforeend', `
            <li class="product" id="${data.id}">
                <p class="product-title">${data.title.replace(",", "'")}</p>
                <div class="product-img-box">
                    <img src="${data.image}" alt="Product Image" class="product-image" onclick="showPopup(this, ${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price})">
                </div>
                <p class="product-price">${data.price}$</p>
                <button class="add-to-cart" onclick="addToItems(${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price}), showToast('${data.title}')">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
            </li>`)
    }
    else if (language.innerHTML == 'فارسی') {
        productsContainer.insertAdjacentHTML('beforeend', `
            <li class="product" id="${data.id}">
                <p style="height:30px; font-weight:bold;" class="product-title">${data.persianTitle}</p>
                <div class="product-img-box">
                    <img src="${data.image}" alt="Product Image" class="product-image" onclick="showPopup(this, ${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price})">
                </div>
                <p style=" font-size: 18px" class="product-price">${(data.price * 80000).toLocaleString()} تومان</p>
                <button style="font-family: 'Segoe UI'; font-weight:bold; letter-spacing:0px; font-size: 14px" class="add-to-cart" onclick="addToItems(${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price}), showToast('${data.persianTitle}')">افزودن به سبد خرید <i class="add-cart-logo fa fa-shopping-cart"></i></button>                    
            </li>`)
    }
}


// Get Bestsellers Products

function getBestsellers (items) {
    for (let i = 0; i < 4; i++) {
        let data = items[i]
        if (language.innerHTML == 'English') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p class="bestseller-title">${data.title.replace(',', `'`)}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(this, ${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price})">
                    </div>
                    <p class="bestseller-price">${data.price}$</p>
                    <button class="add-to-cart bestseller-btn" onclick="addToItems(${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price}), showToast('${data.title}')">Add to cart <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
        else if (language.innerHTML == 'فارسی') {
            bestsellers.insertAdjacentHTML('beforeend', `
                <li class="bestseller-product" id="${data.id}">
                    <p style="font-family: 'Segoe UI'; font-weight:bold;" class="bestseller-title">${data.persianTitle}</p>
                    <div class="bestseller-image-box">
                        <img src="${data.image}" alt="Product Image" class="bestseller-image" onclick="showPopup(this, ${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price})">
                    </div>
                    <p class="bestseller-price">${(data.price * 80000).toLocaleString()} تومان</p>
                    <button style="font-family: 'Segoe UI'; font-weight:bold; letter-spacing:0px; font-size: 14px" class="add-to-cart bestseller-btn" onclick="addToItems(${data.id}, '${data.title}', '${data.persianTitle}', '${data.image}', ${data.price}), showToast('${data.persianTitle}')">افزودن به سبد خرید <i class="add-cart-logo fa fa-shopping-cart"></i></button>              
                </li>`)
        }
    }

}


// Show More // 

showMore.addEventListener ('click', () => {
    if (language.textContent === 'English') {
        showMore.innerHTML = 'show more...'
    } else {
        showMore.innerHTML = 'بیشتر...'
    }

    if (NumberOfProducts === 70) {
        showMore.style.display = 'none'
    }
    else {
        NumberOfProducts += 10
        showProducts()
        showMore.style.display = 'block'
        productsContainer.style.marginBottom = '0rem';
    }

    searchInput.value = ''
})


// Add To Items Array

function addToItems (id, title, persianTitle, image, price) {
    let obj = {
        id : id,
        title : title,
        persianTitle : persianTitle,
        image : image,
        price : price,
        count : 1
    }
    if (getLocalStorageItems()) {
        let localItems = getLocalStorageItems()
        items = []
        localItems.forEach( product => {
            items.push(product)
        })
    }
    if (!items.find (item => item.id === id)) {
        items.push(obj)
        setItemInLocalStorage(items)
    }
}


// Local Storage

function setItemInLocalStorage (data) {
    localStorage.setItem('product', JSON.stringify(data))
}

function getLocalStorageItems () {
    return JSON.parse(localStorage.getItem('product'))
}


// Popup //

function showPopup (product, id, title, persianTitle, image, price) {

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
    
    popupBtn.addEventListener('click', () => {
        addToItems(id, title, persianTitle, image, price)
        if (language.innerHTML === 'English') {
            showToast(title)
        } else {
            showToast(persianTitle)
        }
    })
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
    showMore.innerHTML = 'get all products'
    window.scrollTo(250, 250)

    switch (data) {
        case 'men':
            randomProduct.forEach (product => {
                if (product.category === 'men') {
                    getProducts(product)
                }
            })
            break;

        case 'women':
            randomProduct.forEach (product => {
                if (product.category === 'women') {
                    getProducts(product)
                }
            })
            break;

        case 'kids':
            randomProduct.forEach (product => {
                if (product.category === 'kids') {
                    getProducts(product)
                }
            })
            break;

        case 'shoes':
            randomProduct.forEach (product => {
                if (product.category === 'shoes') {
                    getProducts(product)
                }
            })
            break;

        case 'accessory':
            randomProduct.forEach (product => {
                if (product.category === 'accessory') {
                    getProducts(product)
                }
            })
            break;

        case 'hat':
            randomProduct.forEach (product => {
                if (product.category === 'hat') {
                    getProducts(product)
                }
            })
            break;

        case 'glasses':
            randomProduct.forEach (product => {
                if (product.category === 'glasses') {
                    getProducts(product)
                }
            })
            break;

        default: alert('An error occurred !!! \n یه اتفاقی افتاده !!!')
            break;
    }
}


// Toast //

function showToast (title) {
    if (language.innerHTML == 'English') {
        toast.style.left = '0.5rem'
        toast.style.opacity = '1'
        toastTitle.innerHTML = `${title.replace(',', "'")} added to cart`
        setTimeout(() => {
            toast.style.left = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    } else {
        toast.style.right = '0.5rem'
        toast.style.opacity = '1'
        toastTitle.innerHTML = `${title} به سبد خرید اضافه شد`
        setTimeout(() => {
            toast.style.right = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    }
}


// Login Title //

function loginCheck () {
    let username = document.cookie
    if (username) {
    loginTitle.innerHTML = username.slice(9)
    }
}



// Window //

window.addEventListener('load', () => {
    loginCheck()
    showProducts()
})

window.addEventListener('click', event => {
    if (event.target.className != 'category-items' && event.target.className != 'nav-link category') {
        categoryItemsClose()
    }
    if (event.target.id != 'popup' && event.target.className != 'product-image' && event.target.className != 'popup-title' && event.target.className != 'popup-img' && event.target.className != 'popup-box' && event.target.className != 'color-title' && event.target.className != 'popup-colors' && event.target.className != 'color' && event.target.className != 'popup-description' && event.target.className != 'popup-price' && event.target.className != 'color selected' && event.target.className != 'bestseller-image') {
        hidePopup()
        deselectColor()
    }
    if (NumberOfProducts === 70) {
        showMore.style.display = 'none'
        productsContainer.style.marginBottom = '2rem';
    }
})

window.addEventListener('scroll', () => {
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
window.addToItems = addToItems
window.showToast = showToast
window.selectResult = selectResult