import ProductsList from './ProductsList'
import { useState,useEffect } from 'react';
import Search from './search.jsx'
import Gallery  from './gallery';
import ClipLoader from "react-spinners/ClipLoader";
const Blog=()=>{

 const [products,setProducts]=useState([])
 const [productLoading,setProductLoading]=useState(true)
 
const loadproduct=()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=> res.json()
  ).then(res=>{
    setProductLoading(false)
    setProducts(res)
  }).catch(error=>console.log(error))

 }

useEffect(()=>{

 loadproduct();

},[])





console.log(products)
 const hello=(a)=>{
  fetch('https://fakestoreapi.com/products').then(res=>{return res.json()}).then(res=>{
  
   const search=res.filter(f=>{
    
    if (f.category.charAt(0)===a.charAt(0))
    return f;
     console.log("match")
     //console.log(a)
   })
   a?
   setProducts(search) : loadproduct();
      
    })
  }

    
      
 

    return(
             
         
      <section class="container text-gray-600 body-font relative "> 
      
      <Search s={hello}/>
           <br></br>
      {productLoading ?<div class='flex justify-center m-20'><ClipLoader /> </div>:
      <span>{products.length!=0 ? <div id='py' class=" px-5 py-14 mx-auto">
      <h2>New Collection </h2><hr></hr><br></br>
      <div class=" flex flex-wrap -m-4">
        <ProductsList products={products}/>
            </div> 
      </div> : <h2>Not Found</h2>}</span>
}
      
 


      <Gallery/>
     <br></br>
    </section>

    );
}
export default Blog;