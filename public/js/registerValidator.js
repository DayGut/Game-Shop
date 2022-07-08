function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $terms = qs('#terms'),
    $termsErrors = qs('#termsErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break;
            default: 
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    })

    $inputLastname.addEventListener("blur", () => {
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerHTML = "Requerido";
                $inputLastname.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = "Apellido inválido";
                $inputLastname.classList.add("is-invalid");
                break;
            default: 
                $inputLastname.classList.remove("is-invalid");
                $inputLastname.classList.add("is-valid");
                $lastnameErrors.innerHTML = "";
                break;
        }
    })

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

    $pass.addEventListener('blur', () => {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'Campo requerido';
                $pass.classList.add('Usuario inválido');
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe: mas de 6 caracteres, al menos una mayúscula y un número';
                $pass.classList.add('Contraseña inválida');
                break;    
            default:
                $pass.classList.remove("Contraseña invalida");
                $pass.classList.add('contraseña valida');
                $passErrors.innerHTML = ""
                break;
        }
    })

    $pass2.addEventListener('blur', ()=>{
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                $pass2.classList.add('is-invalid')
                break;
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;    
            default:
                $pass2.classList.remove("is-invalid");
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
                break;
        }
    })

    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }
         })

         $terms.addEventListener('click', () => {
            $terms.value = "on"
            $terms.classList.toggle('is-valid')
            $terms.classList.remove('is-invalid')
            $termsErrors.innerHTML = ""
        })

        $form.addEventListener("submit", function(event) {

            event.preventDefault()
            let elementsForm = this.elements;
            let errores = false;
    
            
    
            for (let index = 0; index < elementsForm.length - 1; index++) {
                if(elementsForm[index].value == ""
                && elementsForm[index].name !== "apellido"
                && elementsForm[index].type !== "file"
                || elementsForm[index].classList.contains("is-invalid")){
                    elementsForm[index].classList.add("is-invalid");
                    submitErrors.innerHTML = "Hay errores en el formulario"
                    errores = true;
                }
            }
    
            if(!$terms.checked){
                $terms.classList.add("is-invalid");
                $termsErrors.innerHTML = "Debes los términos y condiciones";
            }
    
            if(!errores){
                alert("Validado!")
                $form.submit()
            }
    
        })
    
})