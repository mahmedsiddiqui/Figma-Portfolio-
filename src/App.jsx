import React from 'react'
import  CaseStudies from './pages/CaseStudies'
import Home from "../src/pages/Home";
import Testimonial from './pages/Testimonial';
import Recentwork from './pages/Recentwork';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Getintouch from './pages/Getintouch';


const router =createBrowserRouter(
  [
    
     { path:"/" ,element:<Home/>},
     {path:"/testimonial" ,element:<Testimonial/>},
     {path:"/recentwork" ,element:<Recentwork/>},
     {path:"/casetudies" ,element:<CaseStudies/>},
     {path:"/getintouch" ,element:<Getintouch/>}
   
  

    
  ]
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
     
    </div>
  )
}

export default App