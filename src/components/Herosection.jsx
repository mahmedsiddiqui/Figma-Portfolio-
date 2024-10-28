import React from 'react'

const Herosection = () => {
    return (
        <>
            <div className="hero-section">

                <div>
                    <br />
                    <br />
                    <h1 className='name'  >Ahmed Siddiqui</h1>
                    <h4 className='text'  >Lorem ipsum dolor sit amet conset sed, nim explicabo voluptatibus voluptate iure porro eligendi eos recusandae, dolorem beatae.</h4>
                    <button className='hero-btn' >Let's get Started!</button>
                
                </div>
                <div   >
                    <img height="350px" width="350px" className='profile-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7CH2bTx8kyDAU6Zc6rR0fX2X_4NGiANCTw&s" alt="" />
                </div>
            </div>
        </>
    )
}

export default Herosection