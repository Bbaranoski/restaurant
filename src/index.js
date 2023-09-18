import './style.css'
import home from './home.js'
import menuDiv from './recipes'
import contact from './contact'

const body = document.body
const header = document.createElement('div')
const footer = document.createElement('div')
const content = document.getElementById('content')

const creditsOne = document.createElement('div')
const creditsTwo = document.createElement('div')
const creditsThree = document.createElement('div')

const tittle = document.createElement('h1')
const buttonDiv = document.createElement('div')
const buttonHome = document.createElement('button')
const buttonMenu = document.createElement('button')
const buttonContact = document.createElement('button')

header.setAttribute('id', 'header')
footer.setAttribute('id', 'footer')
creditsOne.setAttribute('id', 'credits')
creditsTwo.setAttribute('id', 'credits')
creditsThree.setAttribute('id', 'credits')

body.appendChild(header)
body.appendChild(footer)

body.appendChild(creditsOne)

function createCredits(name, local, urlLink){

    this.name = document.createElement('a')
    this.name.textContent = `${name}` +  ': ' + `${urlLink}`
    local.appendChild(this.name)

}

new createCredits('Map', creditsOne, 'Credits: ValiantVale')
new createCredits('Background', creditsOne, 'https://www.pxfuel.com/en/desktop-wallpaper-sqlbt')
new createCredits('Bread',  creditsTwo, 'https://www.instructables.com/Bread-in-Minecraft/')
new createCredits('Cookie',  creditsTwo, 'https://pockethost.app/en/how-to-make-minecraft-cookies/')
new createCredits('Pimpkin Pie',  creditsTwo, 'https://minecraft-max.net/craft/cooked-food/17803-pumpkin-pie/')
new createCredits('Cake',  creditsTwo, 'https://gurugamer.com/pc-console/how-to-make-a-cake-in-minecraft-17646')
new createCredits('Golden Apple',  creditsTwo, 'https://wiki.rankiing.net/can-you-make-notch-apples-2/')
new createCredits('Steve and Alex', creditsThree, 'https://top-mmo.fr/de/was-sind-die-%C3%A4nderungen-in-den-neuen-steve-und-alex-skins-in-minecraft/')
new createCredits('Bob', creditsThree, 'https://www.pcgamer.com/how-to-make-a-minecraft-villager-zombie-trades/')

tittle.textContent = 'Mine'
buttonHome.textContent = 'Home'
buttonMenu.textContent = 'Recipes'
buttonContact.textContent = 'Contact'
let firstPage = true
let secondPage = false
let thirdPage = false

header.appendChild(tittle)
buttonDiv.appendChild(buttonHome)
buttonDiv.appendChild(buttonMenu)
buttonDiv.appendChild(buttonContact)
header.appendChild(buttonDiv)

buttonHome.addEventListener('click', () => {
    if(firstPage == false){
        content.appendChild(home)
        body.appendChild(creditsOne)

        if(secondPage == true){
            menuDiv.remove()
            creditsTwo.remove()
            secondPage = false
        }else if(thirdPage == true){
            contact.remove()
            creditsThree.remove()
            thirdPage = false
        }

        firstPage = true
    }
})

buttonMenu.addEventListener('click', () =>{
    if(secondPage == false){
        content.appendChild(menuDiv)
        body.appendChild(creditsTwo)

        if(firstPage == true){
            home.remove()
            creditsOne.remove()
            firstPage = false
        }else if (thirdPage == true){
            contact.remove()
            creditsThree.remove()
            thirdPage = false
        }

        secondPage = true
    }
})

buttonContact.addEventListener('click', () =>{
    if(thirdPage == false){
        content.appendChild(contact)
        body.appendChild(creditsThree)

        if(firstPage == true){
            home.remove()
            creditsOne.remove()
            firstPage = false
        }else if(secondPage == true){
            menuDiv.remove()
            creditsTwo.remove()
            secondPage = false
        }

        thirdPage = true
    }
})
content.appendChild(home)