import React, { useEffect, useState } from 'react';

const Location = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = e => {
      if (window.pageYOffset < 78) setFixed(false);
      else setFixed(true);
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={fixed ? "location --fixed": "location"}>
      <p>Alamat pengiriman</p>
      <div className="location__detail">
        <i className="fa fa-map-marker"></i>
        <span>Jalan Tulodong Atas, Senayan, Kebayoran Baru, Jakarta</span>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  )
}

export default Location;
