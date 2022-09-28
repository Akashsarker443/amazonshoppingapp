import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} =props;
    console.log(cart)
    
     
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping +
    }
     



    return (
        <div className='cart'>
               <h3>order summery</h3>
             <p>Total cart:{cart.length}</p>
             <p>Total Price:${total} </p>
             <p>Total shipping:</p>
             <p>Tax:</p>
             <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;