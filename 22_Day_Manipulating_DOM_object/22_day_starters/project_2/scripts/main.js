console.log(countries)

document.body.style.fontFamily = "Segoe UI"
document.body.style.textAlign = "center"

const wrapper = document.querySelector(".countries-wrapper")
const container = document.querySelector(".countries-container")
const total = document.getElementById("total-countries")
const h2 = document.querySelector("h2")
const h3 = document.querySelectorAll("h3")

h2.style.fontSize = "40px"
h2.style.textTransform = "uppercase"
h2.style.letterSpacing = "10px"
h2.style.margin = "20px 0 0 0"


h3.forEach(item => {

    item.style.color = "#8B8B8B"
    item.style.fontWeight = "400"
    item.style.margin = "0"
    item.style.fontSize = "15px"
})


container.style.display = "flex"
container.style.marginTop = "30px"

wrapper.style.display = "flex"
wrapper.style.flexWrap = "wrap"
wrapper.style.justifyContent = "center"


total.innerHTML = `Total Number of countries: ` + countries.length
total.style.margin = "0"
total.style.fontSize = "18px"


countries.forEach(item => {

    let div = document.createElement("div")
    div.innerHTML = item.toUpperCase()

    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.textAlign = "center"
    div.style.fontSize = "16px"
    div.style.fontWeight = "500"
    div.style.width = "160px"
    div.style.height = "160px"
    div.style.margin = "5px"
    div.style.border = "2px solid #eee"

    wrapper.appendChild(div)

});