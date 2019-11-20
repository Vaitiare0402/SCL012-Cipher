window.cipher = {
  encode: (numberSave, letrasCifradas) => {
   let stringEncode="";
   //guarda el valor de la palabra cifrada
   for (let i=0; i<letrasCifradas.length; i++){
     const letra=letrasCifradas.charCodeAt(i);//muestra el valor ascii de la letra
     console.log(letra);

     if(letra >=65 && letra<=90){//valor de letras en mayúculas ASCII
      let codAsciiCifrado=(letra - 65+numberSave)%26+65; 
      let stringCifrada= String.fromCharCode(codAsciiCifrado);//convierte el numero ascii en letra
      stringEncode+=stringCifrada;
     } else if (letra>=97&&letra<=122){//valor de las letras en minúsculas ASCII
       let codAsciiCifrado=(letra - 97 + numberSave)%26+97;
       let valorCifrado=String.fromCharCode(codAsciiCifrado);
       stringEncode+=valorCifrado;

      } else {//espacios
        stringEncode+=letrasCifradas.charAt(i);
        
      }
      
   }
   return stringEncode;//imprime el valor del escrito cifrado
    /* Acá va tu código */
    
   },
   decode: (numero, textareaDos) => {
    let stringDecode="";
    for(let i=0; i<textareaDos.length; i++){
      //guarda la data del escrito
      let text=textareaDos.charCodeAt(i);
      console.log(text);
      if (text >=65 && text <=90){
        let codAsciiDecifrado=(text + 65-numero) % 26+65;
        let decifrado=String.fromCharCode(codAsciiDecifrado);
       console.log(decifrado);
       stringDecode+=decifrado;
      } 
         else if(text>=97&&text<=122){
         let codAsciiDecifrado=(text + 97 - numero)%26+97;
         let decifrado=String.fromCharCode(codAsciiDecifrado);
         console.log(decifrado);
         stringDecode+=decifrado;
      }
      else{//espacios
        stringDecode+=textareaDos.charAt(i);
      }
     }
     console.log(stringDecode);
     
     return stringDecode;


   } 
};
