let btn = document.querySelector('.fa-eye-slash')
let inputSenha = document.querySelector('#senha')

btn.addEventListener('click', () => {  
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
    btn.setAttribute('class', 'far fa-eye')
  } else{
    inputSenha.setAttribute('type', 'password')
    btn.setAttribute('class', 'far fa-eye-slash')
  }
})
