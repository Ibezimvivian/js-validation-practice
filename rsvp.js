const name = document.querySelector("#name");
const password = document.querySelector("#pass");
const newPass = document.querySelector("#confirmp");
const button = document.querySelector("#btn");

function notify(message, success = false) {
  Toastify({
    text: message,
    duration: 3000,
    style: {
      background: success ? "#4caf50" : "#f44336",
    },
  }).showToast();
}

function log() {
  const userName = name.value;
  const pass = password.value;
  const changePass = newPass.value;

  if (!userName) {
    notify("Please enter your name");
    return;
  }
  if (userName.length < 6) {
    notify("username must be atleast 6 characters");
    return;
  }

  if (!pass) {
    notify("please enter your password");
    return;
  }

  if (pass.length < 8) {
    notify("password must be atleast 8 characters");
    return;
  }

  if (changePass !== pass) {
    notify("password does not match");
    return;
  }

  notify("registration complete", true);
}

button.addEventListener("click", () => {
  log();
});
