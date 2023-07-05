import React from 'react';
import{View,TouchableOpacity,Text,} from 'react-native'
import { styles } from '../utils/Styles';

const RadioBtn= ({onPress, selected, children}) => {
    return (
        <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
    );
}

export default RadioBtn;