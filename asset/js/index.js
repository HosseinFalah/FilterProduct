const searchData = document.querySelector("#search")

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
        console.log(allProductsData);
})

function renderProducts(_products, _filter){
    const filteredProducts = _products.filter(product => {
        return product.title.toLowerCase().includes(_filter.searchItems.toLowerCase())
    });
    console.log(filteredProducts);
    //render to dom
}

searchData.addEventListener("input", (e) => {
    filters.searchItems = e.target.value
    renderProducts(allProductsData, filters)
    console.log(e.target.value);
})