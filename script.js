const catContainer = document.querySelector('.catContainer')
const mobileLog = document.querySelector('.mobileLog')

const eventCount = 0
catContainer.addEventListener('touchmove', () => {
    eventCount++
    mobileLog.textContent = eventCount;
})