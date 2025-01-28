// Dom Elements //

const loginTitle = document.querySelector('.login-title')
const switchLink = document.querySelector('.signup-login-switch')
const switchTitle = document.querySelector('.switch')
const loginNow = document.querySelector('.login-now')
const googleLogin = document.querySelector('.google-login-box')
const facebookLogin = document.querySelector('.facebook-login-box')


// Set user in local storage //

function setUserInLocalStorage (username, password) {
    user = {
        username : username,
        password : password
    }
    localStorage.setItem('username', JSON.stringify(user))
}


// switch //

switchLink.addEventListener('click', event => {
    event.preventDefault()
    if (loginTitle.textContent === 'LOGIN') {
        loginTitle.innerHTML = 'SIGN UP'
        loginNow.innerHTML = 'Sign Up Now'
        switchTitle.innerHTML = ''
        switchTitle.insertAdjacentHTML('afterbegin', `<p class="switch">You have an account? <a href="" class="colorless signup-login-switch">Login</a></p>`)
        googleLogin.style.display = 'none'
        facebookLogin.style.display = 'none'
    } else {
        loginTitle.innerHTML = 'LOGIN'
        loginNow.innerHTML = 'Login Now'
        switchTitle.innerHTML = ''
        switchTitle.insertAdjacentHTML('afterbegin', `<p class="switch">Need an account? <a href="" class="colorless signup-login-switch">Sign Up</a></p>`)
        googleLogin.style.display = 'flex'
        facebookLogin.style.display = 'flex'
    }
})