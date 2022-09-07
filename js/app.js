
const generate = () => {
    var length = parseInt(inputlength.value);
    var generatedPassword = document.getElementById('generatedPassword');
    var btnGenerate = document.getElementById('btnGenerate');
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var letras = "abcdefghyijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
    const numeros = '0123456789';
    const simbolos = '!"·#$¢%∞&¬/÷(“)=≠?´¿^[*]¨{Çç},;„.:…-_';

    if(checkbox1.ariaChecked) letras+=numeros;
    if(checkbox2.ariaChecked) numeros+=simbolos;


    generatedPassword.innerText = "AAA";
}


window.addEventListener('DOMContentLoaded', ()=>{
    btnGenerate.addEventListener('click,', () =>{
        generate();
    })
})
