let btn_debe = document.querySelector("#debe");
let input_debe = document.querySelector("#_debe");
let money = document.querySelector("#money");
let msg = document.querySelector("#msg");
let save = document.querySelector("#save");
let _delete = document.querySelector("#delete");
let confirm_delete = document.querySelector("#confirm");

window.onload = function () {
    document.form.name.focus(); 
    btn_debe.value = input_debe.value;
    input_name.style.border = "1px solid black";
    input_phone.style.border = "1px solid black";
    msg.style.opacity = "0";
    confirm_delete.value = "";
}

btn_debe.addEventListener("click", ()=>{

    if(btn_debe.value == "No"){
        btn_debe.value = "Si";
        input_debe.value = "Si";

    }else{
        btn_debe.value = "No";
        input_debe.value = "No";
    }

});

save.addEventListener("click", ()=>{  

    let todoCorrecto = true;
    let formulario = document.form;

    for (let i=0; i<formulario.length; i++) {
    
    if(formulario[i].type =='text') {

        if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){

        alert ('Es necesario que el contacto tenga un nombre.');
        formulario[i].style.border = "1px solid red";
        msg.textContent = "Faltó el Nombre.";
        msg.style.opacity = "1.0";
        todoCorrecto=false;

        }else if (formulario[i].value.length < 2){

            alert ('Que nombre tan raro y corto.');
            formulario[i].style.border = "1px solid red";
            msg.style.opacity = "1.0";
            todoCorrecto=false;
    
            }

    }

    if(formulario[i].type =='tel') {

        if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){

        alert ('Coloca el número de teléfono.');
        formulario[i].style.border = "1px solid red";
        msg.textContent = "Faltó el número de teléfono.";
        msg.style.opacity = "1.0";
        todoCorrecto=false;

        }else if (formulario[i].value.length < 7){

            msg.textContent = 'Que número tan raro.';
            formulario[i].style.border = "1px solid red";
            msg.style.opacity = "1.0";
            todoCorrecto=false;
    
            }
    }
}
    
    if (todoCorrecto == true) {
        if(btn_debe.value == "Si" && money.value != ""){
            formulario.submit(); 
            msg.textContent = "Contacto editado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "Si" && money.value == ""){
            msg.textContent = "Coloca el monto que debe el contacto en Bs y Dólares.";
            msg.style.opacity = "1.0";
        }
        else if(btn_debe.value == "No" && money.value == ""){
            formulario.submit(); 
            msg.textContent = "Contacto editado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "No" && money.value != ""){
            msg.textContent = "¿Si el contacto no debe, para qué colocar un monto?";
            msg.style.opacity = "1.0";
        }
    }
    
});

_delete.addEventListener('click', ()=>{
        let formulario = document.form;
        let opcion = confirm("¿Eliminar este contacto?");
        if (opcion == true) {
            msg.textContent = "Contacto eliminado";
            confirm_delete.value = "521";
            formulario.submit(); 
        }	
});

