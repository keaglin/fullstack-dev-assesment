# Nanos Dashboard
## Demo
[React App](https://build-vlbwvfwqug.now.sh)  
[Node API](https://guarded-headland-44129.herokuapp.com/)

## Project Status  
Actively being developed

#### Stack
- React  
- Node  
- ExpressJS  
- MongoDB

#### Deployment Tools  
- React app deployed to [ZEIT's Now](https://now.sh)
- Node API deployed to [Heroku](https://heroku.com)
- MongoDB database deployed to [mLab Cloud DB](https://mlab.com)
<!-- 

## Project Screen Shots -->

## Usage Instructions
#### Prerequisites
You will need `node` and `npm` installed globally on your machine.
## Client
### Development using **`npm`** 
1. Clone down this repository
2. `cd` to the `client` directory
3. Run `npm install`  
4. Start development server with `npm run start`   
5. Visit App at `localhost:3000`  
### Deployment using **`npm`** 
1. Build with `npm run build` (generates a static site in the `/build` folder in the `client` directory)   
2. Deploy `/build` with any tool or service that supports static sites  

### Development using **`yarn`**  
1. Clone down this repository
2. `cd` to the `client` directory
3. Run `yarn install`  
4. Start development server with `yarn start`   
5. Visit at `localhost:3000` 
### Deployment using **`yarn`**  
1. Build with `yarn build` (generates a static site in the `/build` folder in the `client` directory)  
2. Deploy `/build` directory with any tool or service that supports static sites

## Server
### Development using **`npm`**  
1. Clone down this repository
2. `cd` to the `server` directory
3. Run `npm install`  
4. Start development server with `npm run start`   
5. Visit at `localhost:3001` 

<!-- ### Deployment -->
<!-- deployment instructions? -->

#### Resources 
- [create-react-app](https://github.com/facebook/create-react-app) - quick start, used to achieve consistent experience between apps
- [React Router](https://reacttraining.com/react-router/core/guides/philosophy) - front end routing
- [Axios](https://github.com/axios/axios) - HTTP requests
- [Route Params](https://scotch.io/courses/using-react-router-4/route-params) - using match to retrieve route params in order to display the detail page of an item even when refreshing and/or (re)visiting that item's detail page
- [Mongoose](https://mongoosejs.com) - data modeling for MongoDB
- [Express](https://expressjs.com) - make it easy to create a Node API
- [Object.entries()](https://stackoverflow.com/questions/39336556/how-can-i-slice-an-object-in-javascript) - turning objects into arrays automatically (I implemented something similar in AdDetail before realizing it was its own thing)  
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) - iterate over an object  
- [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - initially wanted to use `JSON.Stringify` or `.toString()` but after more looking, I thought this was better for my use case because instead of being separated by a comma (default), I could choose a character to separate the values.  
- [Deploying Node/Mongo app on Heroku and mLab, courtesy of General Assembly](https://git.generalassemb.ly/ga-wdi-lessons/express-mongoose-mlab-deploy)  
- [On using `require` to load images when building with Webpack](https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react/39999421)  