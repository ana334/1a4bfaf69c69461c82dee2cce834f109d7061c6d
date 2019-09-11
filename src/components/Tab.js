import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { listPackages } from "../reducers/PackagesReducer";
import PackageItem from "./PackageItem";
const lunchImage = "https://assetcdn.kulina.id/preliminary/lunch.svg";
const dinnerImage = "https://assetcdn.kulina.id/preliminary/dinner.svg";

const Tab = ({ listPackages, datas, progress }) => {
  const [activeTab, setActiveTab] = useState('Lunch');
  const switchTab = (type) => {
    setActiveTab(type);
    listPackages(type);
  }
  useEffect(() => {
    listPackages('Lunch');
  }, []);

  return (
    <>
      <div className="package">
        <div className="package__option"  onClick={()=> switchTab('Lunch')}>
          <img src={lunchImage} alt="lunch"/>
          <span>Paket Lunch</span>
          <div className={ activeTab === 'Lunch' ? "triangle-bottom": "hide"}></div>
        </div>
        <div className="package__option --night" onClick={()=> switchTab('Night')}>
          <img src={dinnerImage} alt="dinner"/>
          <span>Paket Dinner</span>
          <div className={ activeTab === 'Night' ? "triangle-bottom --night": "hide"}></div>
        </div>
      </div>
      { progress && <p className="loading">Is Loading...</p> }
      <ul className="list">
        {
          datas.map((data) => (
            <PackageItem data={data} key={data.id}/>
          ))
        }
      </ul>
    </>
  )
}

const mapStateToProps = state => {
	return state.packages;
};
const mapDispatchToProps = {
	listPackages
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
