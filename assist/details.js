const getCategoryProducts = async()=>{

const urlparams = new URLSearchParams(window.location.search);
const categoryName = urlparams.get('category');
const {data} = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);

return data;

}

const displayProducts=async()=>{

const products=await getCategoryProducts();

const result= products.map((product)=>
    `
<div class="product">
<img src="${product.image}"/>
<h2>${product.title}</h2>
<p>${product.price}</p>
</div>`
).join('');

document.querySelector(".products .row").innerHTML=result;

console.log(products);


}

displayProducts();