import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./menuApi";
import Navbar from "./Navbar";
import MainCard from "./MainCard"

const uniqueCategory = [
  ...new Set(
    Menu.map((currEle) => {
      return currEle.category;
    })
  ),"All"
];

export const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [categories, setcategories] = useState(uniqueCategory);

    const filterItem = (category) => {
        if (category === "All") {
             setmenuData(Menu);
            return;
      }
    const updatedMenu = Menu.filter((currItem) => {
      return currItem.category === category;
    });
    setmenuData(updatedMenu);
  };

  return (
    <>
      <Navbar
        uniqueCategory={categories}
        filterItem={filterItem}
          />
      <MainCard menuData={menuData} />
    </>
  );
};
