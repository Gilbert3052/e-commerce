import React from 'react'
import "./styles/CardProducts.css"
import 'boxicons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { useDispatch } from 'react-redux'
import { getAllCarts } from '../../store/slices/cart.slice'

const CardProducts = ({product}) => {
 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = () => {
        const data = {
            id: product.id,
            quantity: 1
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
    <div className='CardProduct'>
        <div className="product">
            <div onClick={handleNavigate} className='product__img'>
                <img src={product.productImgs[0]} alt={product.title} />
            </div>
            <div className="product__info">
                <div className="product__info__title">
                    <h3 onClick={handleNavigate} className="product__title">{product.title}</h3>
                </div>
                <div className="product__price-add">
                    <div className="product__price">
                        <span className='product__price-label'>price:</span>
                        <p className='product__price-value'>$ {product.price}</p>
                    </div>
                    <button className='btn__card' onClick={handleAddCart}><box-icon color="white" name='cart-add'></box-icon></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CardProducts