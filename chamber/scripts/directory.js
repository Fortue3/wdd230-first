async function directories () {
    var res = await fetch('../data.json')

    var directory = await res.json()
    // console.log(directory)
    directory.forEach(company => {
        const cards = document.getElementById('cardsContainer')

        const article = document.createElement('article')
        const image = document.createElement('img')
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const btn = document.createElement('button')

        article.classList.add('card')
        div.classList.add('text')
        

        image.setAttribute('src', company.companyImg)
        h3.innerHTML = company.companyName
        let desc = company.companyDesc
        p.innerHTML = desc.substr(0, 50)
        btn.innerHTML = "View More"

        div.append(h3, p, btn)
        article.append(image, div)

        cards.append(article)
    })
    // document.getElementById('myImg').src = directory.companyImg
    // document.getElementById('cName').innerHTML = directory.companyName
}

directories()
const url = "json/data.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.business);
}

getData();

const displayData = (business) => {
    const cards = document.querySelector('div.cards');

    business.forEach((place) => {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let web = document.createElement('a');

        web.title = "Visit Website";
        web.href = place.url;

        image.setAttribute('src', place.image);
        image.setAttribute('alt', `Picture of a business`);

        h2.textContent = `${place.name}`;
        address.textContent = `Address: ${place.address}`;
        phone.textContent = `Phone Number: ${place.phone}`;
        web.textContent = web.title;

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);

        cards.appendChild(card);
    }) 
  };