import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllCarts } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "./styles/CartProduct.css"

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const hadleDelete = () => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(url, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllCarts())
      })
      .catch(err => console.log(err))
  }


  return (
    <article className='cart__product'>
        <h2>{product.title}</h2>
        <ul>
            <li><span>Price </span>{product.price}</li>
            <li><span>Quantity </span>{product.productsInCart.quantity}</li>
        </ul>
        <button onClick={hadleDelete}>Delete</button>
    </article>
  )
}

export default CartProduct