var myBtn = document.querySelector(".myBtn");
var text = document.querySelectorAll(".text li");


myBtn.addEventListener("click",function(){
    
    text[0].style.background="red";
    text[1].style.background="yellow";
    
})
