import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPurchase from '../components/Purchases/CardPurchase'
import getConfig from '../utils/getConfig'

const Purchases = () => {

  const [purchase, setPurchase] = useState()

  useEffect(() => {

    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
      .then(res => setPurchase(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='Purchases'>
      <h2 className='purchases__title'>My Purchases</h2>
      <div className="purchases__container">
        {
          purchase?.map(purchase => (
            <CardPurchase 
              key = {purchase.id}
              purchase = {purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases