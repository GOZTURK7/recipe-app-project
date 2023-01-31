import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useContext } from "react";
import { StarRateContext } from "../../store";
import { CiCircleRemove } from "react-icons/ci";

const RatedRecipeStarRating = ({ id }) => {
  const [first, setFirst] = useState(0);
  // const ref = useRef(0);
  const colors = {
    orange: "var(--color10)",
    gray: "var(--color5)",
  };

  const context = useContext(StarRateContext);
  const recipeStar = context.recipeStar;
  const addRecipeStar = context.addRecipeStar;
  const removeRecipeStar = context.removeRecipeStar;
  let recipeStarObj = context.recipeStarObject;
  console.log("0-0 very first before click: ", recipeStar);

  const rate = recipeStar.find((item) => item.id == id).rate;
  console.log("rate: ", rate);

  return (
    <>
      <Rating className="icon">
        <h2>Rated</h2>
        <div>
          <CiCircleRemove className="btn" />
        </div>
      </Rating>
      <div>
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return (
              <FaStar
                size={24}
                key={index}
                style={{ cursor: "pointer", marginRight: "10px" }}
                color={rate > index ? colors.orange : colors.gray}
              />
            );
          })}
      </div>
    </>
  );
};

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: "Montserrat", sans-serif !important;
    font-size: 15px !important;
    width: 5rem;
    background: var(--color10);
    color: var(--color6);
    text-align: center;
    border-radius: 3rem;
    padding: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  h2:hover {
    background: var(--color2);
    color: var(--color1);
  }
  .btn {
    background: var(--color10);
    width: 3rem;
    height: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    border-radius: 50%;
    padding: 0;
    color: white;
    background: red !important;
    margin-right: 0.2rem;
    background: var(--color10);
  }
  .btn:hover {
    color: red;
    background: white !important;
  }
`;

export default RatedRecipeStarRating;
