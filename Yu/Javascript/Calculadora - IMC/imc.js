const calcular =  $("#calcular")


calcular.on("click", calcularImc);

function calcularImc(){
    const nome = $("#nome").val();
    const altura = $("#altura").val();
    const peso = $("#peso").val();
    const resultado = $("#resultado")

    if(nome !== "" && altura !== "" && peso !== ""){
        const imc = Math.floor(peso/(altura*altura));
        let classificacao ="";
        if(imc < 18.5){
            classificacao = "Abaixo do peso";
        }else if(imc < 24.9){
            classificacao = "com peso ideal";
        }else if(imc < 29.9){
            classificacao = "acima do peso";
        }else if(imc < 39.9){
            classificacao = "com Obesidade grau I";
        }else if(imc >= 40){
            classificacao = "com Obesidade grau II";
        }else{
            classificacao = "com Obesidade grau III";
        }
        resultado.text(`${nome} seu IMC é ${imc} e você está ${classificacao}`)
    }else{
       resultado.text("Preencha todos os campos!!!!!")
    }
}



    
