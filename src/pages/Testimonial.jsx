import React from 'react'
import Navbar from '../components/Navbar'
const Testimonial = () => {
  return (
    <>
    <Navbar/>
    <h1 className='title'   >Testimonials</h1>
    
    <div className="reviews">
    <div className="box">
      <div className="inner">
      <p className='review-text' >Lorem ipsum dolor rendis quos nemo optio eum fugiat est in cupiditate doloribus, similique exercitationem aliquam autem suscipit ex laudantium!</p>
     <br />
      <div className='profile' >
        <img className='reviewer-picture' height="70px" width="70px" src="data:image/jpeg;base64,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" alt="" />
        <h2>Lilly</h2>
      </div>
     
      </div>
    </div>

  
   
   
    <div className="box">
      <div className="inner">
      <p className='review-text' >Lorem ipsum dolor rendis quos nemo optio eum fugiat est in cupiditate doloribus, similique exercitationem aliquam autem suscipit ex laudantium!</p>
     <br />
      <div className='profile' >
        <img className='reviewer-picture' height="70px" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLlX5dSzpUC_oL0g0gcoLdwRf-LNFlFZAjw&s" alt="" />
        <h2>Andrew Tate</h2>
      </div>
     
      </div>
    </div>
    </div>


<br />



    <div className="reviews-two">
    <div className="box">
      <div className="inner">
      <p className='review-text' >Lorem ipsum dolor rendis quos nemo optio eum fugiat est in cupiditate doloribus, similique exercitationem aliquam autem suscipit ex laudantium!</p>
     <br />
      <div className='profile' >
        <img className='reviewer-picture' height="70px" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysOZnaheInIjGLSITt6CRfGtCCCET8RFAZw&s" alt="" />
        <h2>Mrs.Rose</h2>
      </div>
     
      </div>
    </div>

  
   
   
    <div className="box">
      <div className="inner">
      <p className='review-text' >Lorem ipsum dolor rendis quos nemo optio eum fugiat est in cupiditate doloribus, similique exercitationem aliquam autem suscipit ex laudantium!</p>
     <br />
      <div className='profile' >
        <img className='reviewer-picture' height="70px" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbu3vikTenBD-KfH9gwGG7N_rtaCwa8rxLA&s" alt="" />
        <h2>sarah</h2>
      </div>
     
      </div>
    </div>
    </div>
    
   
    </>
  )
}
export default Testimonial
