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
* Node.js<br />
* NPM<br />


#### 1\. Download the project source code:
```bash
git clone https://github.com/alchemistbg/react-store.git
```
for using the HTTPS-based connection with **github**.

#### 2\. Navigate to **react-store** folder:
```bash
cd react-store
```

#### 3\. Install package dependencies:
```bash
npm i
```

#### 4\. Start the project in development mode:
```bash
npm start
```
This should also open new browser tab/window navigating to [http://localhost:3000](http://localhost:3000).<br />
The page will reload if you make edits. You will also see any lint errors in the console.

#### 5\. Build production-ready version:
```bash
npm run build
```
This creates `build` folder, that contains all the necessary files.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.<br />
<br />
To start the production version locally, you will need server for static files.<br />
One possible solution is [serve](https://github.com/zeit/serve). To install it (globally) run:
```bash
npm install -g serve
```
After successful installation, start the server by using:
```bash
serve -s build
```
The production version is accessible at [http://localhost:5000](http://localhost:5000).

```bash
npm test
```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
