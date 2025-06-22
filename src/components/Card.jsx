import Card from 'react-bootstrap/Card';
import CustomList from '/src/components/List';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Cards = ({
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
        <Card.Text className="text-center mb-3">{description}</Card.Text>
        <Card.Title className="text-center mb-3">{title}</Card.Title>

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

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  listItems: PropTypes.array.isRequired,
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default Cards;