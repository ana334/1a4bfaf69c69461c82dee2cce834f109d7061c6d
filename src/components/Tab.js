import React, { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('lunch');
  return (
    <>
      <div className="package">
        <div className="package__option"  onClick={()=> setActiveTab('lunch')}>
          <img src="https://assetcdn.kulina.id/preliminary/lunch.svg" alt="lunch"/>
          <span>Paket Lunch</span>
          <div className={ activeTab === 'lunch' ? "triangle-bottom": "hide"}></div>
        </div>
        <div className="package__option --night" onClick={()=> setActiveTab('night')}>
          <img src="https://assetcdn.kulina.id/preliminary/dinner.svg" alt="dinner"/>
          <span>Paket Dinner</span>
          <div className={ activeTab === 'night' ? "triangle-bottom --night": "hide"}></div>
        </div>
      </div>
      <ul className="list">
        {
          [1,2,3,4,5,6,7,8,9].map((i) => (
            <li className="list__item" key={i}>
              <img src="./room.jpg" alt="dinner"/>
              <div className="list__desc">
                <div className="list__desc__left">
                  <h2>Tokyo Lunch</h2>
                  <p className="--grey">Lunch * Budget * Kitchen</p>
                  <p className="--blue">Free Delivery</p>
                </div>
                <div className="list__desc__right">
                  <p className="--price-stroked">Rp. 35.000,0</p>
                  <p className="--price">Rp. 25.000,0</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Tab;
