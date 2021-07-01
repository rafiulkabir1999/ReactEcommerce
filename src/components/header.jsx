import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineHome ,AiOutlinePhone} from 'react-icons/ai'
import Menubar from './menubar.jsx'
import {Link}  from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import {IoCartOutline} from 'react-icons/io5'
import {IoIosNotificationsOutline} from 'react-icons/io'

const Header=()=>{

 

    return(
   
     
        <header class="text-gray-600 body-font w-100 top-0 mx-auto fixed z-10">
        <div class="container mx-auto flex flex-wrap  flex-col md:flex-row items-center h-auto">
          <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-lg justify-center">
            <Link class="mr-5  bg black  hover:text-gray-900 cursor-pointer" to='/'>Shop</Link>
            <Link class="mr-5 bg black  hover:text-gray-900 cursor-pointer" to='/contact'>Contact</Link>
            <a class="mr-5  bg black hover:text-gray-900 cursor-pointer" href='blog'>Third Link</a>
            <a class="mr-5 bg black  hover:text-gray-900 cursor-pointer" href='blog'>Fourth Link</a>
          </nav>
          <ul class='flex flex-wrap justify-center align-center justify-between text-white text-2xl p-0 m-0'>
           
            <li class='p-2  text-2xl cursor-pointer'><IoCartOutline/></li>
            <li class='p-2 text-2xl cursor-pointer'><IoIosNotificationsOutline/></li>
             <li class="p-2 text-2xl cursor-pointer"><CgProfile/></li>
          </ul>
         
        </div>
      </header>
 
    );
}
export default Header;