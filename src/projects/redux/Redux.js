import { Provider } from "react-redux";
import "./Redux.css";
import store from "./store/store.js";
import Form from "./Form.jsx";
import List from "./List.jsx";

const Redux = (props) => {
  return props.trigger ? (
    <div className="popup">
      <button className="close-btn" onClick={() => props.setTrigger(false)}>
        Back
      </button>
      <Provider store={store}>
        <div className="Reduxform">
          <Form />
          <List />
        </div>
      </Provider>
    </div>
  ) : null;
};

export default Redux;
