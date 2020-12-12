//Being petted resets happytimer
happyFunc = (e) => {
    if (e.type === 'mousemove' && touchingCat === false) {
        return
    } else {
        beingPetted = true
        tear.classList.add('wipeEmTears')
        brow1.classList.remove('brow1angry')
        brow2.classList.remove('brow2angry')
        catIsHappyTimer = setHappyTimer
        if (catIsGettingAngryTimerIsActive === false) {
            catIsGettingAngryTimer()
        }
    }
}

catContainer.addEventListener('touchmove', happyFunc, { passive: true })
catContainer.addEventListener('mousedown', () => {
    touchingCat = true
}, { passive: true })
catContainer.addEventListener('mouseup', () => {
    touchingCat = false
}, { passive: true })
catContainer.addEventListener('mousemove', happyFunc, { passive: true })

//Makes cat purr
setInterval(() => {
    if (beingPetted) {
        try {
            navigator.vibrate(2000)
        } catch (e) {
            console.info('Device might not support cat purrs (vibration)')
        }
    }
}, 5000);

//If no pet, cat angry
catIsGettingAngryTimer = () => {
    catIsGettingAngryTimerIsActive = true
    if (catIsHappyTimer > 0) {             //
        catIsHappyTimer = catIsHappyTimer - 10
        setTimeout(() => {
            catIsGettingAngryTimer()
        }, 10);
    } else if (catIsHappyTimer <= 0 && isGlassesOnCat === false) { //If timer is out and cat is not wearing glasses, gets angry. 
        beingPetted = false
        brow1.classList.add('brow1angry')
        brow2.classList.add('brow2angry')
        tear.classList.remove('wipeEmTears')
        catIsGettingAngryTimerIsActive = false
    }
}

//Initial start of angry-timer
catIsGettingAngryTimer()
