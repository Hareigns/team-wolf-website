import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const CustomList = ({ items, variant, flush, numbered }) => {
  return (
    <ListGroup variant={variant} flush={flush} numbered={numbered}>
      {items.map((item, index) => (
        <ListGroup.Item key={index} action={item.action} className={item.className}>
          {item.icon && <i className={`${item.icon} me-2`} />}
          {item.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

CustomList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.bool,
      icon: PropTypes.string,
      className: PropTypes.string
    })
  ).isRequired,
  variant: PropTypes.oneOf(['flush', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  flush: PropTypes.bool,
  numbered: PropTypes.bool
};

export default CustomList;