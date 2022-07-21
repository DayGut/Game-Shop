function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $login = qs('#login'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/,
    errores;
    
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

    $password.addEventListener("blur", function(){
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = "Campo requerido";
                $password.classList.add("is-invalid");
                break;
            case !regExPassword.test($password.value):
                $passwordErrors.innerHTML = "Contraseña incorrecta";
                $password.classList.add("Contraseña-inválida");
                break;    
            default:
                $password.classList.remove("is-invalid");
                $password.classList.add('is-valid');
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
            case !regExPassword.test($password.value):
                $passwordErrors.innerHTML = 'Usuario o contraseña incorrectos'
                $password.classList.add('is-invalid')
                errores = true
                break;
            default:
                if(!errores){
                    $login.submit()
                    submitErrors.innerHTML = 'Usuario o contraseña incorrectos'
                    errores = false
                }else{
                    errores = true;
                }
            break;
            }
        })

})

    