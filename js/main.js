$(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    var importe, tasa, dias, resultado;
    importe = $("#importe").val();
    // importe = importe.replace(".", "");
    // importe = importe.replace(",", ".");
    // importe = importe.replace("$", "");
    tasa = $("#tasa").val();
    dias = $("#dias").val();
    resultado = importe * (tasa / 100) * (dias / 365);
    resultado = new Intl.NumberFormat("es-AR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(resultado);
    $("#resultado").text(resultado);
  });
});
