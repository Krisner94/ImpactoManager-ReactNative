import * as React from 'react';
import { Drawer, useTheme } from 'react-native-paper';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { ScrollView, StyleSheet } from 'react-native';

interface SideBarProps extends DrawerContentComponentProps {
}

const SideBar = (props: SideBarProps) => {
  const [active, setActive] = React.useState('');
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colors.background }
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      <Drawer.Section>
      <Drawer.Item
          label=""
          active={false}
        />
        {/* <Drawer.Item
          label="Home"
          active={active === 'home'}
          onPress={() => {
            setActive('home');
            props.navigation.navigate('Home');
          }}
        /> */}
        <Drawer.Item
          label="Alunos"
          active={active === 'aluno'}
          onPress={() => {
            setActive('aluno');
            props.navigation.navigate('Aluno');
          }}
        />
        <Drawer.Item
          label="Professores"
          active={active === 'professor'}
          onPress={() => {
            setActive('professor');
            props.navigation.navigate('Professor');
          }}
        />
        <Drawer.Item
          label="Turmas"
          active={active === 'turma'}
          onPress={() => {
            setActive('turma');
            props.navigation.navigate('Turma');
          }}
        />
      </Drawer.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
  },
});

export default SideBar;