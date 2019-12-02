import React from 'react';
import { createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';
import store from './redux/ReduxStore';



import Navbar from './src/Navbar/Navbar';


export default function App() {
  return (
      <Provider store={store}><AppContainer /></Provider>
  );
}


const AppContainer = createAppContainer(Navbar);


