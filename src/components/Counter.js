import React from "react";
import { connect } from "react-redux";
import Action from "../redux/globalAction";
import min from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { Button } from "@mui/material";
import "../css/counter.css";
const Counter = ({ value, click_min, click_plus }) => {
  return (
    <div className="counter">
      <Button onClick={() => click_min()}>
        <div className="min">
          <img src={min} alt="" />
        </div>
      </Button>
      <div className="value">
        <p>{value}</p>
      </div>
      <Button onClick={() => click_plus()}>
        <div className="plus">
          <img src={plus} alt="" />
        </div>
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click_plus: () => dispatch({ type: Action.tambah }),
    click_min: () => dispatch({ type: Action.kurang }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
