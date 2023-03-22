function clearName() {
  if (document.getElementById("nameField").value == "First and Last Name") {
    document.getElementById("nameField").value = "";
  }
}
function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "First and Last Name";
  }
}
function clearPhone() {
  if (document.getElementById("phoneField").value == "example: 212-123-1234") {
    document.getElementById("phoneField").value = "";
  }
}
function resetPhone() {
  if (document.getElementById("phoneField").value == "") {
    document.getElementById("phoneField").value = "example: 212-123-1234";
  }
}
function clearMail() {
  if (
    document.getElementById("mailField").value == "example: example@gmail.com"
  ) {
    document.getElementById("mailField").value = "";
  }
}
function resetMail() {
  if (document.getElementById("mailField").value == "") {
    document.getElementById("mailField").value = "example: example@gmail.com";
  }
}
function alertThx() {
  alert("Thanks man.");
}
