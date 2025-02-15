const citations = [
    {
        citation : "Le succès, c’est aller d’échec en échec sans perdre son enthousiasme. ",
        auteur: "Winston Churchill",
    },
    {
        citation : " La vie, c’est comme une bicyclette : il faut avancer pour ne pas perdre l’équilibre.",
        auteur: "Albert Einstein",
    },
    {
        citation : "Rien de grand ne s’est accompli dans le monde sans passion.",
        auteur: "Friedrich Hegel",
    },
    {
        citation : "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu’un d’autre.",
        auteur: "Steve Jobs",
    },
    {
        citation : "L’homme sage apprend plus de ses ennemis que l’insensé de ses amis.",
        auteur: "Baltasar Graciàn",
    },
    {
        citation : "Commencez où vous êtes. Utilisez ce que vous avez. Faites ce que vous pouvez.",
        auteur: "Arthur Ashe",
    },
    {
        citation : "La créativité, c’est l’intelligence qui s’amuse.",
        auteur: "Albert Einstein",
    },
    {
        citation : "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
        auteur: "Georges Clemenceau",
    },
    {
        citation : "Le bonheur, c’est lorsque vos pensées, vos paroles et vos actes sont en harmonie.",
        auteur: "Mahatma Gandhi",
    },
    {
        citation : "Soyez le changement que vous voulez voir dans le monde.",
        auteur: "Mahatma Gandhi",
    },
    {
        citation : "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles.",
        auteur: "Oscar Wilde",
    },
    {
        citation : "L’avenir dépend de ce que nous faisons dans le présent.",
        auteur: "Mahatma Gandhi",
    },
    {
        citation : "Les grandes réalisations sont toujours précédées par de grandes préparations.",
        auteur: "Zig Ziglar",
    },
    {
        citation : "Apprenez les règles comme un professionnel, afin de pouvoir les briser comme un artiste.",
        auteur: "Pablo Picasso",
    },
    {
        citation : "Le plus grand risque est de ne prendre aucun risque.",
        auteur: "Mark Zuckerberg",
    },
]
const display = document.querySelector(".citation");
const author = document.querySelector(".auteur");
const changebtn = document.querySelector(".change");

function changer(){
    
}

changebtn.addEventListener("click", () => {
    const  current = citations[ Math.floor(Math.random()* citations.length)];
    display.textContent= (`"${current.citation}"`);
    author.textContent= ("~ " + `${current.auteur}`);
});

function changer(){
    const  current = citations[ Math.floor(Math.random()* citations.length)];
    display.textContent= (`"${current.citation}"`);
    author.textContent= ("~ " + `${current.auteur}`);
};

changebtn.addEventListener("mouseover", ()=>{
    changebtn.style.transform = "scale(1.3)";
});
changebtn.addEventListener("mouseout", ()=>{
    changebtn.style.transform = "scale(1)";
});

changer();
