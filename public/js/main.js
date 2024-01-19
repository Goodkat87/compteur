let myCounter = document.querySelectorAll(".counter")

let limiteTwitter = 12000
let limiteTwitch = 5000
let limiteFB = 7500



let count = 0

let augmenter = (counter,limite) =>{
    count += (limite/20)
    counter.innerHTML = count

    if (count >= limite) {
        counter.innerHTML = limite
    }
}


setInterval(augmenter,50,myCounter[0],limiteTwitter)
setInterval(augmenter,50,myCounter[1],limiteTwitch)
setInterval(augmenter,50,myCounter[2],limiteFB)

