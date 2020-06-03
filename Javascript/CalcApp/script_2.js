window.addEventListener("load", initEvents);

var f_num;
var s_num;
var result;
function initEvents() {
    f_num = document.querySelector('#box_1');
    s_num = document.querySelector('#box_2');
    result = document.querySelector('#box_3');
    result.setAttribute('readonly', 'true');
    var btns = document.querySelectorAll('button');
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', calc);
    }
}

function calc() {
    // console.log(event.srcElement.innerHTML);
    var opr = event.target.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    // console.log(eval(expression));
    result.value = eval(expression);
}