//get form, input, and #forecast references
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var forecastEl = document.getElementById('forecast')

//add an event to form submit
//insert user input into fetch link
//return data in json format
formEl.onsubmit = function(e) {
    e.preventDefault()
    var query = inputEl.value
    //console.log(query)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+query+'&units=imperial&sys.country&appid=00f5bbd24e7c673c1cf820cd3c75f578')
    .then(function(res) {
        return res.json()
    })
    .then(function(result) {
    renderWeather(result)
    })
}

function renderWeather(weatherObj) {
    //console.log(weatherObj.name)
    //refreshes name upon new search
    forecastEl.innerHTML = ""
    //add city name to page by creating an element
    var name = document.createElement('h2')
    var country = document.createElement('h2')
    name.textContent = weatherObj.name + "" + ", " + weatherObj.sys.country + ""
    forecastEl.appendChild(name)
    forecastEl.appendChild(country)

    //icon
    var icon = document.createElement('img')
    icon.src = 'https://openweathermap.org/img/wn/' + weatherObj.weather[0].icon + '@2x.png'
    icon.alt = weatherObj.description
    forecastEl.appendChild(icon)

    //weather description
    var description = document.createElement('p')
    description.textContent = "Description: " + weatherObj.weather[0].description
    forecastEl.appendChild(description)

    //temperature
    var temp = document.createElement('p')
    temp.textContent = "Current: " + weatherObj.main.temp + "℉"
    forecastEl.appendChild(temp)

    //feels like
    var feels_like = document.createElement('p')
    feels_like.textContent = "Feels like: " + weatherObj.main.feels_like + "℉"
    forecastEl.appendChild(feels_like) 
}

