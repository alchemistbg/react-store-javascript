## Description
This is a **React**-based small e-commerce site. It was created with [Create React App](https://github.com/facebook/create-react-app).<br />
The application uses only functional components and hooks for managing their state.<br />
The application uses fonts from [Google Fonts](https://fonts.google.com/) as well as [Font Awesome](https://fontawesome.com/).<br />
The graphic art for the logo and the default image is taken from [Logo Sport Vectors by Vecteezy](https://www.vecteezy.com/free-vector/logo-sport).<br />
It uses a dummy file that mimic the response from the backend. This file contains an object containing information for all product.<br />
<br />
Its main characteristics are as follows:<br />
1. CSS styles are done by using SASS. Most of the SASS code is organized into separate files which are imported in corresponding component.<br />There are several SASS files that are global and are imported at the top level.
2. The responsive layout was implemented by using:
   1. **Flexible Box (Flexbox)** layout.<br />
   2. **Breakpoints** and **Mixins**
3. Navigation between the different pages of the app is done using [React Router](https://reacttraining.com/react-router/web/guides/quick-start).<br />
4. Every product in the list has its own page.<br />
5. All products has more then one image. One is displayed as main and the user can select any of the other images.<br />
6. In case of a broken image the default one is loaded. This is done by using **onError** event on img tag.<br />
7. The user can:<br /> 
   1. **Add** product to the cart.<br /> The user can add a given product multiple times to the cart.<br /> In that case only the product's quantity is updated instead of creating new record in the cart.<br />
   2. **Edit** the quantity of items for a given product.<br />
   3. **Remove** given product from the cart.<br />
   4. Perform **Checkout** action that clears the cart.<br />
8. Cart state is managed by using React's Context API.<br />
9. On every cart change its state is updated and saved in the browser local storage.<br /> This also saves the cart state after page reloading.<br />
<br />

## Run/Build

#### Requirements
* Git<br />
* Node.js<br />
* NPM<br />


#### 1\. Download the project source code:
In order to download the application source code from the repository using the HTTPS-based connection with **github** <br/> 
open your favorite console application, navigate to folder of your choice and run:
```bash
git clone https://github.com/alchemistbg/react-store.git
```
You could download the source code using **Download ZIP** option. Place the archive in a folder of your choice and extract the files there.

#### 2\. Navigate to **react-store** folder:
Enter the application folder by run:
```bash
cd react-store
```

#### 3\. Install package dependencies:
To install application dependencies before you start the app, run:<br />
```bash
npm i
```

#### 4\. Starting:
To start the application in development mode, run:<br />
```bash
npm start
```
This should also open new browser tab/window, that will navigate you to [http://localhost:3000](http://localhost:3000).<br />
The page will reload if you make edits. You will also see any lint errors in the console.

#### 5\. Building:
In order to view the application in production mode, first you need to create `production build` by run:
```bash
npm run build
```
This creates `build` folder, that contains all the necessary files.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.<br />
<br />
To start the production version locally, you will need server for serving static files.<br />
One possible solution is using [serve](https://github.com/zeit/serve). To install it (globally) run:
```bash
npm install -g serve
```
After successful installation, start the server by using:
```bash
serve -s build
```
The production version is accessible at [http://localhost:5000](http://localhost:5000).

#### 6\. Testing:
At the moment the application has some very basic tests aimed to check components loading.<br/>
In order to run the test in the so called interactive watch mode run:
```bash
npm run test
```
For more information about testing see the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
