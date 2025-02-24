const getproducts= async () => {

const {data} = await axios.get("https://fakestoreapi.com/products");

return data;




}

const displayproducts= async () => {

const products = await getproducts();

const result=products.map( product =>

     `<div class='product'> 
    <h2>${product.title}</h2>
    <img src="${product.image}" class='product-image' />
    </div>`

).join(' ');

document.querySelector(".products .row").innerHTML = result;


customModal();
}

displayproducts();


function customModal(){

    const modal=document.querySelector(".my_modal");
    const xbtn=document.querySelector(".x-btn");
    const leftbtn=document.querySelector(".left-btn");
    const rightbtn=document.querySelector(".right-btn");
    const images=Array.from(document.querySelectorAll(".product-image"));
    let currentindex=0;
    images.forEach(function(img){

            img.addEventListener('click',(e)=>{

                
                modal.classList.remove('d-none');
                modal.querySelector("img").setAttribute("src",e.target.src);
                const currentimg=e.target;
                 currentindex=images.indexOf(currentimg);
                console.log(currentindex);
                // console.log(currentimg);

            });

        

    });
    xbtn.addEventListener("click",(e)=>{


        modal.classList.add('d-none');
    });

    rightbtn.addEventListener("click",(e)=>{

currentindex++;
if(currentindex >= images.length){

currentindex=0;

}
const src=images[currentindex].getAttribute("src");
modal.querySelector("img").setAttribute("src",src);
    });

    leftbtn.addEventListener("click",(e)=>{

currentindex--;
if(currentindex < 0){

currentindex=images.length-1;

}
const src=images[currentindex].getAttribute("src");
modal.querySelector("img").setAttribute("src",src);
    });

    document.addEventListener("keydown",(e)=>{

        if(e.code=="ArrowRight"){

            currentindex++;
if(currentindex >= images.length){

currentindex=0;

}
const src=images[currentindex].getAttribute("src");
modal.querySelector("img").setAttribute("src",src);

        }
        else if(e.code=="ArrowLeft"){
            currentindex--;
if(currentindex < 0){

currentindex=images.length-1;

}
const src=images[currentindex].getAttribute("src");
modal.querySelector("img").setAttribute("src",src);
        }
        else if(e.code=="Escape"){

 modal.classList.add('d-none');
        }
    });

    
   
}




