import {getstockdata} from "./faststockApi.js"

setInterval(function(){
    let stock=getstockdata()
    renderstockdata(stock)
},2000)
let prevprice=null
function renderstockdata(tock){
    const nameEl=document.getElementById("name-el")
    const symEl=document.getElementById("sym-el")
    const priceEl=document.getElementById("price-el")
    const priEl=document.getElementById("pri-el")
    const timeEl=document.getElementById("time-el")
    const {name,sym,price,time}=tock
    nameEl.textContent="Name: "+name
    symEl.textContent="Symbol: "+sym
    priceEl.textContent="Price: "+price
    timeEl.textContent="Time: "+time
    const pricedir=prevprice<price?"up.png":prevprice>price ? "down.png" :"same.png"
    const im=document.createElement("img")
    im.src=pricedir
    im.alt="stock arrow"
    priEl.innerHTML=""
    priEl.appendChild(im)
    prevprice=price

}
/*
HTML in js:
   let heading = document.createElement("h2")
   heading.textContent = "Hello Jana"
   document.body.appendChild(heading)
we can create h1 buttons etc in js  

styling in js :
   let heading = document.createElement("h2")
    heading.textContent = "Hello Jana"
    heading.style.color = "red"
    heading.style.backgroundColor = "black"
    heading.style.padding = "10px"
    document.body.appendChild(heading)*/