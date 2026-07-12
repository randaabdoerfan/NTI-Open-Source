let all2 = document.querySelector(".all2");
let total = document.querySelector("#h1");
// let cost = localStorage.setItem("cost",0)
let cart_products = JSON.parse(localStorage.getItem("cart_products")) || [];
let cost = 0;
console.log(cart_products)


function addCart() {

    all2.innerHTML = "";

    cart_products.map((pro, id) => {
        console.log(pro)

        all2.innerHTML += `
            <div class="container" style="
                width: 70%;
                height: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding:10px;
                border: 1px solid black;
                border-radius: 10px;">

                <img src="${pro.image}" style="width:150px;height:150px">

                <h3>${pro.title}</h3>

                <h4>Price :<span>${pro.price}</span></h4>

                <h4>Quantity: ${pro.quantity}</h4>

                <div style="display:flex; gap:10px; justify-content:center;">

                    <input type="button" onclick="increase(${id})" value="+">
                    <input type="button" onclick="decrease(${id})" value="-">

                    <input style="background-color:red;" type="button" onclick="removeItem(${id})" value="Remove"

                </div>
            </div>
        `;
        cost = cost + eval(parseInt(pro.price)*pro.quantity)

        console.log(parseFloat(pro.price))
         total.innerHTML =`Total Cost :${cost}` 
        //  total.innerHTML +=cost 

    });
}

addCart();



function updateStorage() {
    localStorage.setItem("cart_products", JSON.stringify(cart_products));
}



function increase(index) {
    cart_products[index].quantity += 1;
    

    updateStorage();
    addCart();
    document.addEventListener("click",function(e){
        price = e.target.parentElement.parentElement.children[2].children[0].innerText

        cost += eval(parseFloat(price) *(cart_products[index].quantity))

    })
}

function decrease(index) {
    cart_products[index].quantity -= 1;


    if (cart_products[index].quantity <= 0) {
        cart_products.splice(index, 1);
        quantity=0;
        cost -= eval(parseFloat(price) * (cart_products[index].quantity))
    }

    updateStorage();
    addCart();
     document.addEventListener("click",function(e){
        price = e.target.parentElement.parentElement.children[2].children[0].innerText
        
    })
}



function removeItem(index) {
    cart_products.splice(index, 1);
    quantity=0;
        cost -= eval(parseFloat(price) * (cart_products[index].quantity))

    updateStorage();
    addCart();
}
