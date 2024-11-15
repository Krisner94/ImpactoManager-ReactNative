import React from 'react';
import { FlatList, View } from 'react-native';
import CardComponent from '../CardComponent';

interface CardItem {
  id: string;
  title: string;
}

const DATA = [
  { id: '1', title: 'Aluno 1' },
  { id: '2', title: 'Aluno 2' },
  { id: '3', title: 'Aluno 3' },
  { id: '4', title: 'Aluno 4' },
  { id: '5', title: 'Aluno 5' },
  { id: '6', title: 'Aluno 6' },
  { id: '7', title: 'Aluno 7' },
  { id: '8', title: 'Aluno 8' },
  { id: '9', title: 'Aluno 9' },
  { id: '10', title: 'Aluno 10' }
];

const Aluno = () => {
  const renderItem = ({ item }: { item: CardItem }) => (
    <CardComponent item={item} />
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
};

export default Aluno;