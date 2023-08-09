import PropTypes from "prop-types";

export default function ItemCard(props) {
  function handleClick() {
    const input = document.getElementById(props.id);
    // Push items to the cart, depending on how many have been clicked. then i want to reset the inputs value to 1.
    input.value = 1;
  }
  return (
    <div className="flex w-[300px] flex-col bg-blue-900 p-2 items-center h-[500px] ">
      <h3 className="text-2xl mb-auto">{props.itemName}</h3>
      <img src={props.imgUrl} className="h-[300px] w-full" />
      <div className="flex p-2 bg-gray-300 w-full justify-around">
        <p>${props.price}</p>
        <input
          id={props.id}
          type="number"
          defaultValue={1}
          min={1}
          className="w-14"
        />
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  id: PropTypes.number,
};
