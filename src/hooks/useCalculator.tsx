import { useRef, useState } from "react";

enum Operators {
  add, subtract, multiply, divide
}

const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0')
    setPreviousNumber('0')
  }

  const joinNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber)
      }else if (textNumber !== '0'  && number === '0') {
        setNumber(textNumber)
      }else if (textNumber !== '0'  && number === '-0') {
        setNumber('-' + textNumber)
      }else if (textNumber === '0' && number === '0') {
        return
      }else {
        setNumber(number + textNumber)
      }
    }else{
      setNumber(number + textNumber)
    }
  }

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    }else{
      setNumber('-' + number)
    }
  }

  const del = () => {
    let negative = ''
    let numberTemp = number

    if (number.includes('-')) {
      negative = '-'
      numberTemp = number.substring(1)
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.substring(0, numberTemp.length - 1))
    } else {
      setNumber('0')
    }
  }

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1))
    }else{
      setPreviousNumber(number)
    }
    setNumber('0')
  }

  // Operations

  const add = () => {
    changePreviousNumber()
    lastOperation.current = Operators.add
  }

  const subtract = () => {
    changePreviousNumber()
    lastOperation.current = Operators.subtract
  }

  const multiply = () => {
    changePreviousNumber()
    lastOperation.current = Operators.multiply
  }

  const divide = () => {
    changePreviousNumber()
    lastOperation.current = Operators.divide
  }

  // calculate

  const calculate = () => {
    const num1 = Number(number)
    const num2 = Number(previousNumber)

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`)
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`) 
        break;
      case Operators.divide:
        if (num2 === 0 && num1 !==0) {
          setNumber('Math Error')
        }else{
          setNumber(`${num2 / num1}`)
        }
        break;
    }
  }

  return {
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
  }
};

export default useCalculator;