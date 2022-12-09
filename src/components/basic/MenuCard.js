// rafce
import React, { useState } from "react";

const MenuCard = ({ menuData, addItems }) => {
    
  return (
      <>
         
        <div className="main-container">
          {menuData.map((currElem) => {
            return (
              <>
                <div className="main-card-container" key={currElem.id}>
                  <div className="card-head">
                    <div className="card-icon">
                      <img src="images/food-icon.png" alt="" />
                    </div>
                    <span className="card-subtitle">Foodie Resturant</span>
                  </div>
                  <div className="card-body">
                    <div className="card-img">
                      <img src={currElem.image} alt="burger-image" />
                    </div>
                    <div className="card-title">{currElem.name}</div>
                    <div className="card-description">
                      <p>{currElem.description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="card-order" onClick={()=>addItems(currElem)}>Add Item</div>
                      <div className="card-price">&#8377; {currElem.price}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
       
    
    </>
  );
};

export default MenuCard;
