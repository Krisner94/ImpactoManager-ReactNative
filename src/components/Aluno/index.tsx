import React from 'react';
import { FlatList, View } from 'react-native';
import { Card, Button, Text, IconButton } from 'react-native-paper';
import IconBtn from '../IconBtn';
import { ButtonStyled } from "./buttonStyled";

const DATA = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 4' },
  { id: '5', title: 'Card 5' },
  { id: '6', title: 'Card 6' },
  { id: '7', title: 'Card 7' },
  { id: '8', title: 'Card 8' },
  { id: '9', title: 'Card 9' },
  { id: '10', title: 'Card 10' }
];

const App = () => {
  const renderItem = ({ item }) => (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Text variant='bodyMedium'>{item.title}</Text>
      </Card.Content>
      <ButtonStyled>
        <Button icon="pencil" mode='contained' onPress={() => console.log("Edit pressed")}>
          Edit
        </Button>
        <Button icon="delete" mode='contained' buttonColor='red' onPress={() => console.log("Delete pressed")}>
          Delete
        </Button>
      </ButtonStyled>
    </Card>
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

export default App;