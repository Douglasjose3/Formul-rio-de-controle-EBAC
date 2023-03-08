const form = document.getElementById('form-AB');
const campoApreenchido = document.getElementById('campo-A-preenchido');
let formEValido = false;

function validaA(campoA) {
    const numeroAComoArray = campoA.split('');
    return numeroAComoArray.length <= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoBpreenchido = document.getElementById('campo-B-preenchido');
    const mensagemSucesso = `O dia do seu aniversário é: <b>${campoApreenchido.value}</b> e o ano do seu nascimento é : <b>${campoBpreenchido.value}</b>.`;

    formEValido = validaA(campoApreenchido.value)
    if (formEValido) {
        const containermensagemSucesso = document.querySelector('.success-message');
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';

        campoApreenchido.value = '';
        campoBpreenchido.value = '';
    } else {
        campoApreenchido.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoApreenchido.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaA(e.target.value)

    if (!formEValido) {
        campoApreenchido.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoApreenchido.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});