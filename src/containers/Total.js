import { connect } from "react-redux";
import Total from "../components/Total";

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps)(Total);
