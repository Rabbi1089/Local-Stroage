
//1. Normally get value from html ---------------->const addProduct
//2. show that value in li ------------> const ShowProduct
//3. to save a value in a local stroage
        // 1.sent data to saveProductLocalStroage from add product
        // 2.saveProductLocalStroage recive and 
        // 3.it check getStoredShoppingCart
       // 4. set value for obj

const addProduct = () => {
    const productName = document.getElementById('product-name');
    const name = productName.value;
    const productQuantity = document.getElementById('product-quantity');
    const Quantity = productQuantity.value;
    //console.log(name,Quantity);
    productName.value = '';
    productQuantity.value = '';
    ShowProduct(name,Quantity)
    saveProductLocalStroage(name,Quantity)
}

const ShowProduct = (name,Quantity) =>{
   const displayProduct = document.getElementById('display-product');
   const li = document.createElement('li');
   li.innerText = `Product name : ${name} Product Quantity : ${Quantity}`;
   displayProduct.appendChild(li);
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductLocalStroage = (name , quantity) =>{
    const cart = getStoredShoppingCart();
    //set value for obj
    cart[name] = quantity;
    const cartStrignfy = JSON.stringify(cart);
    console.log(cartStrignfy)
    //this will set value in local storage
    localStorage.setItem('cart' , cartStrignfy)

}

const displaySavedProductFromLocalStroage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity);
        //show in div
        ShowProduct(product, quantity);
    }

}
displaySavedProductFromLocalStroage();
