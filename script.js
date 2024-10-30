const display = document.querySelector("#displayCalculate");


const MostraNumero = (numero) => {
    display.append(Number(numero))
}

function MostraOperacao(operacao) {
    display.append(operacao)
}

function limparDisplay() {
    document.querySelector('#displayCalculate').innerHTML = " ";
}

function calculate(value) {
   const display = document.querySelector("#displayCalculate");
   display.innerHTML += value; 
}

function fatorial(n) {
    if (n < 0) return "Erro"; 
    if (n === 0 || n === 1) return 1; 
    let resultado = 1
    for (let i = 2; i <= n; i++) {
        resultado *=i 
    }           
    return resultado;
}

function calculate(){
    const display = document.querySelector('#displayCalculate')
    let expression = display.innerHTML;

    try {
        if (expression.includes("!")) {
            const Number = parseInt(expression.replace("!",''))
            if (!isNaN(Number)) {
                display.innerHTML = fatorial(Number);
            } else {
                display.innerText = "Erro";
            }
        } else {
            let resultado = eval(expression);
            display.innerHTML = resultado;
        }
    } catch (error) {
        display.innerHTML = "Erro"
    }
}
    







