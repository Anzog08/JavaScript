const container = document.getElementById("Container");
const first = document.getElementById("first");
const last = document.getElementById("last");
const mobile_email = document.getElementById("mobile_email");
const password = document.getElementById("password");
const birthday = document.getElementById("birthday");
const CreateAccount = document.getElementById("CreateAccount");

const object = {};

CreateAccount.addEventListener("click", (event) => {
  object = {
    first: first.value,
    last: last.value,
    mobile_email: mobile_email.value,
    password: password.value,
    birthday: birthday.value,
  };
});

localStorage.setItem("ss", JSON.stringify(object));
