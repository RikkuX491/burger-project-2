const burgersList = document.getElementById('burgers-list')

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerToBurgersList)
})

function addBurgerToBurgersList(burger){
    const liElement = document.createElement('li')

    const idElement = document.createElement('h3')
    idElement.textContent = `Burger # ${burger.id}`
    
    const nameElement = document.createElement('h3')
    nameElement.textContent = `Name: ${burger.name}`
    
    const imageElement = document.createElement('img')
    imageElement.src = burger.image
    imageElement.addEventListener('click', () => {
        displayBurgerDetails(burger)
    })

    const priceElement = document.createElement('h3')
    priceElement.textContent = `Price: ${burger.price}`
    
    liElement.appendChild(idElement)
    liElement.appendChild(nameElement)
    liElement.appendChild(imageElement)
    liElement.appendChild(priceElement)
    burgersList.appendChild(liElement)
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