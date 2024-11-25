# Welcome to my Recipe App!

Generate random recipes for fun and save the ones you like! 

## Description

Clicking the get random recipe button will generate a new recipe using the spoonacular api. You have the option to save any recipe that you like to your favorites. If you don't like the recipe that was generaterd click on the get random recipe button again and a new recipe will be generated. The Favorites link will take you to a page with all of the recipes you've saved.
Home page: <img width="510" alt="Screenshot 2024-11-25 at 2 11 43 PM" src="https://github.com/user-attachments/assets/6948dc44-f17e-42c7-b700-23b3d20c0f62">
Home page with recipe generated:  <img width="505" alt="Screenshot 2024-11-25 at 2 11 54 PM" src="https://github.com/user-attachments/assets/d5ea21dc-7bb3-4913-a61c-968947c6dc93">
Home Page when recipe is generated: 
Favorites Page with saved recipes: <img width="1823" alt="Screenshot 2024-11-25 at 2 12 39 PM" src="https://github.com/user-attachments/assets/e8998c8b-09f7-4192-a976-5639509cc719">
## Wish List
Because of time constraits the layout, and design isn't the most appealing. In the near future, I  would like to add  branding, adjust te colors and fonts and add images to the home page and favorites page. I'd also like to add login functionality so that when users login they see a personalized dashboard. 

My initial idea was to create an app where users can post their recipes as well as look up recipes via the spoonacular api. However, I wasn't able to implement it as merging the data required more time than I had. Additionally, I would like to add features so that users can add their personal recipes, categorize recipes, make notes/comments delete recipes via a button, and rate recipes they've tried. 

Finally, allowing users to keep a private recipe library and also create a public facing recipe librariy where other users can see a collection of their personal/favorite recipes (like a recipe book) would be something I'd love to implement as well. While, I'm not quite done, this projects has been rewarding despite the many issues I had learning how to create an MVC app using Nodejs, MongoDB and handlebars. 

## Getting Started
clone the repository in VS code, then open up a terminal and install dependencies using npm i

### Dependencies

* This app uses MongoDB,mongoose, Nodejs, express, express-handlebars 
 and a  .env that contains the spoonacular apikey and a MongoDB URI. A url for getting a random recipe from Spoonacular is also needed (GET https://api.spoonacular.com/recipes/random). Other requests can be found under the docs tab on Spoonacular. At the time of creating this (Nov 2024) this link worked without neededing to subscibe to a paid plan. The app was deployed using Heroku which has an Eco and Basic  plan for $5 a month. Link to Heroku: https://www.heroku.com/home

### Installing

* You'll need to set up a MongoDB database and connect using a MONGO URI that includes your mongo account and database credentials (username, password and database name). MongoDB has instructions on how to customize the url and connect to your app. Make sure this information is  included this in your .env file.Link to MongoDB Atlas https://spoonacular.com/food-api. 
* You'll also need a Spoonacular Api, which you can get via signing  up for a free Spoonacular account where you will be assigned an api key. Include this API key in your .env file. Link to Spoonacular https://spoonacular.com/food-api.

### Executing program

* To see the app using your local server type in  app node app.js in your terminal and navigate to local port 3000. To deploy to Heroku, you''ll need to have an account, create the app and follow the instructions on Heroku to deploy the app. Make sure to add your environmental variables in your .env to the Config Vars on Heroku under the settings tab. Your app will not work if the Spoonacular API Key isn't added, and the favorites tab will not work if your Mongo URI isn't added. 


```


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

