//get each element to modify
let title = document.getElementById("title")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

//function for generating a random number
function getRandomNumber()
{
    return Math.floor(Math.random()*6)+1
}

//function to generate a path to a dice img with a specific number
function getRandomDiePath(number)
{
    return "/images/dice" + number + ".png"
}

//get two random numbers
let randNum1 = getRandomNumber()
let randNum2 = getRandomNumber()

//get each number's respective dice path
let dice1RandomImg = getRandomDiePath(randNum1)
let dice2RandomImg = getRandomDiePath(randNum2)

//update the src for each image to the new path.
img1.setAttribute("src", dice1RandomImg)
img2.setAttribute("src", dice2RandomImg)

//check which number is larger (P1,P2,Draw)
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
