import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import Routes from './pages/Routes';

export default function App(){
  return(
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  );
}
