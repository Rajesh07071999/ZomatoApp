import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const context = useContext(StoreContext);

  // Now you can directly access food_list from the context object
  const { food_list } = context;
  return (
    <div className="food-display" id="food-display">
      <h2>Order food online in</h2>
      <div className="food-display-lists">
        {food_list.map((item, index) => {

          if((category === 'All') || (category === item.category) ){
            return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
