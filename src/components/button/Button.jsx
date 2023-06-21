import PropTypes from "prop-types";

const Button = (props) => {
  const { label, className, disabled, handleClick } = props;
  return (
    <div className={className} onClick={handleClick} disabled={disabled}>
      {label}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
