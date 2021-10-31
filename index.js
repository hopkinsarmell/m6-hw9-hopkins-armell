//get form, input, and #forecast references
var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var forecastEl = document.getElementById('forecast')



btn.onclick = function() {
    //console.log('clicked')
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=00f5bbd24e7c673c1cf820cd3c75f578")
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res)
    })
}

