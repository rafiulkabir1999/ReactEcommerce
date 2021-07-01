import ProductsList from './ProductsList'
import { useState } from 'react';
import Search from './search.jsx'
import Gallery  from './gallery';
const Blog=()=>{

 const [products,setProducts]=useState([{name:'Television',price:12},{name:'Mango',price:1500},{name:'Sunglass',price:1200},{name:'Bird',price:2400},{name:'watch',price:10},{name:'Laptop',price:32100},{name:'R15',price:350000},{name:'Apple',price:30000},{name:'Tinder',price:21030},{name:"chocolate",price:450},{name:'Burger',price:555},{name:'pizza',price:1200}])

 console.log(products)
 const hello=(a)=>{
const newp=products.filter(p=>{ return p.name==a})
  setProducts(newp)
 }

    return(
             
         
      <section class="text-gray-600 body-font relative " style={{top:'120px'}}> 
      
      
      <div id='py' class="container px-5 py-14 mx-auto"><Search s={hello}/><hr></hr><br></br>
      <div class="flex flex-wrap -m-4">
            <ProductsList products={products}/>
            </div> 
      </div>
      <Gallery/>
     
    </section>

    );
}
export default Blog;