window.addEventListener("load", initEvents);
var expression = "";
var box;

function initEvents() {
    box = document.querySelector("#box");
    var num_btns = document.querySelectorAll(".num");
    for(var i = 0; i < num_btns.length; i++) {
        num_btns[i].addEventListener("click", appendNum);
    }

    var opr_btns = document.querySelectorAll(".opr");
    for(var i = 0; i < opr_btns.length; i++) {
        opr_btns[i].addEventListener("click", appendOpr);
    }
    document.querySelector(".calc").addEventListener("click", calc);
}

function appendNum() {
    var num = event.target.innerHTML;
    expression += num;    
    box.value = expression;
}

function appendOpr() {
    var opr = event.target.innerHTML;
    expression += opr;    
    box.value = expression;
}

function calc() {
    var result = eval(expression);
    box.value = result;
}