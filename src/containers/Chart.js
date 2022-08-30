import { connect } from "react-redux";
import Chart from "../components/Chart";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps)(Chart);
