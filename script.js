

index = 0;


function selectGreen1(seletor){
    
  index++;
    
    const botaoAnterior = document.querySelector('.pratoverde');

    if(botaoAnterior !== null ){
        botaoAnterior.classList.remove('pratoverde');
    }
    
    const elemento = document.querySelector(seletor);
    elemento.classList.add('pratoverde');
    
    const element = document.querySelector(seletor);
    element.classList.remove('escondido');
   
    
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
    }
    
}

function telaFinal(selector){
   
    const elemento = document.querySelector(selector);
    elemento.classList.remove('escondido');
}


function whats(checkFood){
    
    //seleção, soma e edição dos preços dos pratos:
    const foodselect = document.querySelector('.pratoverde .preço');
    const pricefood  = foodselect.innerHTML;
    const pricefoodConvertido = pricefood.replace(',','.');
    const preçofinalfood = parseFloat(pricefoodConvertido)
    
    //seleção dos nomes dos pratos:
    const foodselectname = document.querySelector('.pratoverde .nome-prato');
    const foodname = foodselectname.innerHTML + "%0A";
    console.log(foodname)


    //seleção, soma e edição dos preços das bebidas:
    const bebidaselect = document.querySelector('.bebidaverde .preço');
    const pricebebida = bebidaselect.innerHTML;
    const pricebebidaConvertido = pricebebida.replace(',','.');
    const preçofinalbebida = parseFloat(pricebebidaConvertido)

    //seleção dos nomes das bebidas:
    const bebidaselectname = document.querySelector('.bebidaverde .nome-prato');
    const bebidaname = bebidaselectname.innerHTML + "%0A";
    console.log(bebidaname);
 
    //seleção, soma e edição dos preços dos doces:
    const doceselect = document.querySelector('.doceverde .preço');
    const pricedoce = doceselect.innerHTML;
    const pricedoceConvertido = pricedoce.replace(',','.');
    const preçofinaldoce = parseFloat(pricedoceConvertido)

     //seleção dos nomes dos doces:
     const doceselectname = document.querySelector('.doceverde .nome-prato');
     const docename = doceselectname.innerHTML + "%0A";
     console.log(docename);
    

    const pricetotal = preçofinalbebida + preçofinaldoce + preçofinalfood;
    const pricetotaledit = pricetotal.toFixed(2).replace('.',',');
    const string = 
    "Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0A" + "-%20Prato%3A%20" + foodname + "-%20Bebida%3A%20" + bebidaname + "-%20Sobremesa%3A%20" + docename + "Total%3A%20R%24%20" + pricetotaledit;
    
    const msn = document.querySelector('.wpp');
    const evento = msn.setAttribute("href","https://wa.me/5524999378096?text="+string)
    
}




