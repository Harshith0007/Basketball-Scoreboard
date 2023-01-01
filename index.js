let home = document.getElementById("homescore")
let guest = document.getElementById("guestscore")
let count1 = 0
let count2 = 0
function addHome1(){
    count1 = count1+1
    home.innerText=count1
}
function addHome2(){
    count1 = count1+2
    home.innerText=count1
}
function addHome3(){
    count1 = count1+3
    home.innerText=count1
}
function addGuest1(){
    count2 = count2+1
    guest.innerText=count2
}
function addGuest2(){
    count2 = count2+2
    guest.innerText=count2
}
function addGuest3(){
    count2 = count2+3
    guest.innerText=count2
}
function reset() {
    home.innerText=0
    guest.innerText=0
    count1=0
    count2=0
}