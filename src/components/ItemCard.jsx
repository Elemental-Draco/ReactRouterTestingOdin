import PropTypes from "prop-types";

export default function ItemCard(props) {
  return <div>{props.itemName}</div>;
}

ItemCard.propTypes = {
  itemName: PropTypes.string,
};
