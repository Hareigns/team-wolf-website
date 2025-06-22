import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ 
  variant = 'primary', 
  size, 
  disabled = false, 
  children, 
  onClick, 
  className,
  icon 
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {icon && <i className={`${icon} me-2`} />}
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link']),
  size: PropTypes.oneOf(['sm', 'lg']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string
};

export default CustomButton;