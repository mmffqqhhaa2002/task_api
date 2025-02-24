const getCategoires=async()=>{

const {data}=await axios.get('https://fakestoreapi.com/products/categories');

return data;
}


const displayCategories=async ()=>{

const categories=await getCategoires();

const result = categories.map( (category)=>
    
`<div class="category">

<h2>${category}</h2>
<a href="./details.html?category=${category}" target=_blank>details</a>

</div>
`
).join('');

console.log(categories);
document.querySelector(".categories .row").innerHTML=result;
document.querySelector(".loading").classList.add("d-none");

}
displayCategories();