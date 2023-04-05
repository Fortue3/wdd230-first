const fruit1 = document.getElementById('fruit1');
const fruit2 = document.getElementById('fruit2');
const fruit3 = document.getElementById('fruit3');

async function fresh () {
    var res = await fetch('./fruit.json');

    var fruits = await res.json()
    console.log(fruits)
    fruits.forEach(fruit => {
        const opt = document.createElement('option')
        opt.value =fruit.name
        opt.innerHTML =fruit.name

        const opt2 = document.createElement('option')
        opt2.value =fruit.name
        opt2.innerHTML =fruit.name

        const opt3 = document.createElement('option')
        opt3.value = fruit.name
        opt3.innerHTML =fruit.name

        fruit1.appendChild(opt)
        fruit2.appendChild(opt2)
        fruit3.appendChild(opt3)
        // console.log(fruit.name)
    })
}

// const rightDiv = document.querySelector('.right')

const  fname = document.getElementById('fname');
const  email = document.getElementById('email');
const  phone = document.getElementById('phone');

async function order(event) {
    event.preventDefault()
    
    const rightDiv = document.querySelector('.right')
	const rightSideDiv = document.querySelector('.fresh-container .right-side')

	rightSideDiv.style.display = "none"
	rightDiv.style.display = 'block'

    const h3 = document.createElement('h3')

    const fruitsDetailsDiv = document.createElement('div')
    const userDetailsDiv = document.createElement('div')
    const myFruitsDiv = document.createElement('div')
    const fruitsTotalsDiv = document.createElement('div')

    const userH4 = document.createElement('h4')
    const fruitsH4 = document.createElement('h4')
    const fruitsDetailsH4 = document.createElement('h4')

    const nameSpan = document.createElement('span')
    const emailSpan = document.createElement('span')
    const phoneSpan = document.createElement('span')

    const fruit1Span = document.createElement('span')
    const fruit2Span = document.createElement('span')
    const fruit3Span = document.createElement('span')

    const total1Span = document.createElement('span')
    const total2Span = document.createElement('span')
    const total3Span = document.createElement('span')
    const total4Span = document.createElement('span')
    const total5Span = document.createElement('span')

    fruitsDetailsDiv.classList.add('fruits-details')
    userDetailsDiv.classList.add('user-details')
    myFruitsDiv.classList.add('my-fruits')
    fruitsTotalsDiv.classList.add('fruits-totals')

    h3.innerHTML = "Selected Fruits"
    userH4.innerHTML = "User Details"
    fruitsH4.innerHTML = "Fruits"
    fruitsDetailsH4.innerHTML = "Fruits Details"

    nameSpan.innerHTML = fname.value
    emailSpan.innerHTML = email.value
    phoneSpan.innerHTML = phone.value

    fruit1Span.innerHTML = fruit1.value
    fruit2Span.innerHTML = fruit2.value
    fruit3Span.innerHTML = fruit3.value

    var res = await fetch('./fruit.json');

    var fruits = await res.json()
    let cbhts = 0
    let protein = 0
    let fat = 0
    let calories = 0
    let sugar = 0

    fruits.forEach(fruit => {
        if (fruit.name === fruit1.value || fruit.name === fruit2.value || fruit.name === fruit3.value) {
            cbhts = cbhts + fruit.nutritions.carbohydrates
            protein =protein + fruit.nutritions.protein
            fat = fat + fruit.nutritions.fat
            calories = calories + fruit.nutritions.calories
            sugar = sugar + fruit.nutritions.sugar
        }
    })

    total1Span.innerHTML = "Carbohydrates: " + cbhts
    total2Span.innerHTML =  "Protein: " + protein
    total3Span.innerHTML = "Fat: " + fat
    total4Span.innerHTML = "Calories: " + calories
    total5Span.innerHTML = "sugar: " + sugar

    userDetailsDiv.append(userH4, nameSpan, emailSpan, phoneSpan)
    myFruitsDiv.append(fruitsH4, fruit1Span, fruit2Span, fruit3Span)
    fruitsTotalsDiv.append(fruitsDetailsH4, total1Span, total2Span, total3Span, total4Span, total5Span)

    fruitsDetailsDiv.append(userDetailsDiv, myFruitsDiv, fruitsTotalsDiv)

    rightDiv.append(h3, fruitsDetailsDiv)

}



fresh()