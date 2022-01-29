import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {

  const {
    number,
    previousNumber,
    clear,
    positiveNegative,
    multiply,
    divide,
    del,
    joinNumber,
    subtract,
    calculate,
    add
  } = useCalculator()
  
  return(
    <View style={styles.calculatorContainer}>
        {
          (previousNumber !== '0') && 
          <Text style={styles.textSmallResult}> { previousNumber } </Text>
        }
        <Text
         style={styles.textResult}
         adjustsFontSizeToFit
         numberOfLines={1}
        > 
          { number }
        </Text>
        
        <View style={styles.calculatorRow } >
          <Button text='C' color='#9B9B9B' action={clear} />
          <Button text='+/-' color='#9B9B9B' action={positiveNegative} />
          <Button text='Del' color='#9B9B9B' action={del} />
          <Button text='/' color='#FF9427' action={divide} />
        </View>
        <View style={styles.calculatorRow } >
          <Button text='7' action={joinNumber} />
          <Button text='8' action={joinNumber} />
          <Button text='9' action={joinNumber} />
          <Button text='X' color='#FF9427' action={multiply} />
        </View>
        <View style={styles.calculatorRow } >
          <Button text='4' action={joinNumber} />
          <Button text='5' action={joinNumber} />
          <Button text='6' action={joinNumber} />
          <Button text='-' color='#FF9427' action={subtract} />
        </View>
        <View style={styles.calculatorRow } >
          <Button text='1'  action={joinNumber} />
          <Button text='2' action={joinNumber}  />
          <Button text='3' action={joinNumber}  />
          <Button text='+' color='#FF9427' action={add} />
        </View>
        <View style={styles.calculatorRow } >
          <Button text='0' action={joinNumber}  ancho />
          <Button text='.' action={joinNumber}  />
          <Button text='=' color='#FF9427'  action={calculate} />
        </View>
      </View>
    )
};

export default CalculatorScreen;
