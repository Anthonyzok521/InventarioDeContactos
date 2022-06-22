/* PARA VALIDAR QUE SOLO SEAN NÚMEROS */
function JustNumbers(evt){

    let code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code == 8) { // backspace.
      return true;
    } else if(code >= 48 && code <= 57) { // Números
      return true;
    } else{ // Letras y caracteres
      return false;
    }
}

/* PARA VALIDAR QUE SOLO SEAN LETRAS */
function JustLetters(evt){
			
    let code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code == 8) { // backspace.
      return true;
    } 
    else if(code == 32){ // space.
        return true;
    }else if(code >= 48 && code <= 57) { // Números
      return false;

    //              Mayúsculas                  Minúsculas                    é                   á í ó ú Ñ ñ
    } else if(code >=  65 && code <= 90 || code >= 97 && code <= 122 || code == 130 || code >= 160 && code <= 165){ // Letras.
      return true;
    }
    else{
        return false;
    }
}