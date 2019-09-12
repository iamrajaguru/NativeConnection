import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import Signup from '../auth/container/signup';



export default createAppContainer(
  createStackNavigator(
    { 
       Signup
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);
