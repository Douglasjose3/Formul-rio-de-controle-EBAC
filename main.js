const form = document.getElementById('form-AB');

const campoA = document.getElementById("number_1");
const campoB = document.getElementById("number_2");

const fieldA = campoA;
const fieldB = campoB;

let mensagemSucesso = false;

function validaCampo(fieldA, fieldB) {
    return fieldB > fieldA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const containerSuccess = document.querySelector('.success_message');
    const containerFail = document.querySelector('.error_message');

    const finalNumberA = parseFloat(campoA.value);
    const finalNumberB = parseFloat(campoB.value);

    const successMessage = `Está correto! O valor: ${fieldB.value} é maior que o valor: ${fieldA.value}.`;
    const messageError = `Está incorreto! Os valor: ${fieldB.value} deve ser maior que: ${fieldA.value} e não podem ser iguais.`;

    formValido = validaCampo(finalNumberA, finalNumberB);
    if (formValido) {
        containerSuccess.innerHTML = successMessage;
        containerSuccess.style.display = 'block';
        containerFail.style.display='none';

        fieldA.value = '';
        fieldB.value = '';

    } else {
        containerFail.innerHTML = messageError;
        containerFail.style.display = 'block';
        containerSuccess.style.display='none';
        
        fieldA.value = '';
        fieldB.value = '';
        };
});