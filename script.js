

index = 0;


function selectGreen1(seletor){
    
  index++;
    
    const botaoAnterior = document.querySelector('.pratoverde');

    if(botaoAnterior !== null ){
        botaoAnterior.classList.remove('pratoverde');
    }
    
    const elemento = document.querySelector(seletor);
    elemento.classList.add('pratoverde');
   
    
    if( index > 2 ){
        const elemento = document.querySelector('.botton-bar-fechar');
        elemento.classList.remove('escondido');
    }

}

function selectgreen2(seletor){
   index++;
    
    const botaoAnterior1 = document.querySelector('.bebidaverde');

    if(botaoAnterior1 !== null ){
        botaoAnterior1.classList.remove('bebidaverde');
    }
    
    const elemento1 = document.querySelector(seletor);
    elemento1.classList.add('bebidaverde');
    if( index > 2 ){
        const elemento = document.querySelector('.botton-bar-fechar');
        elemento.classList.remove('escondido');
        console.log('xxx')
    }

}

function selectgreen3(seletor){
    index++;
    
    const botaoAnterior2 = document.querySelector('.doceverde');

    if(botaoAnterior2 !== null ){
        botaoAnterior2.classList.remove('doceverde');
    }
    
    const elemento2 = document.querySelector(seletor);
    elemento2.classList.add('doceverde');
    
    if( index > 2 ){
        const elemento = document.querySelector('.botton-bar-fechar');
        elemento.classList.remove('escondido');
        console.log('xxx')
    }
    
}


