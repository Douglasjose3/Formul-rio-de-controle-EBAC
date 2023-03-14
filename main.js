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

    const finalNumberA = parseFloat(campoA.value);
    const finalNumberB = parseFloat(campoB.value);

    const successMessage = `Está correto! O valor: ${fieldB.value} é maior que o valor: ${fieldA.value}.`;
    const messageError = `Está incorreto! O valor: ${fieldA.value} é maior que o valor: ${fieldB.value}.`;

    formValido = validaCampo(finalNumberA, finalNumberB);
    if (mensagemSucesso = true) {
        const containerSuccess = document.querySelector('.success_message');
        containerSuccess.innerHTML = successMessage;
        containerSuccess.style.display = 'block';

        fieldA.value = '';
        fieldB.value = '';

    } else {
        if (!mensagemSucesso) {
        const containerFail = document.querySelector('.error_message');
        containerFail.innerHTML = messageError;
        containerFail.style.display = 'block';
        
        fieldA.value = '';
        fieldB.value = '';
        };
    };
});