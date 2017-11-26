// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('albums', () => App);


// react knows how a component should behave
// react-native knows how to take the output from one component and render it to the pager
import React from 'react';
import { Text, AppRegistry } from 'react-native';


//Create a component
const App = () => {
  return(
      <Text>Whats up my dude</Text>
  );
};

AppRegistry.registerComponent('albums', () => App);
