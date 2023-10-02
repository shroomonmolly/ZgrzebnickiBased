//1
let przycisk1 = document.getElementById("zmiana1"); 
let mojnaglowek1 = document.getElementById("tekst1"); 

przycisk1.addEventListener("click", function() { 
  mojnaglowek1.innerHTML = "<i>Świetnie!</i>"; 
});
//2
let przycisk2 = document.getElementById("zmiana2"); 
let mojnaglowek2 = document.getElementById("tekst2"); 

przycisk2.addEventListener("click", function() { 
  mojnaglowek2.innerText = "<i>Świetnie!</i>";
}); 
//3
let przycisk3 = document.getElementById("zmiana3"); 
let kontener1 = document.getElementById("mojdiv");

przycisk3.addEventListener("click", function() { 
  let elementy = kontener1.children; 
  console.log(elementy); 
  let wybrany = elementy[3].firstChild;
  console.log(wybrany.tagName); 
  wybrany.style.border = "10px dotted green"; 
});
//4
function showTitle() {
    var p = document.getElementById("przyklad1"); 
    var title = p.getAttribute("title"); 
    alert(title); 
}
//5 
function changeDir() {
    var p = document.getElementById("przyklad2");
    p.setAttribute("dir", "rtl"); 
}
