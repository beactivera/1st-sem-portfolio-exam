// portfolio webpage 

let btn = document.querySelector(".clicked");
let workNav = document.querySelector("#work1");

btn.addEventListener('click', showWork);
workNav.addEventListener('click', showWork);

function showWork() {
    console.log("show Work");
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.remove("notshowing");
    document.getElementById("about").classList.add("notshowing");
    document.getElementById("contact").classList.add("notshowing");
}

// another pages to different portfolio sections




// about webpage

let aboutNav = document.querySelector("#about1");

aboutNav.addEventListener('click', showAbout);

function showAbout() {
    console.log("show About");
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.remove("notshowing");
    document.getElementById("contact").classList.add("notshowing");
}


// contact webpage

let contatcNav = document.querySelector("#contact1");

contatcNav.addEventListener('click', showContact);

function showContact() {
    console.log("show Contact");
    document.getElementById("frontpage").classList.add("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.add("notshowing");
    document.getElementById("contact").classList.remove("notshowing");
}


// home webpage

let homeNav = document.querySelector("#home1");

homeNav.addEventListener('click', showHome);

function showHome() {
    console.log("show Home");
    document.getElementById("contact").classList.add("notshowing");
    document.getElementById("frontpage").classList.remove("notshowing");
    document.getElementById("work").classList.add("notshowing");
    document.getElementById("about").classList.add("notshowing");
}
