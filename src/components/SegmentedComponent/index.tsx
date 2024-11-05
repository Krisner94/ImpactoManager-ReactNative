import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { RootStackParamList } from '../../../App';

const SegmentedComponent = () => {
  const [value, setValue] = React.useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (value === 'aluno') {
      navigation.navigate('Aluno');
    } else if (value === 'professor') {
      navigation.navigate('Professor');
    } else if (value === 'turma') {
      navigation.navigate('Turma');
    }
  }, [value, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: 'aluno', label: 'Aluno' },
          { value: 'professor', label: 'Professor', style: { width: 200 } },
          { value: 'turma', label: 'Turma' },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30
  },
});

export default SegmentedComponent;
