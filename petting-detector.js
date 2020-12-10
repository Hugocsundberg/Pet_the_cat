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
    } else if (catIsHappyTimer <= 0 && isGlassesOnCat === false) {
        beingPetted = false
        brow1.classList.add('brow1angry')
        brow2.classList.add('brow2angry')
        tear.classList.remove('wipeEmTears')

        catIsGettingAngryTimerIsActive = false
    }

}

catIsGettingAngryTimer()
