async function getditals() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('phons_id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = await response.data
    const { title, thumbnail,price } = data;

    document.querySelector(".title").textContent = title;
    document.querySelector(".price").textContent = price;
    document.querySelector("img").src = thumbnail;
    
   (function (e) {
        return `
<h3>${e}</h3>
     `;
    })

    

}
getditals();


