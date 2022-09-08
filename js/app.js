<<<<<<< HEAD

const generate = () => {
    var length = parseInt(inputlength.value);
    var generatedPassword = document.getElementById('generatedPassword');
    var btnGenerate = document.getElementById('btnGenerate');
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
=======
const generate = () => {
    var length=parseInt(inputlength.value);
>>>>>>> 9b8f0622342dfd14ce8e37f877c5290a9b18f9da
    var letras = "abcdefghyijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
    const numeros = '0123456789';
    const simbolos = '!"·#$¢%∞&¬/÷(“)=≠?´¿^[*]¨{Çç},;„.:…-_';

<<<<<<< HEAD
    if(checkbox1.ariaChecked) letras+=numeros;
    if(checkbox2.ariaChecked) numeros+=simbolos;


    generatedPassword.innerText = "AAA";
=======
    if(checkbox1.checked) letras+=numeros;
    if(checkbox2.checked) numeros += simbolos;


    generatePassword.innertext = "AAA";

>>>>>>> 9b8f0622342dfd14ce8e37f877c5290a9b18f9da
}


window.addEventListener('DOMContentLoaded', ()=>{
    btnGenerate.addEventListener('click,', () =>{
        generate();
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> 9b8f0622342dfd14ce8e37f877c5290a9b18f9da
