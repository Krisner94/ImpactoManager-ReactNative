import React from 'react';
import { Text } from 'react-native-paper';
import CardComponent from '../CardComponent';
import { FlatList, View } from 'react-native';
import FabComponent from '../FAB/FAB';

interface CardItem {
  id: string;
  title: string;
}

const DATA = [
  { id: '1', title: 'Professor 1' },
  { id: '2', title: 'Professor 2' },
  { id: '3', title: 'Professor 3' },
  { id: '4', title: 'Professor 4' },
  { id: '5', title: 'Professor 5' },
  { id: '6', title: 'Professor 6' },
  { id: '7', title: 'Professor 7' },
  { id: '8', title: 'Professor 8' },
  { id: '9', title: 'Professor 9' },
  { id: '10', title: 'Professor 10' }
];

interface ProfessorProps { }

function Professor({ }: ProfessorProps) {
  const renderItem = ({ item }: {item: CardItem}) => (
    <CardComponent item={item}/>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FabComponent nomeDaTela='NovoProfessor'/>
    </View>
  );
}
export default Professor;
