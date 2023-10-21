//alert('JS carregado');
//console.log('JS carregado');

function calcularCombustivel(){
    
    var etanol = document.querySelector('#etanol');
    var gasolina = document.querySelector('#gasolina');
    var areaResult = document.querySelector('#result');

    //console.log(etanol.value);
    //console.log(gasolina.value);

    if(etanol.value != '' && gasolina.value != ''){

        areaResult.style.display = 'block';

        var resultado = etanol.value / gasolina.value;
        //console.log(resultado.toFixed(2));

        if(resultado <= 0.7){
            //alert('Abasteça com etanol');
            areaResult.innerHTML = '<span>Abasteça com: <br> <strong>Etanol</strong></span>'

        }else{
            //alert('Abasteça com gasolina');
            areaResult.innerHTML = '<span>Abasteça com: <br> <strong>Gasolina</strong></span>'
        }

    }else{
        alert('Preencha todos os campos!');
    }    


}



