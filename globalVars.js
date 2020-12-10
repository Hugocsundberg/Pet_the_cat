//Settings
const setHappyTimer = 1500

//DOM vars
const glasses = document.querySelector('.glasses')
const face = document.querySelector('.face')

const catContainer = document.querySelector('.catContainer')
const mobileLog = document.querySelector('.mobileLog')
const brow1 = document.querySelector('.brow1')
const brow2 = document.querySelector('.brow2')
const tear = document.querySelector('.tear')
const head = document.querySelector('.head')

//Global vars
let grabpositionX = 0
let grabpositionY = 0
let isGrabbingGlasses = false
let isGlassesOnCat = false

let beingPetted = false
let catIsHappyTimer = setHappyTimer
let catIsGettingAngryTimerIsActive = false