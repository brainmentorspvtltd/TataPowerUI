// function Product(p_id,p_name,p_price,p_img){
//     this.p_id = p_id;
//     this.p_name = p_name;
//     this.p_price = p_price;
//     this.p_img = p_img;
// }

class Product {
    constructor(p_id, p_name, p_price, p_img) {
        this.p_id = p_id;
        this.p_name = p_name;
        this.p_price = p_price;
        this.p_img = p_img;
    }
}

var obj = {
    cartItems : [],
    "addItem" : function(p_id, p_name, p_price, p_img) {
        var item = new Product(p_id, p_name, p_price, p_img);
        this.cartItems.push(item);
        console.log(this.cartItems);
    },

    "deleteItem" : function() {

    },
    
    "searchItem" : function() {

    }
}