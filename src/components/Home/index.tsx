import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {Appearance, StyleSheet, Text, View} from 'react-native';
import SegmentedComponent from '../SegmentedComponent';
import Aluno from '../Aluno';



interface HomeProps {
}

export default function Home({}: HomeProps) {
  const {colors} = useTheme()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
      <Aluno/>
      <SegmentedComponent />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});