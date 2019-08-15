import Home from '../screens/home';
import Login from '../screens/login';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
  Home,
  Login
});

export default createAppContainer(DrawerNavigator);
