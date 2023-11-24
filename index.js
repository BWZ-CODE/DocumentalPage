window.addEventListener("scroll", function(){
    var imagen = document.querySelector(".pic1");
    imagen.classList.toggle("abajo",this.window.scrollY>2)
})

