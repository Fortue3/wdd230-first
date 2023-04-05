const city = "Carlsbad"
const key = "82005d27a116c2880c8f0fcb866998a0";

const wContainer = document.querySelector('.weather-container');

 getWeather(city, key)

function getWeather(city, key){
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            console.log(data);

            return data;
        })
        .then(function(data){
            
            for(let i = 0; i < 3; i++) {

                const wrapper1 = document.createElement('div');
                const header1 = document.createElement('header');
                const section1 = document.createElement('section');
                const img1 = document.createElement('img');
                const tempDiv = document.createElement('div')
                const spanFLike = document.createElement('span');
                const spanDeg = document.createElement('span');
                const weatherDescDiv = document.createElement('div');
                const bottomDetailsDiv = document.createElement('div');
                const colFeelsDiv = document.createElement('div');
                const thermoI = document.createElement('i');
                const detailsDiv = document.createElement('div');
                const temp2Div = document.createElement('div');
                const spanNumb2 = document.createElement('span');
                const spanDeg2 = document.createElement('span');
                const tempP = document.createElement('p');
                const colHumDiv = document.createElement('div')
                const dropHalfI = document.createElement('i')
                const details2Div = document.createElement('div');
                const spanHum = document.createElement('span')
                const humP = document.createElement('p');

                wrapper1.classList.add('wrapper');
                section1.classList.add('weather-part')
                tempDiv.classList.add('temp')
                spanFLike.classList.add('numb')
                spanDeg.classList.add('deg')
                weatherDescDiv.classList.add('weather')
                bottomDetailsDiv.classList.add('bottom-details')
                colFeelsDiv.classList.add('column')
                colFeelsDiv.classList.add('feels')
                thermoI.classList.add('bx')
                thermoI.classList.add('bxs-thermometer')
                detailsDiv.classList.add('details')
                temp2Div.classList.add('temp')
                spanNumb2.classList.add('numb-2')
                spanDeg2.classList.add('deg')
                colHumDiv.classList.add('column')
                colHumDiv.classList.add('humidity')
                dropHalfI.classList.add('bx')
                dropHalfI.classList.add('bxs-droplet-half')
                details2Div.classList.add('details')

                spanFLike.innerHTML = Math.floor(data.list[i].main.feels_like)
                spanDeg.innerHTML = "°"
                header1.innerHTML = "Weather"
                weatherDescDiv.innerHTML = data.list[i].weather[0].description
                img1.setAttribute("src", "images/icons/"+data.list[i].weather[0].icon+".png")
                spanNumb2.innerHTML = Math.floor(data.list[i].main.temp)
                spanDeg2.innerHTML = "°"
                tempP.innerHTML = "Temperature"
                spanHum.innerHTML = data.list[i].main.humidity+"%"
                humP.innerHTML = "Humidity"
                
                temp2Div.append(spanNumb2, spanDeg2)
                detailsDiv.append(temp2Div, tempP)
                colFeelsDiv.append(thermoI, detailsDiv)

                details2Div.append(spanHum, humP)
                colHumDiv.append(dropHalfI, details2Div)

                bottomDetailsDiv.append(colFeelsDiv, colHumDiv)
                tempDiv.append(spanFLike, spanDeg)
                section1.append(img1, tempDiv, weatherDescDiv, bottomDetailsDiv)
                wrapper1.append(header1, section1)

                wContainer.append(wrapper1)

            }
        })

}
