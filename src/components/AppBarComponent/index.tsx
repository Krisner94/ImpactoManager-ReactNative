import React from 'react';
import { Appbar, Text, useTheme } from 'react-native-paper';
import Title from '../Title';

export type AppbarProps = {}


export default function AppbarComponent({ }: AppbarProps) {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const {colors} = useTheme();

  return (    
    <Appbar.Header style={{backgroundColor: colors.primary}}>
      <Appbar.Content title={<Title title={"Impacto Manager"}/>}>
      </Appbar.Content>
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}
