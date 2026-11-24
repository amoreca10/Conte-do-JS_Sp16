// Compreendendo DOM

// Criando Animação para Elemento
const frame = document.querySelector("#frame")

let intervalo = null;

function animar() {

    clearInterval(intervalo);

    intervalo = setInterval(atualizarElemento, 5);
    
    let posicao = 0;


    function atualizarElemento(){
        if (posicao ===300) {
            clearInterval(intervalo);
        }else{
        posicao++;
        frame.style.top = posicao + "px";
        frame.style.left = posicao + "px";            
        }
    }

}

