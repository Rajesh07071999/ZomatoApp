import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Inspiration for your first order</h2>
      <p>What would you like to order ? refer our listed menu</p>
      <div className="explore-menu-lists">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-items"
            >
              <img
                className={category == item.menu_name ? "Active" : ""}
                src={item.menu_image}
                alt="menu-lists"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
