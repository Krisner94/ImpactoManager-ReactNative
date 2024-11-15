import React from 'react';
import { Text } from 'react-native-paper';
import CardComponent from '../CardComponent';
import { FlatList, View } from 'react-native';

interface TurmaProps { }

interface CardItem {
  id: string;
  title: string;
}

const DATA = [
  { id: '1', title: 'Turma 1' },
  { id: '2', title: 'Turma 2' },
  { id: '3', title: 'Turma 3' }
];

function Turma({ }: TurmaProps) {
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
    </View>
  );
}

export default Turma;
