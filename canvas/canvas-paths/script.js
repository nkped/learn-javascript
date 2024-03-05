
const canvas = document.querySelector('.myCanvas')
const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(0 0 0)'
ctx.fillRect(0,0,width,height)

function degToRad(degrees) {
    return (degrees * Math.PI) / 180
}

ctx.fillStyle = 'rgb(255 0 0)'
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(150, 50)
const triHeight = 50 * Math.tan(degToRad(60))
ctx.lineTo(100, 50 + triHeight)
ctx.lineTo(50, 50)
ctx.fill()

/* arc() takes six parameters. The first two specify the position of the arc's center (X and Y, respectively). The third is the circle's radius, the fourth and fifth are the start and end angles at which to draw the circle (so specifying 0 and 360 degrees gives us a full circle), and the sixth parameter defines whether the circle should be drawn counterclockwise (anticlockwise) or clockwise (false is clockwise). */

ctx.fillStyle = 'rgb(0 0 255)'
ctx.beginPath()
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();


ctx.fillStyle = 'rgb(0 255 255)'
ctx.beginPath()
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true)
ctx.fill()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.arc(300,106,50, degToRad(-45), degToRad(45), true)
ctx.lineTo(300,106)
ctx.fill()

