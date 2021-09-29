import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PtAppbarHeader from '../components/PtAppbarHeader';
import PtBottomNavigation from '../components/PtBottomNavigation'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#d32f2f',
      accent: '#9a0007',
    },
  };

export const HomeScreen = () => {
    return (
        <PaperProvider theme={theme}>
            <PtAppbarHeader />
            <PtBottomNavigation />
        </PaperProvider>
        
    )
}
