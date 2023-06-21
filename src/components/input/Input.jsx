import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  id,
  name,
  type,
  value,
  className,
  labelText,
  placeHolder,
  handleChange,
}) => {
  return (
    <div className="form-row">
      {labelText && (
        <>
          <label htmlFor={name} className="form-label">
            {labelText}
          </label>
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
            className={`form-input  ${className}`}
            autoComplete="false"
          />
        </>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
