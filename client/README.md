# Hack From Home: Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

The goal of this talk is to learn how to create a web application using React with Typescript. In addition, you will learn some useful libraries that could help you when you are developing a web application with React.

## Theory

### What is TypeScript?

TypeScript is an open-source programing language that contains all JavaScript features. In addition, and for this reason is gaining fame, is that you can type all the variables!

Here is an example:

##### JavaScript:

```javascript
function getContactName(contact_id) {
    return this.contact[contact_id].name;
}
```

##### TypeScript:

```typescript
function getContactName(contact_id: number): string {
    return this.contact[contact_id].name;
}
```

Here you can find more information: [TypeScript](https://www.typescriptlang.org/)

### What is React?

React is a JavaScript library that helps to build user interfaces. In addition is a component-based library, which means that can split the UI into independent, reusable pieces, and think about each piece in isolation.

Each component have the following features:

- Props: component inputs.
- State: similar to props, but it is private and fully controlled by the component.

Each component will render each time you change state and props.

Example of component based architecture:



![Diagram](.\Diagram.png)



#### React lifecycle

Imagine that you want to show data when a table is rendered, or that we want to clear this date when the component is not showing any more. To resolve this problem we have the called "lifecycle methods":

- componentDidMount(): runs after the component output has been rendered.
- componentWillUnmount(): runs after the component output is not showing any more.

#### Interesting libraries

- [Redux](https://redux.js.org/basics/usage-with-react/)
- [Material-UI](https://github.com/mui-org/material-ui)

## Set up

In the project directory, you can run:

### `npm i`

Installs all the dependences of the project.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
