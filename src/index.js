/*Acá va tu código*/

const btnEncode= document.getElementById("cifrabutton");
btnEncode.addEventListener("click",()=>{
    const number=document.getElementById("numberOffset").value;
    console.log(number);
    const texto=document.getElementById("palabras").value;
    console.log(texto);
    const letrasCifradas=texto.toUpperCase();
    
    const numberSave=parseInt(number);
    
    document.getElementById("text").innerHTML = window.cipher.encode(numberSave, letrasCifradas);

})

const btnDecode=document.getElementById("decifrar");
btnDecode.addEventListener("click", function(){
    
    const numero=document.getElementById("numberOffset").value;
    console.log(numero);

    const textareaDos=document.getElementById("palabras").value;
    console.log(textareaDos);

    document.getElementById("text").innerHTML=window.cipher.decode(numero, textareaDos);
   
})