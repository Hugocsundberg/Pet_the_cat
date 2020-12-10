//Vars
const headStartX = face.parentElement.parentElement.offsetLeft
const headStartY = face.parentElement.parentElement.offsetTop
const headEndX = (face.parentElement.parentElement.offsetLeft + face.clientWidth)
const headEndY = (face.parentElement.parentElement.offsetTop + face.clientHeight)
//Gets where target is 'grabbed'
glasses.addEventListener('touchstart', (e) => {
    isGrabbingGlasses = true

    touchCoordinatesX = e.touches[0].clientX
    touchCoordinatesY = e.touches[0].clientY

    distanceToEdgeX = e.currentTarget.offsetLeft
    distanceToEdgeY = e.currentTarget.offsetTop

    grabpositionX = touchCoordinatesX - distanceToEdgeX
    grabpositionY = touchCoordinatesY - distanceToEdgeY
})

//Releases target
glasses.addEventListener('touchend', () => {
    isGrabbingGlasses = false
})

//Moves target to mouse's position
window.addEventListener('touchmove', (e) => {
    if (isGrabbingGlasses) {
        let mousePositionX = e.touches[0].clientX
        let mousePositionY = e.touches[0].clientY
        glasses.style.left = mousePositionX - grabpositionX + 'px'
        glasses.style.top = mousePositionY - grabpositionY + 'px'
        //Detects if glasses are on cats face. 
        if (mousePositionX > headStartX && mousePositionX < headEndX && mousePositionY > headStartY && mousePositionY < headEndY) {   //
            isGlassesOnCat = true
            console.log('ok')
            tear.classList.add('wipeEmTears')
            brow1.classList.remove('brow1angry')
            brow2.classList.remove('brow2angry')

        } else {
            isGlassesOnCat = false
            beingPetted = false
            catIsHappyTimer = setHappyTimer
            catIsGettingAngryTimer()
        }
    }
})

