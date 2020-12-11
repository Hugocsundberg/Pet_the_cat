//Vars
setTimeout(() => {
    headStartX = face.parentElement.parentElement.offsetLeft
    headStartY = face.parentElement.parentElement.offsetTop
    headEndX = (face.parentElement.parentElement.offsetLeft + face.clientWidth)
    headEndY = (face.parentElement.parentElement.offsetTop + face.clientHeight)
}, 1);
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
        if (mousePositionX > headStartX && mousePositionX < headEndX && mousePositionY > headStartY && mousePositionY < headEndY) {   //
            isGlassesOnCat = true
            console.log('ok')
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

