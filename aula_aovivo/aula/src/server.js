// import http from 'node:http'

// const server = http.createServer((req,res) => {
//     const { method, url } = req;

//     if (method === 'GET' && url === '/users'){
//         return res.end('bem vindo a tela para ver os users')
//     }
//     if (method === 'POST' && url === '/users') {
//         return res.end('bem vindo a tela para cadastrar users')
//     }
//     return res.end('bem vindo a tela inicial')
// })

// server.listen(3333)
import http from 'node:http'

const users = [];

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method === "GET" && url ==='/usuario') {
        if (users.length === 0) {
            return res.end('Nenhum usuário encontrado.')
        }
        return res.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/usuario') {
        users.push({
            id: 1,
            nome: 'Luan Oliveira'
        })
        return res.end('Usuario criado com sucesso!')
    }

    if (method === 'GET' && url === '/produtos') {
        if (users.length === 0) {
            return res.end('Nenhum produto encontrado.')
        } else {
            return res.end(JSON.stringify(users))
        }
    }

    if (method === 'PATCH' && url === '/produtos') {
        if (users.length !== 0) {
            users[0].produto = 'Produto 1';

            return res.end('Atualização de usuario efetuada!')
        } else {
            return res.end('Nenhum Produto encontrado')
        }
    }

    //desafio
    //rota1
    if (method === 'GET' && url === '/rota1'){
        if (rota1.length === 0) {
            return res.end('nada criado')
        }
        return res.end(JSON.stringify(rota1))
    }
    if (method === 'POST' && url === '/rota1') {
        rota1.push({
            id: 1,
            nome: 'num sei'
        },
        {
            id: 2,
            nome: 'fffff'
        },
        {
            id: 2,
            nome: 'fffff'
        })
        return res.end('item criado.')
        }

    //rota2
    if (method === 'GET' && url === '/rota2'){
        if (rota2.length === 0) {
            return res.end('nada criado')
        }
    return res.end(JSON.stringify(rota2))
    }

    if (method === 'POST' && url === '/rota2') {
        rota2.push({
            id: 1,
            nome: 'num sei'
        },
        {
            id: 2,
            nome: 'lllll'
        },
        {
            id: 3,
            nome: 'fffff'
        })
        return res.end('item criado.')
    }

    //rota3
    if (method === 'GET' && url === '/rota3'){
            if (rota3.length === 0) {
                return res.end('nada criado')
            }
        return res.end(JSON.stringify(rota3))
    }

    if (method === 'POST' && url === '/rota3') {
        rota3.push({
            id: 1,
            nome: 'num sei'
        },
        {
            id: 2,
            nome: 'alalal'
        },
        {
            id: 3,
            nome: 'jfjfjf'
        })
        return res.end('item criado.')
    }

    })

server.listen(3001);