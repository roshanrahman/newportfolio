import React from 'react';
import PropTypes from 'prop-types';
import "./PortfolioItemCard.scss";
import { FiArrowRight } from 'react-icons/fi';

let computeBackground = props => {
    let color = props.color ?? 'red';
    let endColor = props.endColor ?? 'transparent';
    let url = props.imageUrl ?? "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
// return 'linear-gradient(to right, #43008900, #82ffa1), url("https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")';
    
let str =  `linear-gradient(270.05deg, ${color} 29.86%, ${endColor} 109.41%), url("${url}")`;
console.log(str);
return str;
}

let computeShadow = props => {
    let color = props.shadowColor ?? 'black';
    return  `0px 34px 20px -18px ${color}`;
}

const PortfolioItemCard = props => {
    let computedBackground = computeBackground(props);
    let computedShadow = computeShadow(props);
    return (
        <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="portfolio-item-card" style={{backgroundImage: computedBackground, boxShadow: computedShadow}}>
            <div className="left">
                <h1>
                    {props.title}
                </h1>
                <p>
                {props.description}</p>
            </div>
       
            <div className="right">
                <div className="arrow">
<FiArrowRight/>
                </div>
                <p>{props.actionDescription}</p>
            </div>
            
        </a>
    );
};

PortfolioItemCard.propTypes = {
    title: PropTypes.string, 
    description: PropTypes.string, 
    actionDescription: PropTypes.string,
    imageUrl: PropTypes.string, 
    color: PropTypes.string,
    endColor: PropTypes.string,
    shadowColor: PropTypes.string,
    linkUrl: PropTypes.string
};

export default PortfolioItemCard;