// Dom Elements //

const loginTitle = document.querySelector('.login-title')
const switchLink = document.querySelector('.signup-login-switch')
const switchButton = document.querySelector('.switch')
const loginNow = document.querySelector('.login-now')


// Set user in local storage //

function setUserInLocalStorage (username, password) {
    user = {
        username : username,
        password : password
    }
    localStorage.setItem('username', JSON.stringify(user))
}


