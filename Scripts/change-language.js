// Language Button Variables //

const languageDisplay = document.querySelector('.language-display')
const languageSelected = document.querySelector('.language-selected')
const languageAngle = document.querySelector('.language-angle')
const languageOptions = document.querySelector('.language-options')
const languageLinks = document.querySelectorAll('.language-link')
const flags = document.querySelectorAll('.flag')
const languageButtons = document.querySelectorAll('.language')


// Change Language With Browser Setting //

// changeBrowserLanguage()

// function changeBrowserLanguage () {
//     let browserLanguage = navigator.language
//     if (browserLanguage === 'fa') {
//         document.location.href = 'app-persian.html'
//     } else {
//         document.location.href = 'index.html'
//     }
// }
//  User's chosen language //

languageDisplay.addEventListener('click', () => {
    
    if (languageOptions.style.opacity == '0') {
        openLanguageBox()
    } else {
        closeLanguageBox()
    }
})


function openLanguageBox () {
    languageAngle.style.transform = 'rotate(180deg)'
    languageOptions.style.opacity = '1'
    languageOptions.style.pointerEvents = 'unset'

    languageDisplay.style.borderBottomRightRadius = '0px'
    languageDisplay.style.borderBottomLeftRadius = '0px'
}


function selectLanguage (data) {
    let select = data
    languageSelected.innerHTML = select

    setInLocalStorage(data)
    changeDOMlanguage(select)
    closeLanguageBox()
}


function closeLanguageBox () {
    languageAngle.style.transform = 'rotate(0deg)'
    languageOptions.style.opacity = '0'
    languageOptions.style.pointerEvents = 'none'

    languageDisplay.style.borderBottomRightRadius = '12px'
    languageDisplay.style.borderBottomLeftRadius = '12px'
}


languageLinks.forEach( item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        selectLanguage(event.target.dataset.language)
    })
})


flags.forEach ( flag => {
    flag.addEventListener('click', event => {
        // event.preventDefault()
        console.log(event.target.dataset.language)
        selectLanguage(event.target.dataset.language)
    })
})


languageButtons.forEach ( flag => {
    flag.addEventListener('click', event => {
        // event.preventDefault()
        console.log(event.target.dataset.language)
        selectLanguage(event.target.dataset.language)
    })
})


// Change DOM Language //

function changeDOMlanguage (data) {
    
    if (data === 'Persian') {
        document.location.href = 'app-persian.html'
    }

    if (data === 'English') {
        document.location.href = 'index.html'
    }

}



// Local Storage //

function setInLocalStorage (data) {
    let localData = {language: data}
    localStorage.setItem('language', JSON.stringify(localData))
}

function getLocalData () {
    let data = localStorage.getItem('language')
    console.log(JSON.parse(data))
}



// Window's events //



window.addEventListener('click', event => {
    if (event.target.className != 'language-display' && event.target.className != 'language-selected' && event.target.id != 'language-angle') {
        closeLanguageBox()
    }
})