import React from 'react';
import { TouchableOpacity, View ,Text} from 'react-native';
import { styles } from '../utils/Styles';


function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[styles.sectionContainer,{justifyContent:'center'}]}> 
            <TouchableOpacity onPress={()=> navigation.navigate('Displayusers')}>
                <Text style={styles.h1} > Welcome to Users List</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}


export default Home;