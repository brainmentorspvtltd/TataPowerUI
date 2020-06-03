window.addEventListener("load", initEvents);

var f_num;
var s_num;
var result;
function initEvents() {
    f_num = document.querySelector('#box_1');
    s_num = document.querySelector('#box_2');
    result = document.querySelector('#box_3');
    result.setAttribute('readonly', 'true');

    f_num.addEventListener('blur', checkBlank);
    // s_num.addEventListener('change', checkBlank);
    s_num.addEventListener('keyup', validateNum);

    var btns = document.querySelectorAll('button');
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', calc);
    }
}

function calc() {
    var opr = event.target.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    result.value = eval(expression);
}

function checkBlank() {
    // console.log(event.target.value);
    // alert("Blur Event Called...");
    var num = event.target.value;
    // Truthy and Falsy
    // if(!num) {
    //     document.querySelector('#err_1').innerHTML = 'Please Enter a number...';
    //     f_num.style.border = '1px solid red';
    // }
    // else {
    //     document.querySelector('#err_1').innerHTML = '';
    //     f_num.style.border = '1px solid green';
    // }

    if(isEmpty(num)) {
        document.querySelector('#err_1').innerHTML = 'Please Enter a number...';
        event.srcElement.className = 'error';
    }
    else {
        document.querySelector('#err_1').innerHTML = '';
        event.srcElement.className = 'success';
    }
}

function isEmpty(str) {
    return (str == undefined || str == '' || str == null || str == NaN) ? true : false;
}

function validateNum() {
    var pattern = /([A-Z|a-z|!|@|#|$|%|^|&|*])/;
    var str = s_num.value;
    if (pattern.test(str)) {
        document.querySelector('#err_2').innerHTML = 'Please Enter a number...';
    }
    else {
        document.querySelector('#err_2').innerHTML = '';
    }

    if(isEmpty(num)) {
        document.querySelector('#err_2').innerHTML = 'Please Enter a number...';
        event.srcElement.className = 'error';
    }
    else {
        document.querySelector('#err_2').innerHTML = '';
        event.srcElement.className = 'success';
    }
}


// Form
// - name  		- blur event
// - email			- regex (keyup event)
// - pwd			- check strength (keyup event) (if pwd == 0 -> enter password, 1-5 (weak), 5-9 (average), above 9 (strong))
// - confirm pwd		- pwd == confirm (change event)	