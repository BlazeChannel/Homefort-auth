
document.addEventListener('DOMContentLoaded', function(){    
    const registerForm =document.getElementById('registerform');
    const warning = document.getElementById('warning');
    function checkPassword(){
        const passWord = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmpassword').value;
        const warningPassword = document.getElementById('warningpassword');
        const warningConfirmPassword= document.getElementById('warningconfirmpassword');

        if(passWord === confirmPassword){
            warningPassword.textContent= 'password match';
            warningPassword.className=  'password do match';
            warningConfirmPassword.textContent= '';
            
            setTimeout(() =>{
                warningPassword.textContent= '';
                warningPassword.className=  '';
                warningConfirmPassword.textContent= '';
            }, 3000);
            return true;
        }
        else{
            warningConfirmPassword.textContent= 'Passwords must Match !!!';
            warningPassword.className= 'password mismatch';
            warningPassword.textContent= 'Passwords must Match !';
            return false;
        }
    }
   registerForm.addEventListener('submit', function(event){
    event.preventDefault();
    warning.innerHTML= '';   

    const fName = document.getElementById('fname').value.trim();
    const lName = document.getElementById('lname').value.trim();
    const eMail = document.getElementById('email').value.trim();
    const passwordsMatch = checkPassword();

    if(!fName || !lName || !eMail || !passwordsMatch ){
        warning.textContent= 'Kindly fill all fields';
        warning.className= 'incomplete form data';
        return;
    }
    const data = {
        fName,    lName,   eMail,   password,    confirmpassword,
        phoneNumber : document.getElementById('tel').value,
    };
    warning.textContent= 'Submitting...';
    warning.className = 'progress';
    fetch('https://667ee9bff2cb59c38dc775c7.mockapi.io/register', {
        method: 'POST',
        headers:
        {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response =>{
        if (!response.ok){
            throw new Error('Network issue' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        warning.textContent = alert('Submission Successful');
        warning.className= 'success';
        registerForm.reset();

        setTimeout(() =>{
            warning.textContent= '';
            warning.className= '';
            window.location.href= 'login.html';
        }, 2000)
    })
    .catch(error => {
        warning.textContent= 'Problem';
        warning.className= 'error';
    });
   });

});
    