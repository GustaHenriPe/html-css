var quebrada = false
var ligada = false

$("img").dblclick(function(){
    $("img").attr("src", "./img/quebrada.jpg");
    quebrada = true
})  

$("#turnOn").click(function(){
    if(quebrada == false){
        if (ligada ){
            $("img").attr("src", "./img/desligada.jpg");
            $("#turnOn").text("LIGAR")
            ligada = false
        }else{
            $("img").attr("src", "./img/ligada.jpg");
            $("#turnOn").text("DESLIGAR")
            ligada = true
        }
    }
    
})  
/*$("#turnOn").click(function(){
    if(quebrada == false){
        $("img").attr("src", "./img/ligada.jpg");
    }
})

$("#turnOff").click(function(){
    if(quebrada == false){
        $("img").attr("src", "./img/desligada.jpg");
    }
})

$("img").mouseenter(function () { 
    if(quebrada == false){
        $("img").attr("src", "./img/ligada.jpg");
    }
});

$("img").mouseleave(function () { 
    if(quebrada == false){
        $("img").attr("src", "./img/desligada.jpg");
    }
});*/ 



