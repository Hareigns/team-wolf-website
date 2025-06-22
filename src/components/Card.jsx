import Card from 'react-bootstrap/Card';
import CustomList from '/src/components/List';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ServicesCard = ({
  title,
  description,
  listItems,
  buttonText,
  buttonVariant,
  onButtonClick
}) => {
  return (
    <Card style={{ width: '18rem' }} className="shadow-sm h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-muted text-center mb-3">{description}</Card.Text>
        <CustomList items={listItems} className="mb-3" />

        <div className="p-3 text-center">

          {buttonText && (

            <Button
              variant={buttonVariant || "primary"}
              className="mt-auto align-self-center"
              onClick={onButtonClick}

            >
              {buttonText}
            </Button>

          )}

        </div>
      </Card.Body>
    </Card>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  listItems: PropTypes.array.isRequired,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default ServicesCard;