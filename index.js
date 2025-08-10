const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

function createPassword() {
    let tempPassword = ""
    for (let i = 0; i < 15; i++) {
        let charIndex = Math.floor(Math.random() * characters.length)
        let randCharacter = characters[charIndex]
        tempPassword += randCharacter
    }
    console.log(tempPassword)
    return tempPassword
}


function generatePasswords() {
    console.log("Generating passwords...")
    password1 = createPassword()
    password2 = createPassword()
    password1El.textContent = password1
    password2El.textContent = password2
}

