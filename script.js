function operacaoDisplay(value) {
    document.getElementById('display').value += value;


  }
  
  function limparDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calcular() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  }

  function numeroNegativo() {
        var input = document.getElementById("display");
        var valorAtual = parseFloat(input.value);
      
        if (valorAtual > 0) {
          var valorNegativo = -valorAtual;
          input.value = valorNegativo;
        }
}
