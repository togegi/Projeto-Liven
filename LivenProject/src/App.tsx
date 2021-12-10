import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './screens/productsScreen/Products';
import Cart from './screens/cartScreen/Cart';
import navigationStyles from './navigationStyles';
import HeaderCartButton from './components/HeaderCartButton/HeaderCartButton';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Lista de Produtos',
            ...navigationStyles,
            headerRight: () => <HeaderCartButton />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{title: 'Carrinho', ...navigationStyles}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
