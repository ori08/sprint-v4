let userSettings = []
function onSetLogin(ev) {
    ev.preventDefault()

    let username = document.querySelector('[name=username]').value
    let password = document.querySelector('[name=password]').value


    userSettings = {
        username: username,
        password: password
    }
    if (userSettings.username && userSettings.password === "admin") {
        alert("Walcome Admin")
        isLogin = true
        displayAdmin()

        closeModal()
        // hideLogin()

        saveToStorage("login datils", userSettings)
        saveToStorage("corrct-login", isLogin)


    }
}


function closeModal() {


    document.querySelector(".login-modal").style.display = "none"

}


function openModal() {


    document.querySelector(".login-modal").style.display = "flex"
}

function closeLogoutModal() {
    document.querySelector(".logout-modal").style.display = "none"
}

function openLogoutModal() {
    document.querySelector(".logout-modal").style.display = "flex"


}


function displayAdmin() {
    if (loadFromStorage("corrct-login")) isLogin = loadFromStorage("corrct-login")
    if (isLogin) document.querySelector(".hidden ").style.display = "inline-block"
}

function hideAdmin() {

    document.querySelector(".hidden ").style.display = "none"

}

function hideLogin() {
    // document.querySelector(".displayLogin").style.display = "none"
    getElementById("login").innerText = "555"
}

function logout() {
    isLogin = false
    userSettings = [];
    saveToStorage("corrct-login", isLogin)
    saveToStorage("login datils", userSettings)
    hideAdmin()
    closeLogoutModal()
    location.reload();

}

function loginFromMenu() {
    document.querySelector("h2").innerText = "Sign In"
    openModal();

}

function setPermission() {
    document.querySelector("h2").innerText = "Only registered mumbers can use Pokemons!! \n But smiling emoji are complety free!! \nTo use pokemons Plaese login bellow \nUsername: admin | Password: admin"
    openModal()
}













// some animation with js listeers and css 

document.getElementById("emoji").addEventListener("click", function () {
    document.getElementsByClassName("sticker-container")[0].classList.add("animate__animated")
    document.getElementsByClassName("sticker-container")[0].classList.add("animate__rubberBand")

    setTimeout(removeEMGeffect, 1000)
    function removeEMGeffect() {
        document.getElementsByClassName("sticker-container")[0].classList.remove("animate__animated")
        document.getElementsByClassName("sticker-container")[0].classList.remove("animate__rubberBand")
    }


})

document.getElementById("pokemon").addEventListener("click", function () {
    document.getElementsByClassName("sticker-container")[0].classList.add("animate__animated")
    document.getElementsByClassName("sticker-container")[0].classList.add("animate__rubberBand")

    setTimeout(removeEMGeffect, 1000)
    function removeEMGeffect() {
        document.getElementsByClassName("sticker-container")[0].classList.remove("animate__animated")
        document.getElementsByClassName("sticker-container")[0].classList.remove("animate__rubberBand")
    }


})





