var a = document.querySelector("h1")
var h1 = 0
a.addEventListener("click", function(){
  if(h1 == 0){
    a.innerHTML = "Welcome to Burger Hut"
    h1=1
  }
 else{
  a.innerHTML = "Thanks for reaching out."
  h1=0
 }
})
