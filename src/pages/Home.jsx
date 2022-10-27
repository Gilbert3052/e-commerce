import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/Home/CardProducts'
import InputSearch from '../components/Home/InputSearch'
import { getProducts } from '../store/slices/products.slice'
import "./styles/Home.css"

const Home = () => {

    const [input, setInput] = useState("")
    const [filterByText, setFilterByText] = useState()

    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        if(input !== "" && products){
            const cb = product => product.title.toLowerCase().includes(input.toLowerCase().trim())
            setFilterByText(products.filter(cb))
        }else {
            setFilterByText(products)
        }
    }, [input, products])

    console.log(filterByText)
    

  return (
    <main className="Home">
        <InputSearch 
            setInput = {setInput}
            input = {input}
        />
        <div className="home__container">
            {
                filterByText?.map(product =>(
                    <CardProducts 
                        key = {product.id}
                        product = {product}
                    />
                ))
            }
        </div>
    </main>
  )
}

export default Home