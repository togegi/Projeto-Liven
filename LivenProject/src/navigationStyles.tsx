import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HeaderButton from './components/HeaderBackButton/HeaderBackButton';

const navigationStyles: NativeStackNavigationOptions = {
  headerTintColor: '#404040',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: '#404040',
    fontFamily: 'GreycliffCF-Medium',
    fontSize: 14,
  },
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  headerLeft: () => <HeaderButton />,
};

export default navigationStyles;
