// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

document.body.style.fontFamily = "Segoe UI"
document.body.style.textAlign = "center"

const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const wrapper = document.querySelector(".wrapper")

h1.style.margin = "0"
h2.style.margin = "0"
h2.style.fontWeight="400"
h2.style.textDecoration = "underline"

h3.style.margin = "0"
h3.style.fontWeight="400"
h3.style.textDecoration = "underline"

wrapper.style.marginTop = "30px"

for (let i = 0; i <= 101; i++) {

    let div = document.createElement("div")

    div.innerHTML = `${i}<br>`
    div.style.color = "white"
    div.style.display = "inline-block"
    div.style.padding = "15px"
    div.style.fontSize = "30px"
    div.style.fontWeight = "500"
    div.style.textAlign = "center"
    div.style.margin = "2px"
    div.style.width = "80px"
    div.style.backgroundColor = "#21BF73"

    if (i % 2 == 1) {
        div.style.backgroundColor = "#FDDB3A"
    }

    for (m = 2; m < i; m++) {
        if (i % m == 0) {
            break
        }
    }

    if (i == m) {
        div.style.backgroundColor = "#FD5E53"
    }

    document.querySelector(".wrapper").appendChild(div)
}