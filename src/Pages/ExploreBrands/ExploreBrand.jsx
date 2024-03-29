import "./ExploreBrand.css";
import { brand_lists } from "../../assets/assets";
function ExploreBrand({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Top brands for you</h2>
      <div className="explore-menu-lists">
        {brand_lists.map((item, index) => {
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
              <img style={{width:"80px",borderRadius:"20px"}}
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

export default ExploreBrand;
