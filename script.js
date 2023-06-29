function formatarResultadoComVirgula(resultado) {
  return resultado.toString().replace('.',',');
}

function limparDisplay() {
  document.getElementById('display').value = '';
}

function operacaoDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calcular() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  }

  function numeroNegativoOuPositivo() {
      console.dir(document.getElementById("display"));
      var input = document.getElementById("display").value;
        console.log(input);
        var valor = parseFloat(input.replace(',','.'));
        console.log(valor);
        document.getElementById("display").value = String(-valor).replace('.', ',');
}

function calcularPorcentagem() {
  var display = parseFloat(document.getElementById("display").value);
  
    var resultado = (display / 100);
    var resultadoTratado = formatarResultadoComVirgula(resultado);
    document.getElementById("display").value = resultadoTratado;
}