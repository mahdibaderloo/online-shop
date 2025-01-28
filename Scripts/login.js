// Dom Elements //

const loginTitle = document.querySelector('.login-title')
const switchLink = document.querySelector('.signup-login-switch')
const switchTitle = document.querySelector('.switch')
const loginNow = document.querySelector('.login-now')
const googleLogin = document.querySelector('.google-login-box')
const facebookLogin = document.querySelector('.facebook-login-box')


// Language //

let language = JSON.parse(localStorage.getItem('language'))


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

    if (!language || language.language == 'English') {
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
    } else {
        if (loginTitle.textContent === 'ورود') {
            loginTitle.innerHTML = 'ثبت نام'
            loginNow.innerHTML = 'ثبت نام'
            switchTitle.innerHTML = ''
            switchTitle.insertAdjacentHTML('afterbegin', `<p class="switch"> حساب داری؟ <a href="" class="colorless signup-login-switch">ورود</a></p>
`)
            googleLogin.style.display = 'none'
            facebookLogin.style.display = 'none'
        } else {
            loginTitle.innerHTML = 'ورود'
            loginNow.innerHTML = 'ورود'
            switchTitle.innerHTML = ''
            switchTitle.insertAdjacentHTML('afterbegin', `<p class="switch">یه حساب جدید میخوای؟ <a href="" class="colorless signup-login-switch">ثبت نام</a></p>
`)
            googleLogin.style.display = 'flex'
            facebookLogin.style.display = 'flex'
        }
    }
})