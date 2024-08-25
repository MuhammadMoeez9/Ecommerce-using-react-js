import React from "react";

function Sidebar({ categoryfunc, pricefunc, max }) {
  return (
    <aside className="h-[700px] w-[300px] ml-2 mt-4 ">
      <div className="border">
        <select name="language" id="language" onChange={categoryfunc}>
          <option value="All">Default</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;
