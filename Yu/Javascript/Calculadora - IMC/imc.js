function calcularImc(){
    
}
$("#calcular").on("click", function(event){
    var nome = $("#nome").val()
    var altura = parseFloat($("#altura").val())
    var peso = parseFloat($("#peso").val())
    var imc = peso/(Math.pow(altura));
    alert(imc)
});