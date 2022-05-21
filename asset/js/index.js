const searchData = document.querySelector("#search");
const allProducts = document.querySelector(".products__center");
const btns = document.querySelectorAll(".btn")

let allProductsData = []

const filters = {
    searchItems: ""
}

document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/items")
        .then(response => {
            allProductsData = response.data
            // render products on DOM:
            renderProducts(response.data, filters)
        })
        .catch(error => error)
})

function renderProducts(_products, _filter){
    const filteredProducts = _products.filter(product => {
        return product.title.toLowerCase().includes(_filter.searchItems.toLowerCase())
    });
    //render to dom
    allProducts.innerHTML = ''
    filteredProducts.forEach((item, index) => {
        // create
        allProducts.insertAdjacentHTML("beforeend",
        `<div class="product">
            <div class="product__imgContainer">
                <img src="${item.image}" class="product__img" alt="p-${index}">
            </div>
            <div class="product__desc">
                <p class="product__title">${item.title}</p>
                <p class="product__price">$${item.price}</p>
            </div>
        </div>`)
        // content
        // append to Product:
    })
}

searchData.addEventListener("input", (e) => {
    filters.searchItems = e.target.value
    renderProducts(allProductsData, filters)
})

//filter based on groups:

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;
        filters.searchItems = filter;
        renderProducts(allProductsData, filters)
    })
})