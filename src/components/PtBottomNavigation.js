import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { HealthScreen } from '../screens/HealthScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { DispensedScreen } from '../screens/DispensedScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const PtBottomNavigation = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'health', title: 'Salud', icon: 'dog' },
    { key: 'home', title: 'Inicio', icon: 'home' },
    { key: 'dispensed', title: 'Dispensado', icon: 'alarm-check' },
    { key: 'settings', title: 'Configuración', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    health: HealthScreen,
    home: HomeScreen,
    dispensed: DispensedScreen,
    settings: SettingsScreen,
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