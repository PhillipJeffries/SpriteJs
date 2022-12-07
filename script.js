console.log("hello")

const body = document.querySelector('body')
const canvas = document.createElement("canvas")


// canvas.width = 500
// canvas.height = 500

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

let objectWidth = 50
let objectHeight = 50
//position x y
let x = -objectWidth
let y = 0

//frame position
const spriteWidth = 6876 / 12
const spriteHeight = 5230 / 10

let frameX = 0
let frameY = 0
let gameFrame = 0
let staggerFrames = 5 //velocity



const c = canvas.getContext('2d')

const playerImage = new Image();
playerImage.src = "shadow_dog.png"



// let direction = {left: false, right: false}

// const checkDirection = (x, canvasWidth) => {
    
//     //if true -> if false <-
//     // let direction = {left: false, right: false}
//     if(x === canvasWidth) {
//         direction.left = true
//         direction.right = false
      
//     }
//     if(x === -objectWidth){
//         direction.right  = true
//         direction.left = false
       
//     } 

//     return direction
// }





//animation loop
const animate = () => {
    
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    //red square
    // c.fillRect(x, y, 50, 50)
    // c.fillStyle = 'red'

    // checkDirection(x, CANVAS_WIDTH).right ?  x++ : x-=1

    let position = Math.floor(gameFrame/staggerFrames) % 7
    frameX = spriteWidth * position
    c.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)


    //f(imageSrc, spritePositionX, spritePositionY, spriteWidth, spriteHeight, positionX, positionY, width, height)
    // c.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // // speed definition
    // if(gameFrame % staggerFrames === 0){
    //     //sprite loop
    //     const frameLimit = 6
    //     if(frameX < frameLimit) frameX++ 
    //     else frameX=0

    // }


    
    gameFrame++

    
    window.requestAnimationFrame(animate)
}

animate()

body.appendChild(canvas)
console.log(canvas)
