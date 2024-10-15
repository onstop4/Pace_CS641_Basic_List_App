import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.push('HomeTwo')}>
            <Text>Go to different page</Text>
        </TouchableOpacity>
    </View>
}

export default HomeScreen;