import breadRecipe from './images/bread-recipe.jpg'
import cookieRecipe from './images/cookie-recipe.png'
import pumpkinRecipe from './images/pumpkin-recipe.png'
import cakeRecipe from './images/cake-recipe.jpg'
import appleRecipe from './images/apple-recipe.jpg'

const menuDiv = document.createElement('div')
const menuHeader = document.createElement('h2')
const bread = document.createElement('div')
const cookie = document.createElement('div')
const pumpkin = document.createElement('div')
const cake = document.createElement('div')
const apple = document.createElement('div')
menuHeader.textContent = 'RECIPES'
menuDiv.setAttribute('id', 'menuDiv')
menuDiv.appendChild(menuHeader)
menuDiv.appendChild(bread)
menuDiv.appendChild(cookie)
menuDiv.appendChild(pumpkin)
menuDiv.appendChild(cake)
menuDiv.appendChild(apple)

function createRecipe(header, imageName, local, discription){

    const H = document.createElement('h3')
    const P = document.createElement('p')
    const image = new Image()
    image.src = imageName
    H.textContent = header
    P.textContent = discription
    local.appendChild(H)
    local.appendChild(P)
    local.appendChild(image)

}

new createRecipe('Bread', breadRecipe, bread, 'The most natural and tasty bread made with wheat grown in our farm, it can satisfy up to three hunger points.')
new createRecipe('Cookie', cookieRecipe, cookie, 'A homemade cookie made with cocoa harvested from the neighboring forest, being a perfect snack that can satisfy one hunger point each.')
new createRecipe('Pumpki Pie', pumpkinRecipe, pumpkin, 'An exotic dessert made with ingredients perfectly chosen by our cook to give the best flavor, being so good that you will eat it at once satisfying four hunger points.')
new createRecipe('Cake', cakeRecipe, cake, 'A food made for celebrations that can be divided into seven pieces that each will bring happiness, in total the cake will satisfy seven hunger points.')
new createRecipe('Golden Apple', appleRecipe, apple, 'The most exotic food that will rejuvenate your body and even heal the deepest wounds, the golden apple will satisfy you two hunger points in addition to granting regeneration for five seconds.')

export default menuDiv