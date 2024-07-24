const burgerMenu = document.getElementById('burger-menu')

let burgersArrayLength;

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerToBurgersList)

    displayBurgerDetails(burgers[0])

    burgersArrayLength = burgers[burgers.length - 1].id
})

function addBurgerToBurgersList(burger){
    const imageElement = document.createElement('img')
    imageElement.src = burger.image

    // Display burger details in response to mouseover event
    imageElement.addEventListener('mouseover', () => {
        displayBurgerDetails(burger)
    })

    // Delete burger from burger menu in response to click event
    imageElement.addEventListener('click', () => {
        imageElement.remove()
    })
    
    burgerMenu.appendChild(imageElement)
}

function displayBurgerDetails(burger){
    const burgerIdElement = document.getElementById('burger-id')
    burgerIdElement.textContent = `Burger # ${burger.id}`

    const burgerNameElement = document.getElementById('burger-name')
    burgerNameElement.textContent = `Name: ${burger.name}`

    const burgerImageElement = document.getElementById('burger-image')
    burgerImageElement.src = burger.image

    const burgerPriceElement = document.getElementById('burger-price')
    burgerPriceElement.textContent = `Price: ${burger.price}`
}

const burgerForm = document.getElementById('burger-form')
burgerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newPriceInputElement = document.getElementById('new-price')

    const newBurger = {
        id: burgersArrayLength + 1,
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        price: Number(newPriceInputElement.value)
    }

    burgersArrayLength++

    addBurgerToBurgersList(newBurger)
})