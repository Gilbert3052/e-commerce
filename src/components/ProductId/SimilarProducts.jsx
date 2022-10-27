import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../Home/CardProducts'
import "./styles/SimilarProducts.css"

const SimilarProducts = ({product}) => {
    
    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(categories && product){
            const cb = category => category.name === product.category
            setIdCategory(categories.filter(cb)[0].id)
        }
    }, [categories])

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`)
            .then(res => setSimilarProducts(res.data.data.products))
            .catch(err => console.log(err))
    }, [idCategory, product])

  return (
    <div className='Similar__products'>
        <h2>Similar Products</h2>
        <div className="similar__products-container">
        {
            similarProducts?.map(similar => (
                (similar.title !== product?.title) &&
                    <div key={similar.id} className="similar">
                        <CardProducts 
                            key = {similar.id}
                            product = {similar}
                        />
                    </div>
            ))
        }
        </div>        
    </div>  
  )
}

export default SimilarProducts