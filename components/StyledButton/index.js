import React from 'react';
import {View, Text, Pressable} from 'react-native';
// import styles from '../CarItem/styles';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    //console.warn(type);
    const content = props.content;
    const onPress = props.onPress;

    const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    //console.warn("backgroundColor = ", backgroundColor);
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';


    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor
                }]}
                onPress={() => {
                    console.warn('Hey there')
                }}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    ); 
};

export default StyledButton;