import React, { useState } from 'react'
import "./styles/SliderImgs.css"

const SliderImgs = ({product}) => {

    const [indexImg, setIndexImg] = useState(0)

    const handlePrev = () => {
        if(indexImg - 1 < 0){
            setIndexImg(product?.productImgs.length - 1)
        }else {
            setIndexImg(indexImg - 1)
        }
    }

    const handleNext = () => {
        if(indexImg + 1 > product?.productImgs.length - 1){
            setIndexImg(0)
        }else {
            setIndexImg(indexImg + 1)
        }
    }


  return (
    <div className="slider">
        <button className='slider__prev' onClick={handlePrev}>&#60;</button>
        <div className="slider__static">
            <div style={{transform: `translateX(calc(-${indexImg}/3 * 100%))`}} className="slider__move">
                {
                    product?.productImgs.map(img => (
                        <div key={img} className="img__slider-container">
                            <img className="img__slider" src={img} />
                        </div>
                    ))
                }
            </div>
        </div>
        <button className='slider__next' onClick={handleNext}>&#62;</button>
    </div>
  )
}

export default SliderImgs