/* VARIABLES CON LA ETIQUTAS (DOM) */
let btn_debe = document.querySelector("#debe"),
input_phone = document.querySelector("#phone"),
input_debe = document.querySelector("#_debe"),
money_bs = document.querySelector("#money_bs"),
money_dolar = document.querySelector("#money_dolar"),
select = document.querySelector("#select"),
operadora = document.querySelector("#operadora"),
msg = document.querySelector("#msg"),
save = document.querySelector("#save"),
_delete = document.querySelector("#delete"),
confirm_delete = document.querySelector("#confirm"),
main = document.querySelector("main");

/* AL CARGAR LA PÁGINA QUE ESTÉN ESTOS VALORES POR DEFECTO */
window.onload = function () {
    document.form.name.focus(); 
    btn_debe.value = input_debe.value;
    msg.style.opacity = "0";
    confirm_delete.value = "";
}

/* VERIFICANDO QUÉ OPERADORA ES */
    let phone = input_phone.value;
    let p = "";

    for(let i = 0; i < 4; i++){
        p += phone[i];
    }

    if(p == '0412'){
        select.selectedIndex = 0; 
        operadora.value = '0412';

    }else if(p == '0414'){
        select.selectedIndex = 1; 
        operadora.value = '0414';

    }else if(p == '0416'){
        select.selectedIndex = 2; 
        operadora.value = '0416';

    }else if(p == '0424'){
        select.selectedIndex = 3; 
        operadora.value = '0424';
        
    }else if(p == '0426'){
        select.selectedIndex = 4; 
        operadora.value = '0426'
    }
    input_phone.value = "";
    for(let j = 5; j < 12 ; j++){
        input_phone.value += phone[j];
    }

/* BOTÓN DE QUE SI DEBE O NO */
btn_debe.addEventListener("click", ()=>{

    if(btn_debe.value == "No"){
        btn_debe.value = "Si";
        input_debe.value = "Si";

    }else{
        btn_debe.value = "No";
        input_debe.value = "No";
        money_bs.value = "";
        money_dolar.value = "";
    }

});

/* VERIFICANDO LA ENTRADA DE LOS INPUTS ANTES DE GUARDAR */
save.addEventListener("click", ()=>{  

    let todoCorrecto = true;
    let formulario = document.form;

    for (let i=0; i<formulario.length; i++) {
    
    if(formulario[i].type =='text') {

        if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){

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

        formulario[i].style.border = "1px solid red";
        msg.textContent = "Faltó el número de teléfono.";
        msg.style.opacity = "1.0";
        todoCorrecto=false;

        }else if (formulario[i].value.length < 7 ){

            msg.textContent = 'Que número tan raro.';
            formulario[i].style.border = "1px solid red";
            msg.style.opacity = "1.0";
            todoCorrecto=false;
    
            }
    }
}
    
    if (todoCorrecto == true) {
        input_phone.value = `${select.options[select.selectedIndex].value} ${input_phone.value}`;
        if(btn_debe.value == "Si" && money_bs.value != "" || btn_debe.value == "Si" && money_dolar.value != ""){
            formulario.submit(); 
            msg.textContent = "Contacto editado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "Si" && money_bs.value == "" || btn_debe.value == "Si" && money_dolar.value == ""){
            msg.textContent = "Coloca el monto que debe el contacto en Bs o Dólares.";
            msg.style.opacity = "1.0";
        }
        else if(btn_debe.value == "No" && money_bs.value == "" && money_dolar.value == ""){
            formulario.submit(); 
            msg.textContent = "Contacto editado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "No" && money_bs.value != "" || btn_debe.value == "No" && money_dolar.value != ""){
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

