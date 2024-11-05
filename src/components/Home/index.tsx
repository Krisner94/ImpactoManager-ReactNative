import React from 'react';
import { useTheme, IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type NavigationProp = DrawerNavigationProp<any>;

export default function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          iconColor="white"
          size={20}
          onPress={openDrawer}
        />
      </View>
      <View style={styles.content}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});