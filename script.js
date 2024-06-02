document.getElementById('calcular').addEventListener('click', function () {
    var codigo = document.getElementById('codigo').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var largura = parseFloat(document.getElementById('largura').value);

    if (codigo === '' || isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        alert('Por favor, preencha todos os campos com valores numéricos e positivos antes de calcular.');
        return;
    }

    var codigosValidos = ['714253', '355016', '644369', '558685', '732597', '561986'];
    if (!codigosValidos.includes(codigo)) {
        alert('Código do produto inválido. Por favor, insira um código válido.');
        return;
    }

    var custoPorMetroQuadrado;
    switch (codigo) {
        case '714253':
            custoPorMetroQuadrado = 230;
            break;
        case '355016':
            custoPorMetroQuadrado = 200;
            break;
        case '644369':
            custoPorMetroQuadrado = 300;
            break;
        case '558685':
            custoPorMetroQuadrado = 140;
            break;
        case '732597':
            custoPorMetroQuadrado = 260;
            break;
        case '561986':
            custoPorMetroQuadrado = 150;
            break;
        default:
            alert('Código do produto inválido. Por favor, insira um código válido.');
            return;
    }

    var area = altura * largura;
    var custo = area * custoPorMetroQuadrado;

    document.getElementById('resultado').value = custo.toFixed(2);
});

function enviarMensagem() {
    var mensagem = document.getElementById('supportMessage').value;
    console.log("Mensagem enviada:", mensagem);

    document.getElementById('supportModal').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
  }

  function fecharModal() {
    document.getElementById('supportModal').style.display = 'none';
  }

  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }

  document.getElementById('toggleSupport').addEventListener('click', function () {
    document.getElementById('supportModal').style.display = 'block';
    document.getElementById('popup').style.display = 'none';
  });

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }




