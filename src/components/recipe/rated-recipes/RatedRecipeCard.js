import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { StarRateContext } from "../../store";
import RatedRecipeStarRating from "./RatedRecipeStarRating.js";


const RatedRecipeCard = ({ rated, setRated, title, image, id }) => {
    const context = useContext(StarRateContext);
    const recipeStar = context.recipeStar;
    const addRecipeStar = context.addRecipeStar;
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center firstdiv">
        <Card className="card my-md-3">
          <div className="img-container">
            <div>
              <img
                src={image}
                className="card-img-top image-fluid"
                alt={title}
              />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
          <RatedRecipeStarRating id={id} />
        </Card> 
      </div>
    </>
  );
};

const Card = styled.div`
  background: var(--color1);
  /* border-radius: 0.5rem !important; */
  width: 80%;
  padding-bottom: 1rem;
  /* border: 0.1rem solid var(--color6); */
  box-shadow: 0px 1px 10px 1px var(--color6);
  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }

  .card-img-top {
    /* border-top-left-radius: 0.5rem; */
    /* border-top-right-radius: 0.5rem; */
    width: 100%;
    filter: brightness(90%);
  }
  .img-container {
    /* border-radius: 0.5rem !important; */
  }
  .card-body {
    margin-bottom: 0;
    padding-bottom: 0;
    height: 150px;
    /* border-radius: 25%; */
    font-family: Oswald, sans-serif;
    font-size: 12px;
    color: var(--color6) !important;
  }
  .card-title:hover {
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    text-decoration-color: var(--color6);
  }
`;

export default RatedRecipeCard;
