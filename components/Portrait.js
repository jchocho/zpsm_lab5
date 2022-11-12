import {useState} from 'react';
import calculator from '../util/calculator';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Row from './Row';
import ButtonPortrait from './ButtonPortrait';
import _ from 'lodash';

const Portrait = props => {
  const firstRow = [
    {
      text: 'AC',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '%',
      theme: 'secondary',
      onPress: () => props.handleTap('percentage'),
    },
    {
      text: '÷',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '/'),
    },
  ];
  const secondRow = [
    {
      text: '7',
      onPress: () => props.handleTap('number', 7),
    },
    {
      text: '8',
      onPress: () => props.handleTap('number', 8),
    },
    {
      text: '9',
      onPress: () => props.handleTap('number', 9),
    },
    {
      text: '×',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '*'),
    },
  ];
  const thirdRow = [
    {
      text: '4',
      onPress: () => props.handleTap('number', 4),
    },
    {
      text: '5',
      onPress: () => props.handleTap('number', 5),
    },
    {
      text: '6',
      onPress: () => props.handleTap('number', 6),
    },
    {
      text: '−',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '-'),
    },
  ];
  const fourthRow = [
    {
      text: '1',
      onPress: () => props.handleTap('number', 1),
    },
    {
      text: '2',
      onPress: () => props.handleTap('number', 2),
    },
    {
      text: '3',
      onPress: () => props.handleTap('number', 3),
    },
    {
      text: '+',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '+'),
    },
  ];
  const fifthRow = [
    {
      text: '0',
      size: 'double',
      onPress: () => props.handleTap('number', 0),
    },
    {
      text: ',',
      onPress: () => props.handleTap('number', '.'),
    },
    {
      text: '=',
      theme: 'accent',
      onPress: () => props.handleTap('equal'),
    },
  ];
  const rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(props.currentValue).toLocaleString()}
        </Text>
        {_.map(rows, row => (
          <Row>
            {_.map(row, button => (
              <ButtonPortrait
                text={button.text}
                onPress={button.onPress}
                theme={button.theme}
                size={button.size}
              />
            ))}
          </Row>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535555',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 80,
    textAlign: 'right',
    marginRight: 30,
    marginBottom: 10,
  },
});

export default Portrait;