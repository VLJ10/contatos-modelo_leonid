'use strict'

import {lerContatos} from "./contato.js"
console.log(await lerContatos())

import {criarContato} from "./contato.js"

async function criarCard() {
    const mainContainer = document.getElementById('container')
    
    const contatos = await lerContatos()

    contatos.forEach(contact => {
        
        
        const cardContainer = document.createElement('div')
        cardContainer.className = 'card-contato'

        const img = document.createElement('img')
        img.src = contact.foto

        const nome = document.createElement('h2')
        nome.textContent = contact.nome

        const numero = document.createElement('p')
        numero.textContent = contact.celular



        cardContainer.append(img, nome, numero)

        mainContainer.append(cardContainer)

        cardContainer.addEventListener('click', trocarPagina)
        cardContainer.addEventListener('click', cardContainer)
    });

}

const botaoNovoContato = document.getElementById('novo-contato')
botaoNovoContato.addEventListener('click',  trocarPagina)

const main = document.querySelector('main')
function trocarPagina() {
    main.classList.remove('card-show')
    main.classList.add('form-show')
}

function voltarPaginaInicia() {
    main.classList.remove('form-show')
    main.classList.add('card-show')
}

const inputPreview = document.getElementById('foto')
const fotoPreview = document.getElementById('preview-image')

inputPreview.addEventListener('change', () => {
    const file = inputPreview.files[0]
    if (file) {
        fotoPreview.src = URL.createObjectURL(file)
    }
})

async function salvarUsuario() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const celular = document.getElementById('celular').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    const foto = fotoPreview.src

    const dados = {
        nome: nome,
        email: email,
        celular: celular,
        endereco: endereco,
        cidade: cidade,
        foto: foto
    }

    criarContato(dados)

}


const botaoSalvar = document.getElementById('salvar')
botaoSalvar.addEventListener('click', salvarUsuario)
botaoSalvar.addEventListener('click', voltarPaginaInicia)

const botaoCancelar = document.getElementById('cancelar')
botaoCancelar.addEventListener('click', voltarPaginaInicia)
criarCard()