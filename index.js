async function getUser() {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data;
    const products = data.products;
    const result = products.map(function(products) {


        return `<div>
<h2> ${products.title}</h2>
<p> ${products.price}</p>
<img src= ${products.thumbnail} alt ="test"/>
<a href="details.html?phons_id=${products .id}">DETAILS</a>
</div>
        `
    }).join('');
    document.querySelector(".product .row ").innerHTML = result;
}

getUser();