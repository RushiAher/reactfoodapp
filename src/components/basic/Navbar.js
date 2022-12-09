import React from "react";

const Navbar = ({ uniqueCategory, filterItem }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueCategory.map((currEle) => {
            return (
              <>
                <button
                  className="btn-group-item"
                  onClick={() => filterItem(currEle)}
                >
                  {currEle}
                </button>
              </>
            );
          })}
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
