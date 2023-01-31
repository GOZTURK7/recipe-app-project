import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCategories from "../../../hooks/useCategories";
import useRecipe from "../../../hooks/useRecipe";
import RecipeCard from "../RecipeCard";
import { useContext } from "react";
import { StarRateContext } from "../../store";
import { useRatedRecipe } from "../../../hooks/useRatedRecipe";
import RatedRecipeCard from "./RatedRecipeCard";

const RatedRecipes = () => {
  const [rated, setRated] = useState([]);
  const [getRatedRecipes] = useRatedRecipe();
  const context = useContext(StarRateContext);
  const recipeStar = context.recipeStar;
  const addRecipeStar = context.addRecipeStar;
  //   const params = useParams();
  //   console.log("params: ", params.name);
  //   const title = params.name.toUpperCase();

  const arrOfIds = recipeStar.map((item) => item.id);
  console.log("arrOfIds: ", arrOfIds);

  useEffect(() => {
    getRatedRecipes(setRated);
  }, [recipeStar]);

  return (
    <>
      <Title>
        <H4>{`YOU LIKED THESE`}</H4>
      </Title>
      <Container className="container-fluid">
        <div className="row d-flex">
          {rated == null ? (
            <p>Rated Boş </p>
          ) : (
            rated.map((recipe) => {
              return (
                <RatedRecipeCard
                  setRated={setRated}
                  rated={rated}
                  key={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  id={recipe.id}
                />
              );
            })
          )}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: var(--color7);
  margin-bottom: 3rem;
`;

const H4 = styled.h4`
  text-align: center;
  font-family: Oswald, sans-serif;
  color: var(--color6);
  font-size: 50px;
  @media (max-width: 597px) {
    font-size: 40px !important;
  }

  border: 0.2rem solid var(--color6);
  border-left: none;
  border-right: none;
  display: inline-block;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default RatedRecipes;
