import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonStyled } from './buttonStyled';

interface ButtonComponentProps {
  title: string;
  onPress?: () => void;
}

function ButtonComponent({ title, onPress }: ButtonComponentProps) {
  return (
    <View style={styles.container}>
      <ButtonStyled mode="contained" onPress={onPress}>
        {title}
      </ButtonStyled>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});

export default ButtonComponent;
