import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Banner.propTypes = {};

function Banner(props) {
  return (
    <section className="banner">
      <div className="banner__heading">
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <img
        src="https://img2.fonwall.ru/o/lh/kirkjufellsfoss-gora-kirkyufetl-islandiya-hpbs.jpg"
        className="banner__image"
        alt=""
      />
    </section>
  );
}

export default Banner;
