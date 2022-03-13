function pegarDados() {
  let PriFaixa = document.getElementById("PriFaixa").value;
  let SegFaixa = document.getElementById("SegFaixa").value;
  let TerFaixa = document.getElementById("TerFaixa").value;
  let QuaFaixa = document.getElementById("QuaFaixa").value;
  let QuiFaixa = document.getElementById("QuiFaixa").value;
  let con = parseFloat(PriFaixa + SegFaixa + TerFaixa);
  let result = con * QuaFaixa;
  let tol0 = result * QuiFaixa;
  let tol1 = result - tol0;
  let tol2 = result + tol0;
  document.getElementById("result").innerHTML =
    result +
    " Omhs " +
    " com tolerância mínima de " +
    tol1 +
    " Omhs e máxima de " +
    tol2 +
    " Omhs ";
}
