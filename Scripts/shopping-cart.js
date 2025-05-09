// DOM Elements //

const cartItems = document.querySelector('.cart-items')
const totalPrice = document.querySelector('.total-price')
const empty = document.querySelector('.empty')
const toast = document.querySelector('.toast-box')
const toastTitle = document.querySelector('.toast-title')


// Variables //

let language = JSON.parse(localStorage.getItem('language'))
let items = []


// Get Items From Local Storage //

function getLocalItems () {
    let localItems = localStorage.getItem('product')
    return JSON.parse(localItems)
}

// Set Items from Local Storage //

function setItemInLocalStorage (items) {
    localStorage.setItem('product', JSON.stringify(items))
}


// Clear Product Item From Local Storage //

function clearProductFromLocalStorage () {
    localStorage.removeItem('product')
}


// Add Items To Cart //

function addItemsToCart () {
    let localItems = getLocalItems()
    localItems.forEach( item => {
        items.push(item)
        createItem(items)
    });
    emptyDisplay()
}


// Create Items //

function createItem (items) {
    cartItems.innerHTML = ''
    items.forEach (item => {

        if (item.title !== undefined) {
            if (!language || language.language == 'English') {
                cartItems.insertAdjacentHTML('beforeend' , `
                    <li class="cart-item">
                        <div class="product-content">
                            <img src="${item.image}" alt="item image" class="product-img">
                            <p class="product-title">${item.title.replace(",", "'")}</p>
                        </div>
                        <div class="count-box">
                            <p class="product-count">${item.count}</p>
                            <div class="change-count">
                                <span class="count-plus" onclick="changeProductCount(this, ${item.id}, ${item.price})">+</span>
                                <span class="count-minus" onclick="changeProductCount(this, ${item.id}, ${item.price})">-</span>
                            </div>
                        </div>
                        <p class="product-price">${(item.price * item.count).toFixed(2)}<span>$</span></p>
                        <img src="Images/delete-icon.svg" alt="delete icon" class="delete-product" onclick="removeProduct(${item.id})">
                    </li>`)
            } else {
                cartItems.insertAdjacentHTML('beforeend' , `
                    <li class="cart-item" dir="rtl">
                        <div class="product-content">
                            <img src="${item.image}" alt="item image" class="product-img">
                            <p style="font-weight: bold;" class="product-title">${item.persianTitle}</p>
                        </div>
                        <div class="count-box">
                            <p style="font-weight: bold;" class="product-count">${item.count}</p>
                            <div class="change-count">
                                <span style="font-weight: bold;" class="count-plus" onclick="changeProductCount(this, ${item.id}, ${item.price})">+</span>
                                <span style="font-weight: bold;" class="count-minus" onclick="changeProductCount(this, ${item.id}, ${item.price})">-</span>
                            </div>
                        </div>
                        <p style="font-weight: bold;" class="product-price">${((item.price * item.count) * 80_000).toLocaleString()}</p>
                        <img style="margin-left:5px" src="Images/delete-icon.svg" alt="delete icon" class="delete-product" onclick="removeProduct(${item.id})">
                    </li>`)
                }
        }
    })
}


// Remove Item //

function removeProduct (id) {
    let index = 0
    let title = ''
    let persianTitle = ''
    items.forEach (item => {
        if (item.id === id) {
            index = items.indexOf(item)
            title = item.title
            persianTitle = item.persianTitle
        }
    })
    items.splice(index, 1)
    showToast(title, persianTitle)

    clearProductFromLocalStorage()
    setItemInLocalStorage(items)

    items = []
    if (!language || language.language == 'English') {
        cartItems.innerHTML = `<p class="empty">Shopping cart is empty :(</p>`
    } else {
        cartItems.innerHTML = `<p style="font-weight: bold;" class="empty">سبد خرید خالی است :(</p>`
    }

    addItemsToCart()
    changeTotalPrice()
}


// change Product Count //

function changeProductCount (el, id, price) {
    let elementCount = el.parentElement.parentElement.children[0]
    let elementPrice = el.parentElement.parentElement.parentElement.children[2]

    items.forEach (item => {
        if (item.id === id) {

            if (el.textContent === '+' && item.count < 5) {
                item.count++
            } 
            else if (el.textContent === '-' && item.count > 0) {
                item.count--
                if (item.count === 0) {
                    removeProduct(id)
                }
            }

            if (!language || language.language == 'English') {
                elementCount.innerHTML = item.count
                elementPrice.innerHTML = `${(price * item.count).toFixed(2)}$` 
            } else {
                elementCount.innerHTML = item.count
                elementPrice.innerHTML = `${((price * item.count) * 80_000).toLocaleString()}` 
            }
        }
    })
    clearProductFromLocalStorage()
    setItemInLocalStorage(items)
    changeTotalPrice()
}


// Total Price //

function changeTotalPrice () {
    let total = 0
    let prices = document.querySelectorAll('.product-price')
    prices.forEach (item => {
        if (!language || language.language == 'English') {
            total += Number(item.textContent.slice(0, -1))
            totalPrice.innerHTML = `${total.toFixed(2)} $`
        } else {
            total += Number(item.textContent.replaceAll(',',''))
            totalPrice.innerHTML = `${(total).toLocaleString()}`
        }
    })
    if (total === 0) {
        totalPrice.innerHTML = total
    }
    emptyDisplay()
}


// Empty Display //

function emptyDisplay () {
    let localItems = getLocalItems()
    if (localItems.length === 0) {
        empty.style.display = 'flex'
    } else {
        empty.style.display = 'none'
    }
}


// Toast //

function showToast (title, persianTitle) {
    if (!language || language.language == 'English') {
        toast.style.left = '0.5rem'
        toast.style.opacity = '1'
        toastTitle.innerHTML = `${title.replace(',', "'")} removed from cart`
        setTimeout(() => {
            toast.style.left = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    } else {
        toast.style.right = '0.5rem'
        toast.style.opacity = '1'
        toastTitle.innerHTML = `${persianTitle} از سبد خرید حذف شد`
        setTimeout(() => {
            toast.style.right = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    }
}


// Window //

window.addEventListener('load', () => {
    addItemsToCart()
    changeTotalPrice()
    emptyDisplay()
})