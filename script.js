function check() {
  const pwd = document.getElementById("pwd").value;
  const error = document.getElementById("error");

  if (pwd === "Worldsbestestgf") {   // CHANGE THIS
    window.location.href = "secret.html";
  } else {
    error.innerText = "That’s not it… but it’s okay. Try again.";
  }
}
