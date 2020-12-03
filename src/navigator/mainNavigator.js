import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings181791Navigator from '../features/Settings181791/navigator';
import Settings181789Navigator from '../features/Settings181789/navigator';
import SignIn2181787Navigator from '../features/SignIn2181787/navigator';
import UserProfile181530Navigator from '../features/UserProfile181530/navigator';
import Tutorial181529Navigator from '../features/Tutorial181529/navigator';
import NotificationList181501Navigator from '../features/NotificationList181501/navigator';
import Settings181500Navigator from '../features/Settings181500/navigator';
import Settings181492Navigator from '../features/Settings181492/navigator';
import UserProfile181490Navigator from '../features/UserProfile181490/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings181791: { screen: Settings181791Navigator },
Settings181789: { screen: Settings181789Navigator },
SignIn2181787: { screen: SignIn2181787Navigator },
UserProfile181530: { screen: UserProfile181530Navigator },
Tutorial181529: { screen: Tutorial181529Navigator },
NotificationList181501: { screen: NotificationList181501Navigator },
Settings181500: { screen: Settings181500Navigator },
Settings181492: { screen: Settings181492Navigator },
UserProfile181490: { screen: UserProfile181490Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
