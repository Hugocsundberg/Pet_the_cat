//DOM vars
const glasses = document.querySelector('.glasses')

//Global vars
let grabpositionX = 0
let grabpositionY = 0
isGrabbingGlasses = false

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
        glasses.style.left = e.touches[0].clientX - grabpositionX + 'px'
        glasses.style.top = e.touches[0].clientY - grabpositionY + 'px'
        console.log(e.touches[0].clientX - grabpositionX)
    }
})