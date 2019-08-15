import Login from '../screens/login';
import Cadastro from '../screens/cadastro';
import Intro from '../screens/intro';
import DrawerNavigator from './drawerNavigator';
import { colors, fontSize } from '../assets/style/baseStyle';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Entrar',
      headerStyle: {
        backgroundColor: colors.prim
      },
      headerTitleStyle: {
        color: colors.sec,
        fontSize: 22
      },
      headerTintColor: colors.sec
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      title: 'Cadastro',
      headerStyle: {
        backgroundColor: colors.prim
      },
      headerTitleStyle: {
        color: colors.sec,
        fontSize: 22
      },
      headerTintColor: colors.sec
    }
  },
  Home: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(StackNavigator);

const LoginStyle = {};
