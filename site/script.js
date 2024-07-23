function somar() {
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);

  var resp = document.getElementById("respSoma");
  resp.textContent = n1 + n2;
}

function subtrair() {
  var a1 = parseInt(document.getElementById("a1").value);
  var a2 = parseInt(document.getElementById("a2").value);

  var resp = document.getElementById("respSubtracao");
  resp.textContent = a1 - a2;
}

function divisao() {
  var b1 = parseInt(document.getElementById("b1").value);
  var b2 = parseInt(document.getElementById("b2").value);

  var resp = document.getElementById("respDivisao");
  resp.textContent = b1 / b2;
}

function mult() {
  var c1 = parseInt(document.getElementById("c1").value);
  var c2 = parseInt(document.getElementById("c2").value);

  var resp = document.getElementById("respMult");
  resp.textContent = c1 * c2;
}

function media() {
  var d1 = parseInt(document.getElementById("d1").value);
  var d2 = parseInt(document.getElementById("d2").value);
  var d3 = parseInt(document.getElementById("d3").value);
  var media = document.getElementById("respMedia");
  var res = (d1 + d2 + d3) / 3;

  if (res >= 7 ){
    media.textContent = res.toFixed(1)
    media.style.color = "green";
    media.style.background = "lightgreen";
    media.style.padding = "1px"
  }

  else{
    media.textContent = res.toFixed(1)
    media.style.color = "red";
    media.style.background = "lightpink";
    media.style.padding = "1px"

  }

}

function contar(){
  const num = parseFloat($("#numeroInput").val());

  var resultadoStr = " ";

  if (num <= 100) {
    for (var cont = 1; cont <= num; cont++){
      resultadoStr = resultadoStr + cont + "<br>"
    }
    $("#result").html(resultadoStr);
  }

  else{
    $("#result").text("digite um numero menor que 100!!!")
  }
}

