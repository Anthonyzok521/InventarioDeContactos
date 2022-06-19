let input_name = document.querySelector("#name");
let input_phone = document.querySelector("#phone");
let btn_debe = document.querySelector("#debe");
let input_debe = document.querySelector("#_debe");
let money_bs = document.querySelector("#money_bs");
let money_dolar = document.querySelector("#money_dolar");
let msg = document.querySelector("#msg");
let create = document.querySelector("#create");
let select = document.querySelector("#select");
let operadora = document.querySelector("#operadora");

window.onload = function () {
    document.form.name.focus(); 
    btn_debe.value = "No";
    input_debe.value = "No";
    msg.style.opacity = "0";
    operadora.value = select.options[select.selectedIndex].value;
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

create.addEventListener("click", ()=>{  

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

            msg.textContent = "Que nombre tan raro y corto.";
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

        }else if (formulario[i].value.length < 7){

            msg.textContent = 'Que número tan raro.';
            formulario[i].style.border = "1px solid red";
            msg.style.opacity = "1.0";
            todoCorrecto=false;
    
            }
    }
}
    
    if (todoCorrecto == true) {
        operadora.value = select.options[select.selectedIndex].value;
        if(btn_debe.value == "Si" && money_bs.value != "" || btn_debe.value == "Si" && money_dolar.value != ""){
            formulario.submit(); 
            msg.textContent = "Contacto creado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "Si" && money_bs.value == "" || btn_debe.value == "Si" && money_dolar.value == ""){
            msg.textContent = "Coloca el monto que debe el contacto en Bs o Dólares.";
            msg.style.opacity = "1.0";
        }
        else if(btn_debe.value == "No" && money_bs.value == "" || btn_debe.value == "No" && money_dolar.value == ""){
            formulario.submit(); 
            msg.textContent = "Contacto creado.";
            msg.style.opacity = "1.0";
        }else if(btn_debe.value == "No" && money_bs.value != "" || btn_debe.value == "No" && money_dolar.value != ""){
            msg.textContent = "¿Si el contacto no debe, para qué colocar un monto?";
            msg.style.opacity = "1.0";
        }
    }
    
});