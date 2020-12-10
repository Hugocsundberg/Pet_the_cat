//DOM vars
const catContainer = document.querySelector('.catContainer')
const mobileLog = document.querySelector('.mobileLog')
const brow1 = document.querySelector('.brow1')
const brow2 = document.querySelector('.brow2')
const tear = document.querySelector('.tear')
const head = document.querySelector('.head')

//Settings
const setHappyTimer = 1500

//Global vars
let beingPetted = false
let catIsHappyTimer = setHappyTimer
let catIsGettingAngryTimerIsActive = false


//Being petted resets happytimer
catContainer.addEventListener('touchmove', () => {
    beingPetted = true
    tear.classList.add('wipeEmTears')
    brow1.classList.remove('brow1angry')
    brow2.classList.remove('brow2angry')
    catIsHappyTimer = setHappyTimer
    if (catIsGettingAngryTimerIsActive === false) {
        catIsGettingAngryTimer()
    }
})

//If no pet, cat angry
catIsGettingAngryTimer = () => {
    catIsGettingAngryTimerIsActive = true
    if (catIsHappyTimer > 0) {             //
        catIsHappyTimer = catIsHappyTimer - 10
        setTimeout(() => {
            catIsGettingAngryTimer()
        }, 10);
    } else if (catIsHappyTimer <= 0) {
        beingPetted = false
        brow1.classList.add('brow1angry')
        brow2.classList.add('brow2angry')
        tear.classList.remove('wipeEmTears')

        catIsGettingAngryTimerIsActive = false
    }

}

catIsGettingAngryTimer()
