import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items, showButton }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
    console.log(item);
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-100 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.default / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="relative">
              <img
                className="w-full rounded"
                src={CDN_URL + item.card.info.imageId}
              />
              {showButton && (<button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 py-2 px-12 bg-white rounded text-green-500 font-bold shadow cursor-pointer hover:bg-gray-300"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                ADD
              </button>)
}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
