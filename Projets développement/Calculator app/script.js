 var display = document.getElementById("display");



 function calcresult(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erreur";
    };
 }


 function deletelast(){
    display.value = display.value.slice(0, -1);
 }

 function appendvalue(value){
    display.value+= value;
 }

 function cleardisplay(){
    display.value = "";
 }