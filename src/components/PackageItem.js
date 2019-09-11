import React from 'react';

const PackageItem = ({ data }) => (
  <li className="list__item" key={data.id}>
    <img src={data.photo} alt="dinner"/>
    <div className="list__desc">
      <div className="list__desc__left">
        <h2>{data.name}</h2>
        <p className="--grey">{data.detail}</p>
        {
          data.free_delivery && <p className="--blue">Free Delivery</p>
        }
      </div>
      <div className="list__desc__right">
        <p className="--price-stroked">{data.original_price}</p>
        <p className="--price">{data.price}</p>
      </div>
    </div>
  </li>
)

export default PackageItem;
