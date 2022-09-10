const images = document.getElementById("img")
const image = document.querySelectorAll("#img img")

let idX = 0

function carrossel() {
    idX++;
    
    if(idX > image.length - 3){
        idX = 0;
    }

    images.style.transform = `translateX(${-idX * 380}px)`
}

setInterval(carrossel, 3000)
