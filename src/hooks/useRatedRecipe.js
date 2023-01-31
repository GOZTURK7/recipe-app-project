import React, { useContext } from "react";
import { StarRateContext } from "../components/store";
import axios from 'axios';
// import useRatedRecipe from "../../hooks/useRatedRecipe";



export const useRatedRecipe = () => {
    const context = useContext(StarRateContext);
    const recipeStar = context.recipeStar;
    const addRecipeStar = context.addRecipeStar;

    const getRatedRecipes = async (setRated) => {

      // const isRecipeStar = localStorage.getItem('recipeStar')

      // if (isRecipeStar) {
      //   setRated(JSON.parse(isRecipe));
      //   console.log("localStorage'dan RecipeStar :)  çekti: ", JSON.parse(isRecipeStar));
      // } else

        const isRateds = localStorage.getItem('ratedRecipes');
        if(isRateds){
          setRated(JSON.parse(isRateds));
        }else{
        if(isRateds == 'undefined') localStorage.removeItem('ratedRecipes');
        const urls = recipeStar.filter(item => typeof item.id != 'undefined').map((item) => {
          return `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${'057ec082fa964d5d81bc52a0494d67bb'}`;
        });
        console.log("urls: ", urls);
      
        await axios
          .all(urls.map((endpoint) => axios.get(endpoint)))
          .then((data) => {
            console.log("data: ", [...data]);
            const newData = [];
            [...data].map((d) => {
                console.log(d);
              return newData.push(d.data);
            });
            localStorage.setItem('ratedRecipes', JSON.stringify([...newData]));
            setRated(newData);
          });
      };
    }

      return [getRatedRecipes];

}

// export default useRatedRecipe;
