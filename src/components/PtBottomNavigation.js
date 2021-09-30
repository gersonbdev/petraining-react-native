import * as React from 'react';
import { Avatar, BottomNavigation, Text } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Avatar.Image size={192} source={require('../assets/img/profile/profile-avatar.jpg')} />;

const RecentsRoute = () => <Text>Recents</Text>;

const PtBottomNavigation = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'music', title: 'Salud', icon: 'dog' },
    { key: 'albums', title: 'Inicio', icon: 'home' },
    { key: 'recents', title: 'Dispensado', icon: 'alarm-check' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default PtBottomNavigation;