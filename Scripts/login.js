// Dom Elements //

const loginTitle = document.querySelector('.login-title')
const switchLink = document.querySelector('.signup-login-switch')
const switchTitle = document.querySelector('.switch')
const loginNow = document.querySelector('.login-now')
const googleLogin = document.querySelector('.google-login-box')
const facebookLogin = document.querySelector('.facebook-login-box')
const usernameInput = document.querySelector('.username-input')
const passwordInput = document.querySelector('.password-input')
const toast = document.querySelector('.toast-box')


// Language //

let language = JSON.parse(localStorage.getItem('language'))


// Set cookie //

function setCookie (username) {
   document.cookie = `username=${username}`
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


// Sign Up //

loginNow.addEventListener('click', () => {
    if (loginNow.textContent === 'Sign Up Now' || loginNow.textContent === 'ثبت نام') {
        let usernameValue = usernameInput.value

        setCookie(usernameValue)
        showToast()
        emptyInput()
    }
})


// Toast //

function showToast () {
    if (!language || language.language == 'English') {
        toast.style.left = '0.5rem'
        toast.style.opacity = '1'
        setTimeout(() => {
            toast.style.left = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    } else {
        toast.style.right = '0.5rem'
        toast.style.opacity = '1'
        setTimeout(() => {
            toast.style.right = '-30rem'
            toast.style.opacity = '0'
        }, 3000)
    }
}

// Empty Input //

function emptyInput () {
    usernameInput.value = ''
    passwordInput.value = ''
}