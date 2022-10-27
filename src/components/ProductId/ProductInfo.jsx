import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCarts } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "./styles/ProductInfo.css"

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()

    const handleMinus = () => {
        if(counter - 1 > 0){
            setCounter(counter - 1)
        }
    }

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleAddCart = () => {
        const data = {
            id: product.id,
            quantity: counter
        }
        const url = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"
        axios.post(url, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllCarts())
            })
            .catch(err => console.log(err))
    }

  return (
    <article className='ProductInfo'>
        <h2 className='product__info-title'>{product?.title}</h2>
        <p className="product__info-description">{product?.description}</p>
        <footer className='product__info-footer'>
            <div className="product__info-price-container">
                <p className="product__info-price-label">Price:</p>
                <span className='product__info-price-value'>$ {product?.price}</span>
            </div>
            <div className="product__info-quantity-container">
                <p className="product__info-quantity-label">Quantity:</p>
                <div className='counter'>
                    <div className="counter__minus" onClick={handleMinus}>-</div>
                    <div className="counter__number">{counter}</div>
                    <div className="counter__add" onClick={handleAdd}>+</div>
                </div>
            </div>
            <button onClick={handleAddCart} className='btn__add__cart'>Add to cart</button>
        </footer>
    </article>
  )
}

export default ProductInfo