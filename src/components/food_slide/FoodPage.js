import React, { useState }  from 'react'
import { FoodSlideShowData } from './FoodSlideShowData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './foodslide.css'

const FoodPage = () => {
    const [current, setCurrent] = useState(0)
    const length = FoodSlideShowData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(FoodSlideShowData) || FoodSlideShowData.length <= 0) {
        return null;
    }
    return (

        <section className="foodslider">
            <FaArrowAltCircleLeft className='foodleft-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='foodright-arrow' onClick={nextSlide}/>

            {FoodSlideShowData.map((slide, index) => {
                return (
                    < div
                        className={index === current ? 'slide active' : 'slide'} key={index} >
            { index === current && (
                <img src={slide.image} alt='this is food page' className='foodimage' />
                        )}
                    </div>
            );
            })}
        </section>
    );
};

export default FoodPage;