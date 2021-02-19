import React from "react";
import { withNamespaces } from "react-i18next";
import Slider from "react-slick";
import "./Banner.scss";
import { Link } from "react-router-dom";
const Banner = ({ banner, t }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {banner.map((img, i) => {
        return (
          <div key={img.id} className="banner">
            {img.title &&<div className="banner-content">
               <h1>{t(img.title)}</h1>
              <p>{t(img.content)}</p>
              <Link to={`${process.env.PUBLIC_URL}/promotion`}>
                {t("seemore")}
              </Link>
            </div>}
            <img src={img.src} alt="banner" className="banner-img" />
          </div>
        );
      })}
    </Slider>
  );
};
export default withNamespaces()(Banner);
