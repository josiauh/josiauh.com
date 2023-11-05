var uaElement = document.getElementById("userAgent");

uaElement.innerText = "User Agent: " + window.navigator.userAgent;

if (window.navigator.userAgent.includes("Oculus")) {
  console.log("hello oculus user!!!");
}