import { useState } from "react";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../ExploreMenus/ExploreMenu";
import "./Home.css";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/APP-Download/AppDownload";
import ExploreBrand from "../ExploreBrands/ExploreBrand";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ExploreBrand category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
