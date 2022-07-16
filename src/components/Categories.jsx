import React from 'react';
import { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState(0);
  const activeCategory = (index) => {
    setActive(index);
  };
  return (
    <div className="categories">
      <ul>
        <li onClick={() => activeCategory(0)} className={active === 0 ? 'active' : ''}>
          Все
        </li>
        <li onClick={() => activeCategory(1)} className={active === 1 ? 'active' : ''}>
          Мясные
        </li>
        <li onClick={() => activeCategory(2)} className={active === 2 ? 'active' : ''}>
          Вегетарианская
        </li>
        <li onClick={() => activeCategory(3)} className={active === 3 ? 'active' : ''}>
          Гриль
        </li>
        <li onClick={() => activeCategory(4)} className={active === 4 ? 'active' : ''}>
          Острые
        </li>
        <li onClick={() => activeCategory(5)} className={active === 5 ? 'active' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  );
};

export default Categories;
