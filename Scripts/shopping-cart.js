// DOM Elements //

let cartItems = document.querySelector('.cart-items')



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
    cartItems.insertAdjacentHTML('beforeend' , `
        <li class="cart-item">
            <div class="product-content">
                <img src="${item.image}" alt="item image" class="product-img">
                <p class="product-title">${item.title}</p>
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
}




// Window //

window.addEventListener('load', () => {
    addItemsToCart()
})