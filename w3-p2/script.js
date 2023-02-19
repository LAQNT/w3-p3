//-------------- 7 -----------------

function welcome () {
    if (document.getElementById("icon-login").classList.contains("fa-user")){

        document.querySelector("h1").innerText="Welcome";

        document.getElementById("icon-login").classList.replace("fa-user", "fa-right-from-bracket");
    }

    else{
        document.getElementById("icon-login").classList.replace("fa-right-from-bracket", "fa-user");

        document.querySelector("h1").innerText="Vinyl Shop";
    }
}

//-------------- 8 -----------------

function background () {

    //document.querySelector("body").classList.add("background-color-bg");
    if (document.querySelector("body").classList.contains("background-color-bg")){

        document.querySelector("body").classList.remove("background-color-bg");
    }
    else {
        document.querySelector("body").classList.add("background-color-bg");
    }
}

//-------------- 9 -----------------

function indirizzo () {
    let intestazione = 'indirizzo salvato';
    let inputValore = document.querySelector('input').value;
}

//-------------- 10 -----------------

function buttonBuy () {
    let buttonList = document.getElementsByTagName("button");
    
    for (button of buttonList){
        button.classList.add("button-bg");
        console.log(button);
    }    
}
console.log(buttonBuy());


//-------------- 11 -----------------

function imgOpaque () {
    let imgList = document.querySelectorAll(".img-container")

    for (img of imgList) {
        img.classList.add("img-hover");
        console.log(img);
    }
}
console.log(imgOpaque());


//-------------- 12 -----------------

function priceStyle () {
    let pricesList = document.getElementsByClassName("price");

    for (price of pricesList) {
        price.classList.add("price-style");
        console.log(price);
    }
    
}
console.log(priceStyle());


//-----------

function selectedPrice () {

    let priceElem = document.getElementsByClassName("price");
    console.log(priceElem)

    for (let i = 0; i < priceElem.length; i++) {
        priceElem[i].addEventListener("click", function(){
            console.log("item index = "+i)
            if(priceElem[i].classList.contains("price-style")){
                priceElem[i].classList.add("price-style-selected");
            }

            else{
                priceElem[i].classList.remove("price-style");
                priceElem[i].classList.add("price-style");
            }
        })
    }

 }
