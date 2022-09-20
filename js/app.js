const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked) letras += numeros;

    if (checkbox2.checked) letras += simbolos;

    generatedPassword.innerText = generatePassword(letras, length);
};
/* const resultPassword;
switch(generatePassword){
 case resultPassword = () => {
    var indicaciones = new Object();
    indicaciones.channel = "randomfish";
    indicaciones.text = "si te a funcionado el password no olvides dejarme una colaboracion suscribiendote a mi canal mostrado abajo.";

    if (generatePassword) {
        console.group;
        console.log(indicaciones.channel);
        console.log(indicaciones.text);
        console.groupEnd;
    } else {
        console.error('perdon pero la contraseña no se a generado')
        };
    }
}; */


window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
});

