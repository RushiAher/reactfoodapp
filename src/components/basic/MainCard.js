import React, {useState} from "react";
import BillCard from "./BillCard";
import MenuCard from "./MenuCard";


const MainCard = ({ menuData }) => {
  const [placedOrderItem, setplacedOrderItem] = useState([]);
 
    const addItems = (ele) => {
      const newItem = {
            id:new Date().getTime().toString(),
            itemName: ele.name,
            itemPrice: ele.price
        };
  
        setplacedOrderItem([...placedOrderItem,newItem]);
        return;
  }
  const clearOrder = () => {
    setplacedOrderItem([]);
  }
  const placeOrder = () => {
    console.log(placedOrderItem.length);
    if (placedOrderItem.length==0) {
      alert("Please add items from menu to place order!");
      return;
    } else {
      alert("Your Order has been  placed successfully!");
      setplacedOrderItem([]);
  
      return;
    }
    
  }
  return (
    <>
      <div className="main">
        <MenuCard menuData={menuData} addItems={addItems} />
        <BillCard placedOrderItem={placedOrderItem} setplacedOrderItem={setplacedOrderItem} clearOrder={clearOrder} placeOrder={placeOrder} />
      </div>
    </>
  );
};

export default MainCard;
