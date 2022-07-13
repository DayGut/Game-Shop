function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    $form = qs('#form'),
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

    for (let index = 0; index < elementsForm.length - 1; index++) {
        if(elementsForm[index].value == ""
        && elementsForm[index].email !== "email"
        && elementsForm[index].password !== "password"){
            elementsForm[index].classList.add('is-invalid');
        }
    }
    $form.addEventListener('submit', function(e){
        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].email !== "email"
            && elementsForm[index].password !== "password"){
                elementsForm[index].classList.add('is-invalid');
            }
        }
        if($email.value == "" || $password.value == ""){
            e.preventDefault();
        }
    });
    
        // || elementsForm[index].classList.contains("is-invalid")){
        //     elementsForm[index].classList.add("is-invalid");
        //     submitErrors.innerHTML = "Hay errores en el formulario"
        //     errores = true;
        // }
    //}

    if(!$terms.checked){
        $terms.classList.add("is-invalid");
        $termsErrors.innerHTML = "Debes los términos y condiciones";
    }

    if(!errores){
        alert("Validado!")
        $form.submit()
    }

})


    