import {Link } from 'react-router-dom'
const Product_cart=(props)=>{


     
    const productname=`https://source.unsplash.com/428x268/?${props.product.name}`
    console.log(productname)
    const url=`/menubar/${props.product.name}/${props.product.price}`;
    
    return(
        
        <Link  to ={url} class="lg:w-1/4 md:w-1/2 px-4 py-2 w-full ">
          <a class="block relative h-48  overflow-hidden box-shadow-img">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={productname}></img>
          </a>
          <div class=" box-shadow-text position-relative">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 px-3 py-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium px-3 pb-3">{props.product.name}</h2>
            <p class="mt-1 px-3 position-absolute right-2 top-6 bg-gray-500 rounded-full text-white">{props.product.price}</p>
          </div>
        </Link>
     
    )
}
export default Product_cart;