 var container= document.querySelector(".contenu");
 var ajouter = document.querySelector(".add");
 var input = document.getElementById("texte");


 ajouter.addEventListener("click", () =>{
    if (input.value !== "") {
       var div =document.createElement("div");
    div.classList.add("note");
    div.textContent = input.value.trim();
    container.appendChild(div);
    input.value = "";

      var poubelle= document.createElement("i");
      poubelle.classList.add("fa", "fa-trash");
      poubelle.id = "supprimer";
      div.appendChild(poubelle);
      save();
      // supprimer la note en cliquant sur l'icône poubelle

      poubelle.addEventListener("click", ()=> {
            div.remove();
            save();
      });
      
    }else{
      alert("Vous devez écrire quelque chose");
    };
 });
 function save() {
   
   var notes = [];
    container.querySelectorAll(".note").forEach(note => {
       notes.push(note.textContent); });
        localStorage.setItem("notes", JSON.stringify(notes)); }
        
        function restore() {
          var notesEnregistrees = localStorage.getItem("notes"); 
          if (notesEnregistrees) {
             JSON.parse(notesEnregistrees).forEach(noteText => {
                var div = document.createElement("div");
                 div.classList.add("note"); 
                 div.textContent = noteText;
                  container.appendChild(div);
                   var poubelle = document.createElement("i");
                    poubelle.classList.add("fa", "fa-trash"); poubelle.id = "supprimer";
                     div.appendChild(poubelle);
                     
                     // supprimer la note en cliquant sur l'icône poubelle poubelle.
                     addEventListener("click", () => { 
                        div.remove();
                         save(); 
                        });
                      });
                      }
                      }
                       restore();
                       