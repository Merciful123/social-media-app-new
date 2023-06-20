import { FaArrowLeft } from "react-icons/fa";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input.jsx";
import "./forgotPassword.scss";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id={"password"}
            name={"password"}
            type={"password"}
            value={"my password"}
            labelText={"Password"}
            placeHolder={"Enter Password"}
            handleChange={() => {}}
          />
        </div>

        <Button
          label="SIGN IN"
          className=" auth-button button"
          disabled={true}
        />
        <Link to="/">
          <span className="forgot-password">
            <FaArrowLeft className="arrow-left" /> Back To Login
          </span>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
