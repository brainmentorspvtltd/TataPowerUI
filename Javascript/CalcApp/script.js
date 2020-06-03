window.addEventListener("load", initEvents);

var f_num;
var s_num;
var result;
function initEvents() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    result = document.getElementById("box_3");
    result.setAttribute('readonly', 'true');
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    output = parseInt(f_num.value) + parseInt(s_num.value);
    result.value = output;
}
function sub() {
    output = parseInt(f_num.value) - parseInt(s_num.value);
    result.value = output;
}
function div() {
    output = parseInt(f_num.value) / parseInt(s_num.value);
    result.value = output;
}
function mul() {
    output = parseInt(f_num.value) * parseInt(s_num.value);
    result.value = output;
}