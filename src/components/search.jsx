import {GoSearch} from 'react-icons/go'
import { useState,useRef } from 'react';
const Search=(props)=>{
    const Search=useRef()
  const search=()=>{   props.s(Search.current.value)}
 
    return(
       <div class='container input-back flex'>
            <div class='xl:w-1/3 lg:w-2/4  md:w-1/2 sm:w-80% w-100% s m-auto '>
           <div class='flex justify-center  h-12 '>
               <input class='border-1  px-2 text-center outline-none flex-grow-1 text-lg input-option' ref={Search} placeholder="   Search here"></input>
               <button onClick={search} class="bg-green-500 text-white   px-14  hover:cursor-pointer text-2xl search-button"><GoSearch/> </button>
           </div>
           <marquee>This is search Here</marquee> 
        </div>
       </div>
    )
}
export default Search;