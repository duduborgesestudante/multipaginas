function converte(){
    var temperatura_inicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(
        document.getElementById("cf").checked){
            resultado = (temperatura_inicial * 1.8) +32
        }
    
    else if(
        document.getElementById("fc").checked){
            resultado = (temperatura_inicial * -32) * 5/9
        }
    else if(
        document.getElementById("ck").checked){
            resultado = (temperatura_inicial +273.15) 
        }
    else if(
        document.getElementById("kc").checked){
            resultado = (temperatura_inicial  -273.15)
        }
    else if(
        document.getElementById("kf").checked){
            resultado = (temperatura_inicial  -273.15) * 9/5 + 32
        }
    else if(
        document.getElementById("fk").checked){
            resultado = (temperatura_inicial  - 32) * 5/9 +273.15 
        }
        else{
            resultado = "Você precisa selecionar uma opção"
            alert("Falta colocar o bagulho, burrao")
        }
    

    document.getElementById("r").innerHTML = resultado
    
    
    
    
}