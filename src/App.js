import React, { useState } from 'react'
import './App.css';
import Categories from './components/Categories';
import MenuItems from './components/MenuItems';
import menu from './menu'

const allCategories = ["All",...new Set(menu.map(item=>item.category))];


function App() {

  const [menuList,setMenuList] = useState(menu);
  const [categories,setCategories] = useState(allCategories);

  function filterCategories(cat){

      if(cat === "All"){
        setMenuList(menu);
       
      }else{
        const newMenu = menu.filter(item=>item.category === cat)
        setMenuList(newMenu);
      }


    
  }

  return (
    <div className="container">
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>

      <Categories categories={categories} filterCategories={filterCategories}/>

      <MenuItems menuList={menuList}  />

    </div>
  );
}

export default App;
