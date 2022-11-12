import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Portrait from './components/Portrait';
import Landscape from './components/Landscape';
import SplashScreen from './components/SplashScreen';

const App: () => Node = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumber = value => {
    if (currentValue === '0') {
      setCurrentValue(`${value}`);
    } else {
      setCurrentValue(`${currentValue}${value}`);
    }
  };

  const handleEqual = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    if (operator === '/') {
      setCurrentValue(previous / current);
    }

    if (operator === '*') {
      setCurrentValue(previous * current);
    }

    if (operator === '+') {
      setCurrentValue(previous + current);
    }

    if (operator === '-') {
      setCurrentValue(previous - current);
    }

    if (operator === 'sqrt') {
      setCurrentValue(Math.pow(previous, 1 / current));
    }

    if (operator !== null) {
      setOperator(null);
      setPreviousValue(null);
    }
  };

  const calculator = (type, value) => {
    switch (type) {
      case 'number':
        return handleNumber(value);
      case 'operator':
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue('0');
        break;
      case 'equal':
        return handleEqual();
      case 'clear':
        setCurrentValue('0');
        setOperator(null);
        setPreviousValue(null);
        break;
      case 'posneg':
        currentValue: `${parseFloat(currentValue) * -1}`;
        break;
      case 'percentage':
        setCurrentValue(`${parseFloat(currentValue) * 0.01}`);
        break;
      default:
        break;
    }
  };

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const handleTap = (type, value) => {
    calculator(type, value);
  };

  const [portrait, setPortrait] = useState(isPortrait());

  Dimensions.addEventListener('change', () => {
    setPortrait(isPortrait());
  });

  return isPortrait() === true ? (
    <Portrait currentValue={currentValue} handleTap={handleTap} />
  ) : (
    <Landscape currentValue={currentValue} handleTap={handleTap} />
  );
};

export default App;
