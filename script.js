
document.addEventListener('DOMContentLoaded', function(){
    
    const registerForm =document.getElementById('registerform');
    const warning = document.getElementById('warning');

   registerForm.addEventListener('submit', function(event){
    event.preventDefault();
    warning.innerHTML= '';

    const fName = document.getElementById('fname').value.trim();
    const lName = document.getElementById('lname').value.trim();
    const eMail = document.getElementById('email').value.trim();
   

    function matchPassword(){
        const passWord = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;
        const warningPassword = document.getElementById('warningpassword');
        const warningConfirmPassword= document.getElementById('warningconfirmpassword');


        if(passWord == confirmPassword){
            warningPassword.textContent= 'password match';
            warningPassword.className=  'password do match';
            warningConfirmPassword.textContent= '';
        }
        else{
            warningConfirmPassword.textContent= 'Passwords must Match !!!';
            warningPassword.className= 'password mismatch';
            warningPassword.textContent= 'Passwords must Match !';
        }
    }
    

//     if(!fName || !lName || !eMail || !confirmMatch() ){
//         warning.textContent= 'fill all fields';
//         warning.className= 'error';
//         return;
//     }

//     const data = {
//         fName,
//         lName,
//         eMail,
//         password,
//         confirmpassword,
//         phoneNumber : document.getElementById('tel').value,
//     };

//     warning.textContent= 'submitting...';
//     warning.className = 'progress';

//     fetch('https://667ee9bff2cb59c38dc775c7.mockapi.io/register', {
//         method: 'POST',
//         headers:
//         {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     });
// console.log(data)

   }
   )
})
