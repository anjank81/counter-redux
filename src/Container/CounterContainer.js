import { connect } from "react-redux";
import { increment, decrement } from "../Action/counter.action";
import Counter from "../Component/Counter";

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch(increment());
    },
    sub: () => {
      dispatch(decrement());
    }
  };
};
const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
export default CounterContainer;
