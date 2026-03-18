function calcular() {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const display = document.getElementById('resultado');

    
    if (peso === '' || altura === '') {
        display.innerHTML = "Preencha todos os campos!";
        return;
    }

            const imc = (peso / (altura * altura)).toFixed(2);
            let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    display.innerHTML = `Seu IMC é ${imc} (${classificacao})`;
}
document.getElementById('btn-repetir').addEventListener('click', function() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('peso').focus();
});