//validaciones Front-Edn
function qs(element) {
    return document.querySelector(element)
  }
  window.addEventListener("load", () =>{
    let 
    $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputDescription = qs ('#description')
    $descriptionErrors = qs('#descriptionErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    regExAlphaName = /^[a-zA-Z\sñáéíóúü ]{5,40}$/,
    regExAlphaDescrip = /^[a-zA-Z\sñáéíóúü ]{20,100}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlphaName.test($inputName.value):
                $nameErrors.innerHTML = "Minimo 5 caracteres";
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
                $descriptionErrors.innerHTML = "Minimo 20 caracteres";
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
            $fileErrors.innerHTML = 'Carga un archivo con extension: .jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    })

  })