import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeTwoScreen = ({ navigation }) => {
    return <View>
        <Text>Home Two Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Go to different page</Text>
        </TouchableOpacity>
    </View>
}

export default HomeTwoScreen;