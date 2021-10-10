import React from "react";
import { connect } from "react-redux";
import "../css/chartMenu.css";

const ChartMenu = ({ aktif_chart }) => {
  return (
    <div className={aktif_chart ? "menu_chart aktif" : "menu_chart"}>
      <div className="isi_menu_cart">
        <div className="judul">
          <h3>Cart</h3>
        </div>
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    aktif_chart: state.aktif_chart,
  };
};
export default connect(mapStateToProps)(ChartMenu);
