
function btn1(){


    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"


}

function btn2(){


    document.getElementById("agradecimento").innerHTML =""

}

function btn3(){


    window.open("https://www.google.com/")

}

function trocar(elemento){ 


    elemento.innerHTML = "Obrigado por passar o mouse aqui"

    //document.getElementById("passe").innerHTML= "Obrigado por passar o mouse aqui"

    //alert("trocar texto")


}


function voltar(elemento){ 


    elemento.innerHTML = "Passe o mouse aqui" 

    //document.getElementById("passe").innerHTML= "Passe o mouse aqui"

    //alert("trocar texto")


}


function load (){


    alert("A página carregou")
}
/*

var d = new Date();
alert(d.getMonth()+1)

/*

var count;
for (count = 0; count <= 5; count++) {

alert (count)

}



/*
var count = 0;
while (count < 5){

    alert(count)
    console.log(count);
    count = count + 1;  
}



var nome = "Gabriel ";
var idade = 18;
alert("Seja bem vindo ao johnson, " + nome + idade);

console.log(nome);
console.log (idade);

var lista = ["maçã", "pera", "laranja"];
lista.push ("uva");

console.log (lista);
console.log (lista.toString())


var frutas = [{nome: "maçã", cor: "verde"}, {nome:"laranja", cor: "laranja"}]
console.log (frutas);
alert(frutas [1].nome);
*/