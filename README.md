# :spaghetti: :sushi: :hamburger: RECIPE APP PROJECT :pizza: :meat_on_bone: :ramen:


### ROJECT STRUCTURE

```
├── App.js
├── assets
│   ├── css
│   └── img
├── components
│   ├── common
│   │   ├── CarouselHome.js
│   │   └── StarRating.js
│   ├── footer
│   │   ├── Footer.js
│   │   └── footer.css
│   ├── header
│   │   ├── Header.js
│   │   └── HeaderSearchBar.js
│   ├── home-page
│   │   └── HomePage.js
│   ├── nutrutions-bars
│   │   ├── Bar.js
│   │   ├── NutritionsBars.css
│   │   └── NutritionsBars.js
│   ├── recipe
│   │   ├── RecipeCard.js
│   │   ├── RecipeCategory.js
│   │   ├── RecipeDetails.js
│   │   ├── RecipesByCategory.js
│   │   └── SearchedRecipes.js
│   ├── router
│   │   └── CustomRoutes.js
│   └── templates
│       └── Template.js
├── hooks
│   ├── useCarouselRecipe.js
│   ├── useCategories.js
│   └── useRecipe.js
├── index.css
└── index.js
 ```
## Getting Started :rocket: :rocket:
___ 
In this project I have tried to provide things below to the users of recipe app; 
> :one: users may see the chef's best three recipes also see the top-rated 10 recipes and rate them on the home page;

![Genaral-features](https://j.gifs.com/gpEAyl.gif)




> :two: user also can click and see the recipes of specific category that is provided at the navbar (breads, breakfasts, soups, desserts, snacks, salads);

![Navbar categories](https://j.gifs.com/83Npgl.gif)




> :three: user also can search a specific cuisine or specific recipe or any recipe that he/she wants by serch button it's all up to users this section is more flexible the others;

![Search-Bar](https://j.gifs.com/WP05KW.gif)



> :four: after all the things above user will see the results of his/her requests as a page




> :five: The details of every recipes in those page (also in the carousel) can be reached by clicking on that specific recipe card and user will see the details of the recipe it will contain instructions, ingredients and nutritions of the meal;

![Recipe Details](https://j.gifs.com/PjE0Gz.gif)





## Installing Dependencies
___

:large_orange_diamond: I have used https://spoonacular.com/ api as my project api, so yo need to go subscribe and get api key from there for free, after subscribing you can get api key from your profile like below;

> ![api key](./src/assets/img/apiKey%20page.png)

> this api key is provide you **150 points** fetch ability per day but dont worry, I have used the :floppy_disk: **localstorage** in my project to cache the fetched values,  but even so, if you used up all the points I recommend you ***subscribe again with another mail address*** :boom: but dont forget the restart the project after you changed the api key on your ```.env```file


:large_orange_diamond: if you did the above;

> - download the project to your local.
> - add the api key to your .env
> - ```npm install```[```package.json``` file includes the dependencies that you will be needed ].
> - you can see the app in ```localhost:3000```

## GOOD LUCK :rocket:

___
----





