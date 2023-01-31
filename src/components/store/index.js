import React, { useState } from "react";
import { createContext } from "react";
export const StarRateContext = createContext(null);

export const StarRateProvider = ({ children }) => {
  const [recipeStar, setRecipeStar] = useState([]);
  console.log("0-recipeStare very first before click: ", recipeStar);

  let recipeStarObject = {
    id: 0,
    rate: 0,
  };

  const addRecipeStar = (recipeObject) => {
    const exists = recipeStar.find((item) => item.id == recipeObject.id);

    if (exists) {
      const y = recipeStar.filter((item) => item.id == recipeObject.id);
      const y1 = y[0];
      recipeStarObject = { id: recipeObject.id, rate: recipeObject.rate };
      const newArr = recipeStar.filter((item) => item.id != recipeObject.id);
      setRecipeStar([...newArr, recipeStarObject]);
    }
    if (typeof exists == "undefined") {
      setRecipeStar([...recipeStar, recipeObject]);
    }
  };

  const removeRecipeStar = (id) => {
    const newArr = recipeStar.filter((item) => item.id != id);
    setRecipeStar(newArr);
  };

  return (
    <>
      <StarRateContext.Provider
        value={{
          recipeStar,
          addRecipeStar,
          removeRecipeStar,
          recipeStarObject,
        }}
      >
        {children}
      </StarRateContext.Provider>
    </>
  );
};
