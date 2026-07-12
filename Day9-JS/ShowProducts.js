let all = document.querySelector(".all");
let cart = document.querySelector("#cart");
let searchBtn =document.getElementById("searchBtn");
let search = document.getElementsByName("search")[0];

async function Products() {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json()
    console.log(products)
    products.map((product) => {
        all.innerHTML += `
                <div style="width: 70%;
                        height: 600px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding:10px;
                        border: 1px solid black;
                        border-radius: 10px;">
                <img style="height: 55%; " src=${product.image} alt="image-product">
                <h4 id="title" style="height:10%">Product Name : ${product.title}</h4>
                <h4  height:15% font-size="20px">Price : <span id="price">${product.price}</span>$</h4>
                <input height:15%" class="btn" type="button" value="Add to Cart">
                </div>`
                console.log(parseFloat(product.price))
               
            
            })
    

    searchBtn.addEventListener("click",function(){
        all.innerHTML =""
    products.map((pro)=>{
            if(pro.title.toLowerCase().includes(search.value.toLowerCase())){
                all.innerHTML += `
                <div style="width: 70%;
                        height: 600px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding:10px;
                        border: 1px solid black;
                        border-radius: 10px;">
                <img style="height: 55%; " src=${pro.image} alt="image-product">
                <h4 id="title" style="height:10%">Product Name : ${pro.title}</h4>
                <h4 id="price" height:15% font-size="20px">Price :${pro.price}$</h4>
                <input height:15%" class="btn" type="button" value="Add to Cart">
                </div>` 
            }
        });
        

    
    })
    
    
    }

Products()

document.addEventListener("click", function (e) {
    
    if (e.target.classList.contains("btn")) {
        let cart_products = e.target.parentElement;
        
       let product = {
            title: cart_products.querySelector("#title").innerText,
            price: cart_products.querySelector("#price").innerText,
            image: cart_products.querySelector("img").src,
            quantity :1,
        };
        cart_products= JSON.parse(localStorage.getItem("cart_products")) || [];

        cart_products.push(product);
        console.log(cart_products);
        localStorage.setItem("cart_products",JSON.stringify(cart_products));
        

    }



})
