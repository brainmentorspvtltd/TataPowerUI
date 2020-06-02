document.getElementById('btn').addEventListener('click', greet);

function greet() {
    var username = document.getElementById("username").value;
    document.getElementById("output").innerHTML = username;
}