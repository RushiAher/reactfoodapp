import React, {useState, useEffect} from "react";

const BillCard = ({ placedOrderItem, setplacedOrderItem, clearOrder, placeOrder}) => {
  let totalBill = 0; 
  let orderNumber = 1000;
  const deleteItem = (index) => {
    const newItems = placedOrderItem.filter((currElem) => {
      return currElem.id !== index;
    })
    setplacedOrderItem([...newItems]);
  }
  
    return (
        <>
                <div className="bill-container">
        <div className="bill-head">
            <h3>Order Number: {orderNumber}</h3>
        </div>

        {placedOrderItem.map((currElem) => {
            totalBill += currElem.itemPrice;
          return (
            <>
              <div className="bill-ordered-item" key={currElem.id}>
                <span className="bill-item-name">{currElem.itemName}</span>
                <span className="bill-item-price">
                  &#8377; {currElem.itemPrice}
                </span>
                <span className="bill-cancel-btn">
                  <i class="fa-solid fa-xmark fa-3x" onClick={()=>deleteItem(currElem.id)}></i>
                </span>
              </div>
            </>
          );
        })}
              

        <div className="bill-order-summary">
          <div className="bill-summary-head">Order Summary</div>
                  <div className="bill-subtotal">SubTotal: &#8377; {totalBill}</div>
        </div>
        <div className="bill-footer">
          <button className="bill-reset" onClick={clearOrder}>Reset</button>
          <button className="bill-place-order" onClick={placeOrder}>Place Order</button>
        </div>
      </div>
            </>
  );
};

export default BillCard;

