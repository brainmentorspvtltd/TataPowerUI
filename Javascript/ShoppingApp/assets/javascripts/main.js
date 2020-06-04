window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
}

function loadProducts() {
    var ul = document.querySelector("#productsList");
    products.forEach(function(p) {
        var li = document.createElement("li");
        ul.appendChild(li);
    });
}