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

    
    //temperature
    var temp = document.createElement('p')
    temp.textContent = "Current: " + weatherObj.main.temp + "℉"
    forecastEl.appendChild(temp)

    var feels_like = document.createElement('p')
    feels_like.textContent = "Feels like: " + weatherObj.main.feels_like + "℉"
    forecastEl.appendChild(feels_like)
}

