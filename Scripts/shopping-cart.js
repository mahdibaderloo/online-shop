// DOM Elements //

let cartItems = document.querySelector('.cart-items')



// Get Items From Local Storage //

function getLocalItems () {
    let localItems = localStorage.getItem('product')
    return JSON.parse(localItems)
}


// Create Items //

function createItem () {
    cartItems.insertAdjacentHTML('beforeend' , `
        <li class="cart-item">
            <div class="product-content">
                <img src="Images/photo_2024-11-19_23-52-15.jpg" alt="item image" class="product-img">
                <p class="product-title">Shoes</p>
            </div>
            <div class="count-box">
                <p class="product-count">1</p>
                <div class="change-count">
                    <span class="count-plus">+</span>
                    <span class="count-minus">-</span>
                </div>
            </div>
            <p class="product-price">90$</p>
            <img src="Images/delete-icon.svg" alt="delete icon" class="delete-product">
        </li>`)
}
