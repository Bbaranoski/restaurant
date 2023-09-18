import alex from './images/alex.jpg'
import steve from './images/steve.jpg'
import bob from './images/bob.jpeg'

const contact = document.createElement('div')
const owner = document.createElement('div')
const manager = document.createElement('div')
const cook = document.createElement('div')
const tittle = document.createElement('h2')
contact.appendChild(tittle)
contact.appendChild(owner)
contact.appendChild(manager)
contact.appendChild(cook)
contact.setAttribute('id', 'contact')
tittle.textContent = 'CONTACT'

function createContact(header, name, phone, local, imageName){

    const H = document.createElement('h3')
    const ul = document.createElement('ul')
    const liName = document.createElement('li')
    const liPhone = document.createElement('li')
    const image = new Image()
    image.src = imageName
    H.textContent = header
    liName.textContent = 'Name: ' + name
    liPhone.textContent = 'Phone: ' + phone
    ul.appendChild(liName)
    ul.appendChild(liPhone)
    local.appendChild(H)
    local.appendChild(ul)
    local.appendChild(image)

}

new createContact('Owner', 'Steve', '555(55)', owner, steve)
new createContact ('Manager', 'Alex', '444+44', manager, alex)
new createContact ('Cook', 'Bob', '333-33', cook, bob)

export default contact