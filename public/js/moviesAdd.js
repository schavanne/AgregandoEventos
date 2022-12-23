window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let estadoSecreto = 0;
    inputTitulo.addEventListener("keydown",function(event){
        if(estadoSecreto == 0){
            estadoSecreto = (event.key == "s") ? 1 : 0;
        }
        else if(estadoSecreto == 1){
            estadoSecreto = (event.key == "e") ? 2 : 0;
        }
        else if(estadoSecreto == 2){
            estadoSecreto = (event.key == "c") ? 3 : 0;
        }
        else if(estadoSecreto == 3){
            estadoSecreto = (event.key == "r") ? 4 : 0;
        }
        else if(estadoSecreto == 4){
            estadoSecreto = (event.key == "e") ? 5 : 0;
        }
        else if(estadoSecreto == 5){
            estadoSecreto = (event.key == "t") ? 6 : 0;
        }

        if(estadoSecreto == 6){
            alert("SECRETO MAGICO");
        }
        
    })

    titulo.addEventListener("mouseenter",function(){
        titulo.classList.toggle("toggle");
    });
    titulo.addEventListener("mouseleave",function(){
        titulo.classList.toggle("toggle");
    });

}