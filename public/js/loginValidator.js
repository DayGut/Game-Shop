function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

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
                $password.classList.add('Usuario inválido');
                break;
            case !regExPassword.test($password.value):
                $passwordErrors.innerHTML = 'La contraseña debe: mas de 6 caracteres, al menos una mayúscula y un número';
                $password.classList.add('Contraseña inválida');
                break;    
            default:
                $password.classList.remove("Contraseña invalida");
                $password.classList.add('contraseña valida');
                $passwordErrors.innerHTML = ""
                break;
        }
    })

    
})