import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/portfolioList';
import "./portfolio.scss";
import { 
            featuredPortfolio, 
            webPortfolio,
            mobilePortfolio,
            designPortfolio,
            contentPortfolio
        } from "../../data.js";

export default function Portfolio() {
    

    //TODO: fix text centering on long strings in hover text for portfoliolist items.

    //state
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    //static data for portfolio categories TODO: move to separate file
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "branding",
            title: "Branding",
        },
    ];

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        };
    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>{
                    return(
                        <PortfolioList 
                            title={item.title} 
                            id={item.id}
                            active={selected === item.id} 
                            setSelected={setSelected}
                        />
                    );
                    }
                )}
            </ul>
            <div className="container">
                {data.map((d) => {
                    return (
                        <div className="item">
                            <img 
                                src={d.img} 
                                alt="" 
                            />
                            <h3>{d.title}</h3>
                        </div>
                    );
                    }
                )}

            </div>
        </div>
    )
}
