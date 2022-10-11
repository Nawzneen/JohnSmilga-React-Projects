import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menu, setMenu] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  function filterItems(category) {
    console.log("isworking");
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
    if (category === "all") {
      setMenu(items);
    }
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
