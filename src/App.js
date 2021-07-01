import Header from './components/header.jsx'
import Blog from './components/blog.jsx'
import './App.css';
import Menubar from './components/menubar.jsx'
import Contact from './components/contact.jsx'
import Product from './components/products.jsx'
import Footer from './components/footer.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";

function App() {
  return (
   <div>
     
     
     
     <Router><Header/>
          
       <Switch>
         <Route path='/' exact>
                  <Blog/>
         </Route>

         <Route path='/contact' exact>
             <Contact/>
         </Route>

         <Route path='/menubar/:id/:price' exact>
             <Product/>
         </Route>

       </Switch>
       <Footer/>
     </Router>
      
   </div>
  );
}

export default App;
