import NavMobile from "./components/NavMobile";
import ChartMenu from "./components/ChartMenu";
import { connect } from "react-redux";
import GambarMobile from "./components/GambarMobile";
import MainMenu from "./components/MainMenu";

function App({ aktif }) {
  return (
    <div className={aktif ? "App aktif" : "App"} id="home">
      <NavMobile />
      <ChartMenu />
      <GambarMobile />
      <MainMenu />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    aktif: state.aktif,
  };
};
export default connect(mapStateToProps)(App);
