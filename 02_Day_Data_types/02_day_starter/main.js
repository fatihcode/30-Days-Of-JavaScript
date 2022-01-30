// this is your main.js script

console.warn("Level 1")

let challenge = "30 Days Of JavaScript"

console.log(challenge) //30 Days Of JavaScript

console.log(challenge.length) //21

console.log(challenge.toUpperCase()) //30 DAYS OF JAVASCRIPT

console.log(challenge.toLowerCase()) //30 days of javascript

console.log(challenge.substr(1)) //0 Days Of JavaScript

console.log(challenge.substring(3,21)) //Days Of JavaScript

console.log(challenge.includes("Script")) //true

console.log(challenge.split("")) //['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log(challenge.split(" ")) //['30', 'Days', 'Of', 'JavaScript']

console.log(challenge.replace("JavaScript","Python")) //30 Days Of Python

console.log(challenge.charAt(15)) //S

console.log(challenge.charCodeAt("J")) //51

console.log(challenge.indexOf("a")) //4

let because = 'You cannot end a sentence with because because because is a conjunction'

console.log(because.indexOf("because")) //31

console.log(because.lastIndexOf("because")) //47

console.log(challenge.startsWith("30")) //

console.log(challenge.endsWith("pt")) //

console.log(challenge.concat(" 2")) //

console.log(challenge.repeat(2)) //

//----------------------------------------------
console.warn("Level 2")

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

console.log('10'===10)

console.log(parseFloat('9.8')==10)

console.log("python".includes("on"))

console.log("jargon".includes("on"))

console.log(Math.floor(Math.random()*101))

console.log(Math.floor(Math.random()*51)+50)

console.log(Math.floor(Math.random()*256))

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")






//----------------------------------------------
console.warn("Level 3")

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'


// Uzun yolu
function count(string,find) {

let arr = string.toLowerCase().split(" ")
let i=0

arr.forEach(item => {
if (item.includes(find)){
    i++
}   
});
console.log(i)

}

count(love,"love")


//Kısa yolu
console.log(love.match(/love/gi).length)


because = 'You cannot end a sentence with because because because is a conjunction'


console.log(because.match(/because/g).length)


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'








