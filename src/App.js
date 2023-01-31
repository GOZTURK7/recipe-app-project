import "./assets/css/style.css";
import RatedRecipes from "./components/recipe/rated-recipes/RatedRecipes";
import CustomRoutes from "./components/router/CustomRoutes";
import { StarRateProvider } from "./components/store";

function App() {
  return (
    // <StarRateProvider>
      <div>
        <CustomRoutes />
      </div>
    // </StarRateProvider>
  );
}

export default App;
