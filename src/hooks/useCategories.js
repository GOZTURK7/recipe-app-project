const useCategories = () => {
  const getCategories = async (setRecipes, category) => {
    const isBestTen = category == "" ? "bestTen" : category;
    const isCategory = localStorage.getItem(isBestTen);

    if (isCategory) {
      setRecipes(JSON.parse(isCategory));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${category}`
      );
      const data = await api.json();
      const categories = data.results;
      const cate = category == "" ? "bestTen" : category;
      localStorage.setItem(cate, JSON.stringify(categories));
      setRecipes(categories);
    }
  };

  const getSearched = async (setRecipes, search) => {
    const isSearched = localStorage.getItem(search);
    console.log(isSearched);

    if (isSearched) {
      setRecipes(JSON.parse(isSearched));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e225dfedcd954472bc90537a69c98c92&query=${search}`
      );
      const data = await api.json();
      const searchedResults = data.results;
      localStorage.setItem(search, JSON.stringify(searchedResults));
      setRecipes(searchedResults);
    }
  };
  return [getCategories, getSearched];
};

export default useCategories;
