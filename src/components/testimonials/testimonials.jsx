import { React, useState, useEffect } from 'react';
import "./testimonials.scss";
import { TestimonialData } from "../../data.js";

export default function Testimonials() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(TestimonialData);
    }, []);

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((cardData) => {
                    return(
                        <div className={ cardData.featured? "card featured" : "card"}>
                            <div className="top">
                                <img src="assets/right-arrow.png" className="left" alt="Left Arrow" />
                                <img src={cardData.img} className="user" alt="Right Arrow" />
                                <img src={cardData.icon} className="right" alt="Right Arrow" />
                            </div>
                            <div className="center">
                                {cardData.desc}
                            </div>
                            <div className="bottom">
                                <h3>{cardData.name}</h3>
                                <h4>{cardData.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
