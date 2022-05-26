import React from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider({slideIndex,setSlideIndex}) {
    const text = [
        {title:"Vizyonumuz",explanation:"Lorem1 ipsum doloe penatibus et magnis dis parturient montes, nascetur r mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, "},
        {title:"Misyonumuz",explanation:"Lorem2 ipsum doloe penatibus et magnis dis parturient montes, nascetur ipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nasceipsum doloe penatibus et magnis dis parturient montes, nascer mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, "}
      ]

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length-1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length-1){
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 0){
            setSlideIndex(dataSlider.length-1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index ? "slide active-anim" : "slide"}
                    >
                        <h1>{ text[slideIndex].title}</h1>
                        <h2>{ text[slideIndex].explanation}</h2>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index)}
                    className={slideIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}