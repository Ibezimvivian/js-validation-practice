const name = document.querySelector('#name')
const password = document.querySelector('#pass')
const newPass = document.querySelector('#confirmp')
const button = document.querySelector('#btn')

function log() {
 const userName = name.value;
 const pass = password.value;
 const changePass = newPass.value;
 
   if (!userName) {
       console.log('Please enter your name');
       return;
   }
   if (userName.length < 6) {
      console.log('username must be atleast 6 characters'); 
      return;
   }

   if (!pass) {
       console.log('please enter your password');
       return;
   }

   if (pass.length < 8) {
       console.log('password must be atleast 8 characters');
       return;
   }

   if (changePass !== pass) {
       console.log('password does not match');
       return;
   }

   console.log('registration complete');
}

button.addEventListener('click',()=>{
    log()
})