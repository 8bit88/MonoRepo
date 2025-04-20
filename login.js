//const { MongoClient } = require("mongodb");
// тута комент !!!mongodb+srv://Dev:Cluster8bit$@8bitdb.wzxke.mongodb.net/?retryWrites=true&w=majority&appName=8bitDB

function userDeteail() {

 const userPassword = document.getElementById("password").value
 const userEmail = document.getElementById("email").value

return alert(` You entered: ${userPasswordassword},${userEmail} `)}
const button = document.querySelector('.button');
button.addEventListener("click",btnClick)


function btnClick(){
    alert("click")
}
 
 fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
})
.then(response => response.json())
.then(data => alert(data.message))
.catch(error => console.error("Помилка:", error));
