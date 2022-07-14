function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $login = qs('#login'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    errores,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;


    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = "Requerido";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = "Email inválido";
                $email.classList.add("is-invalid");
                break;
            default: 
                $email.classList.remove("is-invalid");
                $email.classList.add("is-valid");
                $emailErrors.innerHTML = "";
                break;
        }
    });

    $password.addEventListener('blur', function(){
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'Campo requerido';
                $password.classList.add('Usuario.inválido');
                break;
            case !regExPassword.test($password.value):
                $passwordErrors.innerHTML = 'La contraseña debe: mas de 8 caracteres, al menos una mayúscula y un número';
                $password.classList.add('Contraseña-inválida');
                break;    
            default:
                $password.classList.remove("Contraseña-invalida");
                $password.classList.add('contraseña.valida');
                $passwordErrors.innerHTML = ""
                break;
        }
    });


    $login.addEventListener('submit', (event) => {
        event.preventDefault()
        switch (true) {
            case $email.value.length == 0:
                $emailErrors.innerHTML = 'Ingrese su email'
                $email.classList.add('is-invalid')
                errores = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Email no valido'
                $email.classList.add('is-invalid')
                errores = true
                break;
            case $password.value.length == 0:
                $passwordErrors.innerHTML = 'Ingrese su contraseña'
                $password.classList.add('is-invalid')
                errores = true
                break;
            case !regExPassword.test($pass.value):
                $passwordErrors.innerHTML = 'Usuario o contraseña incorrectos'
                $pass.classList.add('is-invalid')
                errores = true
                break;
            default:
                if(!errores){
                    $login.submit()
                    submitErrors.innerHTML = "Hay errores en el formulario"
                    errores = false
                }else{
                    errores = true;
                }
            break;
        }
    })   

})

    