//EXEMPLO 1 -Callback básico
//Objetivo: entender que podemos entregar uma função para outra função

//Esta função sabe qual mensagem deve mostrar
function dizerOla() {
    console.log("Olá, turma!");
}


function executar(funcaoRecebido) {
    funcaoRecebida();
}

executar(dizerOla);