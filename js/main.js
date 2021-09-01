document.addEventListener("click", (event)=>{
    let googleProductTab = document.querySelector(".header .container .google-product-tap");
    if(event.target != document.querySelector(".header .container .google-products") &&
    event.target != document.querySelector(".header .container .google-products a") &&
    event.target != document.querySelector(".header .container .google-products a svg") &&
    event.target != document.querySelector(".header .container .google-products a svg path")){
        googleProductTab.style.display = "none";
    }

    let googleAccountTab = document.querySelector(".header .container .google-account-tap");
    if(event.target != document.querySelector(".header .container .google-account") &&
    event.target != document.querySelector(".header .container .google-account a") &&
    event.target != document.querySelector(".header .container .google-account a img")){
        googleAccountTab.style.display = "none";
    }
});

var googleProductIcon = document.querySelector(".header .container .google-products");
googleProductIcon.addEventListener("click", function(){
    let googleProductTab = document.querySelector(".header .container .google-product-tap");
    if(googleProductTab.style.display == "none" || googleProductTab.style.display == "" || googleProductTab.style.display == null)
    {
        googleProductTab.style.display = "flex";
    }
    else{
        googleProductTab.style.display = "none";
    }
});

var googleAccountIcon = document.querySelector(".header .container .google-account");
googleAccountIcon.addEventListener("click", function(){
    let googleAccountTab = document.querySelector(".header .container .google-account-tap");
    if(googleAccountTab.style.display == "none" || googleAccountTab.style.display == "" || googleAccountTab.style.display == null)
    {
        googleAccountTab.style.display = "flex";
    }
    else{
        googleAccountTab.style.display = "none";
    }
});