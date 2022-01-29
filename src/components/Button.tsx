import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string,
  color?: string,
  ancho?: boolean,
  action: (textNumber: string) => void
}

const Button = ({text, color, ancho, action}:Props) => {
  return(
    <TouchableOpacity
      onPress={() => action(text)}
      activeOpacity={0.6}
    >
      <View style={[ 
        styles.button ,
        (color) ? 
        {backgroundColor: color}
        : null ,
        (ancho) ? {width: 180} : {width: 80} 
        ]}>
        <Text style={[
          styles.buttonText, 
          (color === '#9B9B9B') ? 
          {color: 'black'} :
          {color: 'white'}  
          ]}> 
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default Button;
