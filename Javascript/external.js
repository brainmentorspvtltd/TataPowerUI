// Event Binding
// window.addEventListener('load', function() {
//     document.getElementById('btn').addEventListener('click', greet);
// });

window.addEventListener('load', initEvents);

function initEvents() {
    document.getElementById('btn').addEventListener('click', greet);
}

function greet() {
    var username = document.getElementById("username").value;
    document.getElementById("output").innerHTML = username;
}