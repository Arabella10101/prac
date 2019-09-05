

var but= document.getElementById("one");
but.addEventListener("click",function(){
    but.style.backgroundColor="red";
})

// var btndark = document.getElementById("dark1");
// btndark.addEventListener("click", function(){
//     this.classList.remove("btn-outline-dark");
//     this.classList.add("btn-outline-primary");
// })

function goDark() {
    var btndark = document.getElementById("dark1");
    btndark.classList.remove("btn-outline-dark");
    btndark.classList.add("btn-outline-primary");
}