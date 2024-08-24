import React, { useState } from 'react'

 
   export default function Product ({cart,setCart,data}) {
    let [toggle,setToggle]=useState(true)
  return <>
  <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={data.image} alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{data.name}</h5>
                                    {/* <!-- Product price--> */}
                                    {data.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {
                                    toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                                    onClick={()=>{
                                        setCart(cart+1)     // add   product to cart
                                        setToggle(prev=>!prev)
                                    }} >Add to Cart</button></div> :
                                    <div className="text-center"><button className="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart-1)   // delete product to cart
                                    setToggle(prev=>!prev)
                                }} >Remove from Cart</button></div>
                                }
                            
                            </div>
                        </div>
                    </div>
  </>
}

