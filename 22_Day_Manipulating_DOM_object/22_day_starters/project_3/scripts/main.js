console.log(asabenehChallenges2020)

document.body.style.fontFamily = "Segoe UI"
document.body.style.textAlign = "center"

const wrapper = document.querySelector(".wrapper")










let keywords = document.createElement("div")
keywords.style.width = "500px"


asabenehChallenges2020.keywords.forEach(item => {
    keywords.innerHTML += `<div class="key" style="display:inline-block; background-color: red; padding: 5px 15px; border-radius:25px; margin-right:20px">#${item}</div>`

    // console.log(item)

});
wrapper.appendChild(keywords)

// const key = document.querySelectorAll(".span")


// key.forEach(item=>{
// item.style.margin="20px"
// })