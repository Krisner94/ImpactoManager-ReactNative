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
      <ButtonStyled mode="contained" onPress={onPress} style={styles.button}>
        {title}
      </ButtonStyled>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    width: '100%',
  },
});

export default ButtonComponent;