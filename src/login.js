const login = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const changeUsername = document.querySelector("#change-username");

const LOCAL_KEY = "username";

function handleSubmit(e) {
  e.preventDefault();
  const loginName = loginInput.value;
  localStorage.setItem(LOCAL_KEY, loginName);
  login.remove();
  greeting.innerText = `Welcome ${loginName}!`;
  changeUsername.classList.remove("hidden");
}

login.addEventListener("submit", handleSubmit);

const savedUsername = localStorage.getItem(LOCAL_KEY);
if (savedUsername !== null) {
  greeting.innerText = `Welcome ${savedUsername}!`;
  login.remove();
}

// change username
function replaceUsername() {
  localStorage.removeItem(LOCAL_KEY);
  greeting.innerTxt = "";
  location.reload();
  console.log(LOCAL_KEY);
}

changeUsername.addEventListener("click", replaceUsername);
