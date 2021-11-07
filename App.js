import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PtAppbarHeader from './src/components/PtAppbarHeader';
import PtBottomNavigation from './src/components/PtBottomNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // Orange 500
    primary: '#ff9800',
    accent: '#c66900',
    background: '#ffffec',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
        <PtAppbarHeader />
        <PtBottomNavigation />
    </PaperProvider>
  );
}