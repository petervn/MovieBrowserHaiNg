import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import HomePage from './screens/HomePage';
import SearchPage from './screens/SearchPage';
import ActorPage from './screens/ActorPage';
import MovieDetailPage from './screens/MovieDetailPage';
import SearchIcon from './common/asset/images/search-icon.png';
import HomeIcon from './common/asset/images/home-icon.png';

const SearchTab = createStackNavigator(
  {
    SearchMovie: {
      screen: SearchPage,
      navigationOptions: {
        title: 'Search Movie',
        headerTintColor: '#47525E',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
  {
    initialRouteName: 'SearchMovie',
  },
);
const MoviesTab = createStackNavigator(
  {
    MovieList: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
        headerTintColor: '#47525E',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MovieDetail: {
      screen: MovieDetailPage,
      navigationOptions: {
        title: 'Movie Detail',
        headerTintColor: '#47525E',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
      },
    },
    ActorDetail: {
      screen: ActorPage,
      navigationOptions: {
        title: 'Actor/ Actress Info',
        headerTintColor: '#47525E',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
  {
    initialRouteName: 'MovieList',
  },
);

MoviesTab.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Feather name="home" size={20} color={tintColor} />
  ),
};

const TabBarVisible = navigation => {
  debugger;
  const {routes = []} = navigation.state;
  if (routes && routes.length > 0) {
    const route = routes[routes.length - 1];
    if (
      !route ||
      route.routeName === 'MovieList' ||
      route.routeName === 'SearchMovie'
    ) {
      return true;
    }
    return false;
  }
  return false;
};

const MainNavigator = createBottomTabNavigator(
  {
    Movie: {
      screen: MoviesTab,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        tabBarVisible: TabBarVisible(navigation),
        tabBarIcon: () => (
          <Image
            source={HomeIcon}
            style={{width: 20, height: 20, marginRight: 10}}
            sizeMode="contain"
          />
        ),
      }),
    },
    Search: {
      screen: SearchTab,
      navigationOptions: ({navigation}) => ({
        title: 'Search',
        tabBarVisible: TabBarVisible(navigation),
        tabBarIcon: () => (
          <Image
            source={SearchIcon}
            style={{width: 20, height: 20, marginRight: 10}}
            sizeMode="contain"
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#F95F62',
      inactiveTintColor: '#8190A5',
      showIcon: true,
      labelStyle: {
        margin: 0,
        padding: 2,
      },
      style: {
        backgroundColor: '#ffffff',
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
  },
);
export default createSwitchNavigator(
  {
    Main: MainNavigator,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
  },
);
