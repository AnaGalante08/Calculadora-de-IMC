const imcForm = document.getElementById("imcForm");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

imcForm.addEventListener('submit', function (event) {
    event.preventDefault();
    resultado.innerHTML = calcularIMC(peso.value, altura.value);

})

function calcularIMC(p, a) {
    const conta = p / (a * a);
    let classificacao = ""

    if (conta < 18.5) {

        classificacao = "Abaixo do peso";

    } else if (conta < 24.9) {
        classificacao = "Peso normal";
    }
    else if (conta <= 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (conta <= 34.9) {
        classificacao = "Obesidade I";
    }
    else if (conta <= 39.9) {
        classificacao = "Obesidade II";
    }
    else {
        classificacao = "Obesidade III";
    }

    return `Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta.toFixed(2)}, seu nível é ${classificacao}`
}