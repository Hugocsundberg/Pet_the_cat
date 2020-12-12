//Vars
const setHeadDimentions = () => {
    headStartX = face.parentElement.parentElement.offsetLeft + (face.parentElement.parentElement.clientHeight / 4.5)
    headStartY = face.parentElement.parentElement.offsetTop + (face.parentElement.parentElement.clientHeight / 2.5)
    headEndX = (face.parentElement.parentElement.offsetLeft + (face.clientWidth * 0.8))
    headEndY = (face.parentElement.parentElement.offsetTop + (face.clientHeight * 0.95))
}

setTimeout(setHeadDimentions, 1);
window.addEventListener('resize', setHeadDimentions)
//Gets where target is 'grabbed'
const grabPositionTouch = (e) => {
    isGrabbingGlasses = true

    touchCoordinatesX = e.touches[0].clientX
    touchCoordinatesY = e.touches[0].clientY

    distanceToEdgeX = e.currentTarget.offsetLeft
    distanceToEdgeY = e.currentTarget.offsetTop

    grabpositionX = touchCoordinatesX - distanceToEdgeX
    grabpositionY = touchCoordinatesY - distanceToEdgeY
}

const grabPositionMouse = (e) => {
    isGrabbingGlasses = true

    touchCoordinatesX = e.x
    touchCoordinatesY = e.y

    distanceToEdgeX = e.currentTarget.offsetLeft
    distanceToEdgeY = e.currentTarget.offsetTop

    grabpositionX = touchCoordinatesX - distanceToEdgeX
    grabpositionY = touchCoordinatesY - distanceToEdgeY
}

glasses.addEventListener('touchstart', grabPositionTouch, { passive: true })
glasses.addEventListener('mousedown', grabPositionMouse, { passive: true })

//Releases target
glasses.addEventListener('touchend', () => {
    isGrabbingGlasses = false
})
glasses.addEventListener('mouseup', () => {
    isGrabbingGlasses = false
})

//Moves target to mouse's position
const inputTracker = (e) => {
    const glassesCenterX = glasses.offsetLeft
    const glassesCenterY = glasses.offsetTop + (glasses.children[0].children[0].clientHeight / 2)
    console.log(glassesCenterX, glassesCenterY)
    if (isGrabbingGlasses) {
        if (e.type === 'mousemove') {
            mousePositionX = e.x
            mousePositionY = e.y
        } else if (e.type === 'touchmove') {
            mousePositionX = e.touches[0].clientX
            mousePositionY = e.touches[0].clientY
        }
        glasses.style.left = mousePositionX - grabpositionX + 'px'
        glasses.style.top = mousePositionY - grabpositionY + 'px'
        //Detects if glasses are on cats face. 
        if (glassesCenterX > headStartX && glassesCenterX < headEndX && glassesCenterY > headStartY && glassesCenterY < headEndY) {   //
            isGlassesOnCat = true
            tear.classList.add('wipeEmTears')
            brow1.classList.remove('brow1angry')
            brow2.classList.remove('brow2angry')
            document.body.classList.add('background')

        } else {
            isGlassesOnCat = false
            beingPetted = false
            catIsHappyTimer = setHappyTimer
            catIsGettingAngryTimer()
            document.body.classList.remove('background')
        }
    }
}

window.addEventListener('touchmove', inputTracker, { passive: true })
window.addEventListener('mousemove', inputTracker, { passive: true })

