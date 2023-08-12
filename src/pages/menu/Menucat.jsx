import React, { useState } from "react";
import "./menumodal.css";

const Menucat = () => {
  const menus = ["FOOD MENU", "DRINKS MENU", "OTHERS"];
  const menus_snippet = [];

  menus.forEach((element) => {
    menus_snippet.push(
      <div class="categories">
        <a href="/Itemslist">{element}</a>
      </div>
    );
  });

  return (
    <div className="parentcontainer">
      <div class="menucontainer">{menus_snippet}</div>
    </div>
  );
};

export default Menucat;
