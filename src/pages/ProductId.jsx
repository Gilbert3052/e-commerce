import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import SliderImgs from '../components/ProductId/SliderImgs'
import "./styles/ProductId.css"

const ProductId = () => {

    const [product, setProduct] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }, [id])
    
    const handleNavigate = () => {
        navigate(`/`)
    }

  return (
    <div className='Product__id'>
      <div className="GoBack-container">
        <button className='GoBack' onClick={handleNavigate}>Home</button>
        <div className="circle"></div>
        <p className="GoBack__title">{product?.title}</p>
      </div>
      <div className="product-container">
        <div className="product-container__item">
          <SliderImgs 
            product = {product}
          />
        </div>
        <div className="product-container__item">
          <ProductInfo 
            product = {product}
          />
        </div>
      </div>
      <SimilarProducts 
        product = {product}
      />
    </div>
  )
}

export default ProductId