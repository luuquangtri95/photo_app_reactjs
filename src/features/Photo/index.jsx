import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log(match);
  return <div></div>;
}

export default Photo;
