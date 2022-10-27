import React from 'react'

const CardPurchase = ({purchase}) => {

    
  console.log(purchase);
  return (
    <article className='CardPurchase'>
        <header>{purchase.createdAt}</header>
        <div className="purchase__container">
            {
                purchase.cart.products.map(product => (
                    <div key={product.id} className="purchase__product-container">
                        <h3>{product.title}</h3>
                        <p>{product.productsInCart.quantity}</p>
                        <p>$ {product.price}</p>
                    </div>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase