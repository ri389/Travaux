var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var minuscule = "abcdefghijklmnopqrstuvwxyz";
var special ="&é(-è_çà)=/*-+.:#|`^@";
var allchars = majuscule + minuscule + special;
var afficheur = document.querySelector(".mdp");
var length = 12;
var buttton = document.querySelector(".button");

var copier = document.getElementById("copier");

function createpassword(){
    var password="";
    password+= majuscule[Math.floor(Math.random()*majuscule.length)];
    password+= minuscule[Math.floor(Math.random()*minuscule.length)];
    password+= special[Math.floor(Math.random()*special.length)];

    while( length > password.length) {
        password+= allchars[Math.floor(Math.random()*allchars.length)];
    };

    afficheur.textContent= password;
}

buttton.addEventListener("click", createpassword);
buttton.addEventListener("mouseover", ()=>{
    buttton.style.transform = "scale(1.2)";
})
buttton.addEventListener("mouseout", ()=>{
    buttton.style.transform = "scale(1)";
});

copier.addEventListener("click", ()=>{
    afficheur.textContent.select();
    document.execCommand("copy");
})