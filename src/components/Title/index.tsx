import React from 'react';
import { ColorSchemeName } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <Text variant='titleLarge' style={{ color: 'white'}} >{title}</Text>
  );
}

export default Title;