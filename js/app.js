const generate = () => {
    var length=parseInt(inputlength.value);
    var letras = "abcdefghyijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
    const numeros = '0123456789';
    const simbolos = '!"·#$¢%∞&¬/÷(“)=≠?´¿^[*]¨{Çç},;„.:…-_';

    if(checkbox1.checked) letras+=numeros;
    if(checkbox2.checked) numeros += simbolos;


    generatePassword.innertext = "AAA";

}


window.addEventListener('DOMContentLoaded', ()=>{
    btnGenerate.addEventListener('click,', () =>{
        generate();
    })
})