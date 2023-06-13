//QUESTÂO 1
function primo() {
    var primos = [];

    //Diz até quantos numeros pode ter no caso 1000
    for (let numero = 2; numero <= 1000; numero++) {
        var verprimo = true;

        //Calcula os números Primos
        for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
            if (numero % divisor === 0) {
                verprimo = false;
                break
            } 
        }

        if (verprimo) {
            primos.push(numero);
        }

    }
    //Mostra no alert todos os números que são primos
    alert(primos)

    return primos

}

//FIM DA QUESTÂO 1

//QUESTÂO 2
function validar(senha) {
    //Diz quantas letras vai ter no minimo
    if (senha.length < 8) {
        return false;
    }

    //Verifica se a senha tem letra maiuscula, minuscula e pelo menos um número
    var maiuscula = false;
    var minuscula = false;
    var numero = false;
    
    for (let i = 0; i < senha.length; i++) {
        const char = senha[i];

        if (char >= "A" && char <= "Z") {
            maiuscula = true;
        } else if (char >= "a" && char <= "z") {
            minuscula = true;
        } else if (char >= "0" && char <= "9") {
            numero = true;
        }
    }
    //Verifica se todos os elementos estão true
    return maiuscula && minuscula && numero;
    
}

function verificar() {
    var senhainp = document.getElementById("senha");
    var senha = senhainp.value;

    if (validar(senha)) {
        alert("A senha é valida")
    } else {
        alert("A senha é invalida")
    }
}
//FIM DA QUESTÂO 2

//QUESTÂO 3
function fatorial(numfat) {
    
    //Calcula o fatorial do número selecionado
    if (numfat === 0 || numfat === 1) {
        return 1;
    } else {
        var fatorial = 1;
        for (let i = 2; i <= numfat; i++) {
            fatorial *= i;
        }

        //Retorna o valor do fatorial
        return fatorial

    }
}

//Quando apertar o botão faz com que apareça no alert o fatorial do numfat nesse caso 10
function botaofat() {
    const numfat = 10;
    const resultado = fatorial(numfat);
    alert ("O fatorial de " + numfat + " é " + resultado)
}
//FIM DA QUESTÂO 3

//QUEStÂO 4 
function QuadradoPerfeito( n ) {
    var i;
    var virgula = '';
    var numer;

    //Calcula quais números são quadrados perfeitos
    for ( i = 1; i <= n; i++ ) {
      numer = Math.sqrt( i );
      if ( numer == Math.floor( numer ) ) {
        
        //Adiciona virgula entre os numeros pra separar bonitinho
        virgula += i + ', ';


      } else {
    
      }
    }
    return virgula;
  }
  
  function botaoqua() {
    alert(QuadradoPerfeito(1000));
  }
  //FIM DA QUESTÂO 4