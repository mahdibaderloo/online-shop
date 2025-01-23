// DOM Elements //

let cartItems = document.querySelector('.cart-items')
let totalPrice = document.querySelector('.total-price')


// Variables //

let language = JSON.parse(localStorage.getItem('language'))
let items = []


// Get Items From Local Storage //

function getLocalItems () {
    let localItems = localStorage.getItem('product')
    return JSON.parse(localItems)
}


// Add Items To Cart //

function addItemsToCart () {
    let localItems = getLocalItems()
    localItems.forEach( item => {
        items.push(item)
        createItem(items)
    });
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
                            <p class="product-count">1</p>
                            <div class="change-count">
                                <span class="count-plus">+</span>
                                <span class="count-minus">-</span>
                            </div>
                        </div>
                        <p class="product-price">${item.price}$</p>
                        <img src="Images/delete-icon.svg" alt="delete icon" class="delete-product">
                    </li>`)
            } else {
                cartItems.insertAdjacentHTML('beforeend' , `
                    <li class="cart-item" dir="rtl">
                        <div class="product-content">
                            <img src="${item.image}" alt="item image" class="product-img">
                            <p class="product-title">${item.persianTitle}</p>
                        </div>
                        <div class="count-box">
                            <p class="product-count">1</p>
                            <div class="change-count">
                                <span class="count-plus">+</span>
                                <span class="count-minus">-</span>
                            </div>
                        </div>
                        <p class="product-price">${(item.price * 80_000).toLocaleString()}</p>
                        <img style="margin-left:5px" src="Images/delete-icon.svg" alt="delete icon" class="delete-product">
                    </li>`)
                }
        }
    })
}


// Total Price //

function changeTotalPrice () {
    let total = 0
    items.forEach (item => {
        total += item.price
    })
    if (!language || language.language == 'English') {
        totalPrice.innerHTML = `${total.toFixed(2)} $`
    } else {
        totalPrice.innerHTML = `${(total * 80_000).toLocaleString()}`
    }
}


// Window //

window.addEventListener('load', () => {
    addItemsToCart()
    changeTotalPrice()
})