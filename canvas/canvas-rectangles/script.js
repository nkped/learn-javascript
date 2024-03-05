

const canvas = document.querySelector('.myCanvas')
const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(0 0 0)'
ctx.fillRect(0, 0, width, height)

ctx.fillStyle = 'rgb(250 0 0)'
ctx.fillRect(190,300,70,90)

ctx.fillStyle = 'rgb(0 250 0)'
ctx.fillRect(220,317,60,60)

ctx.fillStyle = 'rgb(255 0 255 / 80%)'
ctx.fillRect(170,327,126,40) 

ctx.strokeStyle = 'rgb(250 250 250)'
ctx.lineWidth = 5
ctx.strokeRect(170,280,130,130)
