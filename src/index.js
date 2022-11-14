import React from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './store';
import Routes from '~/routes';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './routes/rootNavigation';
import { StatusBar } from 'react-native';
import Colors from './styles/Colors';
import { AuthProvider } from "./contexts/auth";

const App = () => (

  <Provider store={store} >
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <StatusBar backgroundColor={"#b41267"} barStyle={"light-content"} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  </Provider >
);

export default App;
