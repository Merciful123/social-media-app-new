import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input.jsx";
import "./Login.scss";
import { FaArrowRight } from "react-icons/fa";
const Login = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id={"username"}
            name={"username"}
            type={"text"}
            value={"my value"}
            labelText={"Username"}
            placeHolder={"Enter Username"}
            handleChange={() => {}}
          />
          <Input
            id={"password"}
            name={"password"}
            type={"password"}
            value={"my password"}
            labelText={"Password"}
            placeHolder={"Enter Password"}
            handleChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              value={false}
              handleChange={() => {}}
            />
            Keep me signed in
          </label>
        </div>

        <Button
          label="SIGN IN"
          className=" auth-button button"
          disabled={true}
        />
        <Link to={"/forgot-password"}>
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
