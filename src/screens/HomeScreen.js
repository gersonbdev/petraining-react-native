import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Title } from 'react-native-paper';

export const HomeScreen = () => {
    return (
        <View 
            style={styles.container}
        >
            <Avatar.Image
                size={192}
                source={require('../assets/img/profile/profile-avatar.jpg')}
                
            />
            <Title
                style={styles.titleProfile}
            >
                Goofy
            </Title>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },    
    imgProfile: {
    },
    titleProfile: {
        fontSize: 32
    }
});

