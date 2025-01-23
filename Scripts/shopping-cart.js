// DOM Elements //

let cartItems = document.querySelector('.cart-items')


// Variables //

let language = JSON.parse(localStorage.getItem('language'))


// Get Items From Local Storage //

function getLocalItems () {
    let localItems = localStorage.getItem('product')
    return JSON.parse(localItems)
}


// Add Items To Cart //

function addItemsToCart () {
    cartItems.innerHTML = ''
    let localItems = getLocalItems()
    localItems.forEach( item => {
        createItem(item)
    });
}


// Create Items //

function createItem (item) {
    if (item.title !== undefined) {
        if (language.language == 'English' || language === null  || language === undefined) {
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
                <li class="cart-item">
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
                    <img src="Images/delete-icon.svg" alt="delete icon" class="delete-product">
                </li>`)
            }
    }
}




// Window //

window.addEventListener('load', () => {
    addItemsToCart()
})