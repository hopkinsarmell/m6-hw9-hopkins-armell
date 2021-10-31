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
    console.log(query)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid=00f5bbd24e7c673c1cf820cd3c75f578')
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
    console.log(res)
    })
}

