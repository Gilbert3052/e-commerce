import { isAllOf } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getAllCarts, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const [total, setTotal] = useState(0)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCarts())
  }, [])

  const handleCheckout = () => {
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
  }
    const url = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios.post(url, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    if(cart){
      const result = cart.products.reduce((acc, cv) =>{
        return acc + cv.price * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])
  

  return (
    <div className='Cart'>
      <div className="cart__container">
        {
          cart?.products.map(product => (
            <CartProduct 
              key={product.id}
              product = {product}
            />
          ))
        }
      </div>
      <h2>Total: ${total}</h2>
      <button onClick={handleCheckout} className='checkout'>Checkout</button>
    </div>
  )
}

export default Cart