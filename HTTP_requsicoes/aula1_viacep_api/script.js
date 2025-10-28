/**
 * viacep api
 */

cep.onkeyup = () => {
    if(cep.value.length == 8){
        //console.log("digitou o cep");
        /*
        o primeiro .then pega o conteúdo do body;
        o segundo .then é a tradução da resposta/retorno do body do fetch, que é o que interessa pra gente
        */
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json()).then(resposta2 => {
            //console.log(resposta2)
            rua.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.estado;
        }).finally(() => {
            alert("dados preenchidos com sucesso!");
        })
    }
}