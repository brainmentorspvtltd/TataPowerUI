window.addEventListener("load", initEvents);

var cart;
var overlay;
function initEvents() {
    loadProducts();
    cart = document.querySelector("#cart");
    overlay = document.querySelector('.overlay');
    overlay.addEventListener("click", hideCart);
}

function loadProducts() {
    var ul = document.querySelector("#productsList");
    products.forEach(function(p) {
        var li = document.createElement("li");
        var img = document.createElement('img');
        var h4 = document.createElement('h4');
        var span = document.createElement('span');
        var button = document.createElement('button');

        img.src = p.p_img;
        h4.innerHTML = p.p_name;
        span.innerHTML = p.p_price;
        button.innerHTML = 'Add to Cart';
        button.setAttribute('value',p.p_id);

        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        button.addEventListener("click", addToCart);

    });
}

function addToCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'block';

    var p_id = event.target.value;
    for(var i = 0; i < products.length; i++) {
        if(p_id == products[i].p_id) {
            var obj = products[i];
            break
        }
    }
    console.log(obj);
}

function hideCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'none';
}