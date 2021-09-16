const addProductBbutton = document.querySelector('#add-product-button')
const listProductBbutton = document.querySelector('#list-product-button')
const listContainer = document.querySelector('#list-container')
const formContainer = document.querySelector('#form-container')
const productForm = document.querySelector('#productForm')
const cart = [
    
]
const products = [
    {id:1, name : "Nature", description:"Nature is Beautiful", imageUrl : "https://images.unsplash.com/photo-1631539514000-484f0ba77c05?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},

    {id:2, name : "Nature", description:"Nature is Beautiful", imageUrl : "https://images.unsplash.com/photo-1631539514000-484f0ba77c05?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    
    {id:3, name : "Nature", description:"Nature is Beautiful", imageUrl : "https://images.unsplash.com/photo-1631539514000-484f0ba77c05?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]

addProductBbutton.addEventListener('click', () => {
    console.log("show add product div");

    formContainer.style.display = "block";
    listContainer.style.display = "none";
})

listProductBbutton.addEventListener('click', () => {
    console.log("show list product div");

    listContainer.style.display = "block";
    formContainer.style.display = "none";
})

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form is Submited");

    const imageUrl = document.querySelector("#productImageUrlInput").value;
    const name = document.querySelector("#productNameInput").value;
    const description = document.querySelector("#productDescriptionInput").value;
    console.log({
        name, description, imageUrl
    });

    const product = {
        name, description, imageUrl

    }

    products.push(product);
    console.log(products);
   
    productForm.reset();
})

renderTable();

function onAddToCartClick(product , card){
    cart.push(product.id)
    card.querySelector('#addtocart').classList.add("hidden")
    card.querySelector('#removeFromCart').classList.remove("hidden")
    console.log(cart);
}

function onRemoveFromCartClick(product , card){
    
    const index =  cart.findIndex(item => item == product.id)
    cart.splice(index,1)

    card.querySelector('#addtocart').classList.remove("hidden")
    card.querySelector('#removeFromCart').classList.add("hidden")
    console.log(cart);
}

function renderTable() {
    const list = document.querySelector("#list");
    list.innerHTML = "";
    products.forEach(product => {
        const template = document.querySelector(".template");
        const card =template.cloneNode(true);
        card.style.display = "block";
        console.log(card);
        card.querySelector(".card-title").innerHTML  =product.name;
        card.querySelector(".card-text").innerHTML  =product.description;
        card.querySelector("img").src  =product.imageUrl;
        card.querySelector('#addtocart').addEventListener('click', ()=>onAddToCartClick(product,card))

        card.querySelector('#removeFromCart').addEventListener('click', ()=>onRemoveFromCartClick(product,card))

        list.appendChild(card);
    })
}

