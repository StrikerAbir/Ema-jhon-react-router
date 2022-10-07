import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const {name,price,quantity,img}=product;
    return (
      <div className="review-item">
        <div>
          <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <p>{ quantity}</p>
                </div>
                <div className="delete-button">
                    <button>Delete</button>
                </div>
            </div>
      </div>
    );
};

export default ReviewItem;