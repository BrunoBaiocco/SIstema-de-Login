//Variáveis
let btnSenha = document.querySelector('#verSenha')
let btnConfirmar = document.querySelector('#verConfirmarSenha')
let btnCadastrar = document.querySelector('#cadastrar')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validaNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validaUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validaSenha = false

let confirmarsenha = document.querySelector('#confirmarsenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validaConfirmarSenha = false

let mensagemErro = document.querySelector('#mensagemErro')
let mensagemSucesso = document.querySelector('#mensagemSucesso')


// Visualização da senha (olhinhos)
btnSenha.addEventListener('click', ()=>{
  
  if(senha.getAttribute('type') == 'password'){
    senha.setAttribute('type', 'text')
    btnSenha.setAttribute('class', 'far fa-eye')
  } else {
    senha.setAttribute('type', 'password')
    btnSenha.setAttribute('class', 'far fa-eye-slash')
  }
})

btnConfirmar.addEventListener('click', ()=>{

  if(confirmarSenha.getAttribute('type') == 'password'){
    confirmarSenha.setAttribute('type', 'text')
    btnConfirmar.setAttribute('class', 'far fa-eye')
  } else {
    confirmarSenha.setAttribute('type', 'password')
    btnConfirmar.setAttribute('class', 'far fa-eye-slash')
  }
})

//Validação de Cadastro
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2){
    labelNome.innerHTML = 'Nome: Insira no mínimo 3 caracteres'
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    validaNome = false
  } else {
    labelNome.innerHTML = 'Nome'
    labelNome.setAttribute('style', 'color: navy')
    nome.setAttribute('style', 'border-color: navy')
    validaNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if (usuario.value.length < 5){
    labelUsuario.innerHTML = 'Usuário: Insira no mínimo 5 caracteres'
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    validaUsuario = false
  } else {
    labelUsuario.innerHTML = 'Usuário'
    labelUsuario.setAttribute('style', 'color: navy')
    usuario.setAttribute('style', 'border-color: navy')
    validaUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length < 5){
    labelSenha.innerHTML = 'Senha Insira no mínimo 5 caracteres'
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    validaSenha = false
  } else {
    labelSenha.innerHTML = 'Senha'
    labelSenha.setAttribute('style', 'color: navy')
    senha.setAttribute('style', 'border-color: navy')
    validaSenha = true
  }
})

confirmarSenha.addEventListener('keyup', () => {
  if (senha.value != confirmarSenha.value){
    labelConfirmarSenha.innerHTML = 'Confirmar Senha As senhas não conferem'
    labelConfirmarSenha.setAttribute('style', 'color: red')
    confirmarSenha.setAttribute('style', 'border-color: red')
    validaConfirmarSenha = false
  } else {
    labelConfirmarSenha.innerHTML = 'Confirmar Senha'
    labelConfirmarSenha.setAttribute('style', 'color: navy')
    confirmarSenha.setAttribute('style', 'border-color: navy')
    validaConfirmarSenha = true
  }
})

//Verificação das etapas
btnCadastrar.addEventListener('click', ()=>{
  if(validaNome && validaUsuario && validaSenha && validaConfirmarSenha){
    mensagemErro.setAttribute('style','display: none')
    mensagemErro.innerHTML=''
    mensagemSucesso.setAttribute('style','display: block')
    mensagemSucesso.innerHTML='Cadastrando usuário...'
  } else { 
    mensagemSucesso.setAttribute('style','display: none')
    mensagemSucesso.innerHTML=''
    mensagemErro.setAttribute('style','display: block')
    mensagemErro.innerHTML='Preencha todos os campos corretamente'
  }
})