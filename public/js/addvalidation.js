//validaciones Front-Edn
function qs(element) {
    return document.querySelector(element)
  }
  window.addEventListener("load", () =>{
    let 
    $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputDescription = qs ('#description')
    $submit= qs('#errorSubmit-add')
    $descriptionErrors = qs('#descriptionErrors'),
    $form=qs('#add-form')
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    regExAlphaName = /^[A-Za-z0-9\s]+$/g,
    regExAlphaDescrip = /^[a-zA-Z\sñáéíóúü ]{20,100}$/,
    
    

    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlphaName.test($inputName.value):
                $nameErrors.innerHTML = "minimo 5 caracteres";
                $inputName.classList.add("is-invalid");
                break;
            default: 
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    })

    $inputDescription.addEventListener("blur", () => {
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = "Requerido";
                $inputDescription.classList.add("is-invalid");
                break;
            case !regExAlphaDescrip.test($inputDescription.value):
                $descriptionErrors.innerHTML = "minimo 20 caracteres";
                $inputDescription.classList.add("is-invalid");
                break;
            default: 
                $inputDescription.classList.remove("is-invalid");
                $inputDescription.classList.add("is-valid");
                $descriptionErrors.innerHTML = "";
                break;
        }
    })

    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo con extension: .jpg - .jpeg - .png - .gif';
            $file.value = '';
            return false;
        }
    })

    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "apellido"
            && elementsForm[index].type !== "file"
            && elementsForm[index].type !== "checkbox"
             ||elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Corregir campos marcados en rojo";
                errores = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add("is-invalid");
            $termsErrors.innerHTML = "Debes aceptar los términos y condiciones";
        }

        if(!errores){
            alert("Validado!")
            $form.submit()
        }

    })

  })