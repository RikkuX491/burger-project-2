const burgerMenu = document.getElementById('burger-menu')

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerToBurgersList)
})

function addBurgerToBurgersList(burger){
    const imageElement = document.createElement('img')
    imageElement.src = burger.image
    imageElement.addEventListener('click', () => {
        displayBurgerDetails(burger)
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