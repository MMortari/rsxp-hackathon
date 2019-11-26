import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import Content from './pages/Content';
import Lesson from './pages/Lesson';

const Stack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Matérias',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#4F62FF',
        },
      },
    },
    Content: {
      screen: Content,
      navigationOptions: {
        title: 'Conteúdo',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#4F62FF',
        },
      },
    },
    Lesson: {
      screen: Lesson,
      navigationOptions: {
        title: 'Lições',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#4F62FF',
        },
      },
    },
  },
  {
    initialRouteName: 'Main',
    headerTransitionPreset: 'fade-in-place',
  }
);

export default createAppContainer(Stack);
