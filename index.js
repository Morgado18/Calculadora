
    function inser(num){

        let numero = document.querySelector('#Resultado').innerHTML;
        document.querySelector('#Resultado').innerHTML = numero + num;
    }

    function limpar(){

        document.querySelector('#Resultado').innerHTML = "";
    }

    function calcular() {
        
        let resultado = document.querySelector('#Resultado').innerHTML;

        if (resultado) document.querySelector('#Resultado').innerHTML = eval(resultado) ;

        else document.querySelector('#Resultado').innerHTML = "SINTAX ERROR" ;


    }

    function back() {

        let resultado = document.querySelector('#Resultado').innerHTML;
        document.querySelector('#Resultado').innerHTML = resultado.substring(0, resultado.length -1) ;
    }