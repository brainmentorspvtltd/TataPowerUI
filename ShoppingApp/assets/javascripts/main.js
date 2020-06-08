window.addEventListener("load", initEvents);

var cart;
var overlay;
function initEvents() {
    loadProducts();
    cart = document.querySelector("#cart");
    overlay = document.querySelector('.overlay');
    overlay.addEventListener("click", hideCart);
    document.querySelector(".cart_btn").addEventListener("click" , showCartItems);
    showCartCount();
}

function showCartCount() {
    document.querySelector("#cart_count").innerHTML = obj.cartItems.length;
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

// function showCart() {
//     cart.classList.toggle('showCart');
//     overlay.style.display = 'block';
// }

function addToCart() {
    var p_id = event.target.value;
    for(var i = 0; i < products.length; i++) {
        if(p_id == products[i].p_id) {
            var current_obj = products[i];
            break
        }
    }
    // console.log(obj);
    obj.addItem(current_obj.p_id, current_obj.p_name, current_obj.p_price,current_obj.p_img);
    showCartItems();
    showCartCount();
}

function showCartItems() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'block';
    var table = document.querySelector("#cartList");
    table.innerHTML = "";
    obj.cartItems.forEach(function(p) {
        var tr = table.insertRow();
        tr.insertCell().innerHTML = '<img src="'+p.p_img+'" alt="image">';
        tr.insertCell().innerHTML = p.p_name;
        tr.insertCell().innerHTML = p.p_price;
        tr.insertCell().innerHTML = 'Qty : 1';
        tr.insertCell().innerHTML = "<button><i class='fas fa-trash'></button>";
        table.appendChild(tr);
    });
}

function hideCart() {
    cart.classList.toggle('showCart');
    overlay.style.display = 'none';
}
