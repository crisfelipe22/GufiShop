var inputs = document.getElementsByClassName('formulario__input');
for(var i=0;i<inputs.length;i++){
    inputs[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {              
        let lables = document.getElementsByClassName('formulario__label')     
            for (var i = 0; i < lables.length; i++) {
                lables[i].classList.remove('fijar')
                console.log(lables[i].classList)
            }
            formulario.reset();                                
    });
});