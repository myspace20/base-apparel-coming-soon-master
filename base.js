const form = document.querySelector('.form');
const notValid = document.querySelector('.not-valid');
const errorIcon = document.querySelector('.error');
const body = document.querySelector('body');

body.addEventListener('click', () => {
    notValid.style.display = 'none';
    errorIcon.style.display = 'none';
});



form.email.addEventListener('keyup', () =>{
    let valid = email.value.includes('@');

    notValid.style.display = 'none';
    errorIcon.style.display = 'none';

    if(!valid){
        notValid.style.display = 'block';
        errorIcon.style.display = 'block';
    }else{
        notValid.style.display = 'none';
        errorIcon.style.display = 'none'; 
    }
    
    
});