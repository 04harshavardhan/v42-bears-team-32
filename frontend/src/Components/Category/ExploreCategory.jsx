import React from "react";

import CategoryCard from "./CategoryCard.jsx";
import vegetarian from "../../asset/Home/Vegetarian.png";
import vegan from "../../asset/Home/Vegan.png";
import low_carb from "../../asset/Home/LowCrab.png";
import lean_protein from "../../asset/Home/LeanProtein.png";

const categoryData = [
  {
    id: 0,
    src: vegetarian,
    name: "Vegetarian",
    bg: "bg-red-50",
  },
  {
    id: 1,
    src: vegan,
    name: "Vegan",
    bg: "bg-green-50",
  },
  {
    id: 2,
    src: lean_protein,
    name: "Lean Protein",
    bg: "bg-yellow-50",
  },
  {
    id: 3,
    src: low_carb,
    name: "Low Crab",
    bg: "bg-orange-50",
  },
];
function ExploreCategory() {
  return (
    <div className="px-[150px] pt-[50px]">
      <p className="text-dark-2 text-h1 font-weight-700 py-[25px]">
        Explore by Categories
      </p>

      <div className="flex justify-between">
        {categoryData &&
          categoryData.map((data) => (
            <CategoryCard
              key={data.id}
              name={data.name}
              src={data.src}
              bg={data.bg}
            />
          ))}
      </div>
    </div>
  );
}

export default ExploreCategory;
