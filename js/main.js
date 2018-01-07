// portfolio webpage 

let btn = document.querySelector(".clicked");
let workNav = document.querySelector("#work1");

btn.addEventListener('click', showWork);
workNav.addEventListener('click', showWork);

function showWork() {
    console.log("show Work");
    //highlight nav
    homeNav.classList.remove("color-nav");
    workNav.classList.add("color-nav");
    aboutNav.classList.remove("color-nav");
    contactNav.classList.remove("color-nav");
    //change sites
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.remove("notshowing");
    document.getElementById("about").classList.add("notshowing");
    document.getElementById("contact").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
     //portfolio
     document.getElementById("animation").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
}


// another pages to different portfolio sections


let animPortfolio = document.querySelector(".box2");
animPortfolio.addEventListener('click', showAnim);
function showAnim(){
    console.log("show Animation");
    document.getElementById("animation").classList.remove("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
}


let appPortfolio = document.querySelector(".box3");
appPortfolio.addEventListener('click', showApp);
function showApp(){
    console.log("show Application");
    document.getElementById("application").classList.remove("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
     document.getElementById("animation").classList.add("notshowing");
}


let vidPortfolio = document.querySelector(".box4");
vidPortfolio.addEventListener('click', showVid);

function showVid(){
    console.log("show Video");
    document.getElementById("video").classList.remove("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
     document.getElementById("animation").classList.add("notshowing");
}







// about webpage

let aboutNav = document.querySelector("#about1");

aboutNav.addEventListener('click', showAbout);

function showAbout() {
    console.log("show About");
    //highlight nav
    homeNav.classList.remove("color-nav");
    workNav.classList.remove("color-nav");
    aboutNav.classList.add("color-nav");
    contactNav.classList.remove("color-nav");
    //change sites
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.remove("notshowing");
    document.getElementById("contact").classList.add("notshowing");
     //portfolio
     document.getElementById("animation").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
}



// contact webpage

let contactNav = document.querySelector("#contact1");

contactNav.addEventListener('click', showContact);

function showContact() {
    console.log("show Contact");
    //highlight nav
    homeNav.classList.remove("color-nav");
    workNav.classList.remove("color-nav");
    aboutNav.classList.remove("color-nav");
    contactNav.classList.add("color-nav");
    //change sites
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.add("notshowing");
    document.getElementById("contact").classList.remove("notshowing");
     //portfolio
     document.getElementById("animation").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
}



// home webpage

let homeNav = document.querySelector("#home1");

homeNav.addEventListener('click', showHome);

function showHome() {
    console.log("show Home");
    //highlight nav
    homeNav.classList.add("color-nav");
    workNav.classList.remove("color-nav");
    aboutNav.classList.remove("color-nav");
    contactNav.classList.remove("color-nav");
    //change sites
    document.getElementById("frontpage").classList.remove("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.add("notshowing");
    document.getElementById("contact").classList.add("notshowing");
    //portfolio
     document.getElementById("animation").classList.add("notshowing");
    document.getElementById("video").classList.add("notshowing");
    document.getElementById("application").classList.add("notshowing");
}
