let burger

function inicializar(){
  burger = document.getElementById("burger")
  burger.addEventListener('click', function(){
    let menu = document.getElementById("list-menu")
    
    if(menu.style.display === "block"){
      menu.style.display = "none"
    }
    else{
      menu.style.display = "block"
    }
   
    
  } )

}



