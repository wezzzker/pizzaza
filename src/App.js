import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

const App = () => {
  return (
    <body>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Чизбургер" price={300} />
              <PizzaBlock title="Пепперони" price={350} />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
