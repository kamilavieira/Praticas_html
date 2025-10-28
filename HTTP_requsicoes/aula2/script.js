function buscarRegioes(){
    regioes.innerHTML = "<option disabled selected>Carregando regiões...</option>"
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(resposta => resposta.json()).then(resposta => {
        //console.log(resposta);
        resposta.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })  
    })
}

function buscarEstados(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(resposta => resposta.json()).then(resposta => {
        estados.innerHTML = "";
        resposta.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })
}

function buscarMunicipios(){
    municipios.innerHTML = '<option disabled selected>Carregando municípios...</option>';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
    .then(resposta => resposta.json()).then(resposta => {
        municipios.innerHTML = '';
        resposta.map(municipio => {
            municipios.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`;
        })
    })
}

// function buscarCidades(){
//     cidades.innerHTML = "";
//     fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.nome}/municipios`)
//     .then(resposta => resposta.json()).then(resposta => {
//         resposta.map(cidade => {
//             cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
//         })
//     })
// }

buscarRegioes();

