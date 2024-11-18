import React from 'react';
import { Card, Button, Text } from 'react-native-paper';

interface CardItem {
  id: string;
  title: string;
}

interface CardComponentProps {
  item: CardItem;
  onPress?: () => void
}

function CardComponent({ item, onPress }: CardComponentProps) {
  return (
    <Card style={{ margin: 10 }} onPress={onPress}> {/* Adicionando o onPress aqui */}
      <Card.Content>
        <Text variant='headlineMedium'>{item.title}</Text>
      </Card.Content>
      <Card.Actions>
        <Button icon={"pencil"} mode='elevated' onPress={() => console.log("Edit")}>Edit</Button>
        <Button icon={"delete"} mode='elevated' textColor='white' buttonColor='red' onPress={() => console.log("Delete")}>Delete</Button>
      </Card.Actions>
    </Card>
  )
}

export default CardComponent;