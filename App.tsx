import React from 'react';
import { NavigationContainer } from '@react-navegacion/native';
import { BancaProvider } from './Context/BancaContext';
import AppNavegacion from './Navegacion/AppNavegacion';

const App: React.FC = () => {
  return (
    <BancaProvider>
      <NavigationContainer>
        <AppNavegacion />
      </NavigationContainer>
    </BancaProvider>
  );
};

export default App;
