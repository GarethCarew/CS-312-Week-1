let title = document.getElementById("title")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

function getRandomNumber()
{
    return Math.floor(Math.random()*6)+1
}

function getRandomDiePath(number)
{
    return "/images/dice" + number + ".png"
}

let randNum1 = getRandomNumber()
let randNum2 = getRandomNumber()

let dice1RandomImg = getRandomDiePath(randNum1)
let dice2RandomImg = getRandomDiePath(randNum2)

img1.setAttribute("src", dice1RandomImg)
img2.setAttribute("src", dice2RandomImg)

if (randNum1 > randNum2)
{
    title.innerHTML = "🚩Player 1 Wins"
} else if (randNum1 < randNum2)
{
    title.innerHTML = "Player 2 Wins🚩"
} else
{
    title.innerHTML = "Draw"
}
