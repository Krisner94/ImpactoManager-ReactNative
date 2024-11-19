import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

interface CardComponentProps {
  item: {
    id: string;
    title: string;
  };
  onPress: () => void;
  onLongPress: () => void;
  delayLongPress?: number;
}

const CardContainer = styled(Card)`
  margin: 8px 16px;
  elevation: 4;
  border-radius: 12px;
`;

const CardContentContainer = styled(Card.Content)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const ContentWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled(Text)`
  font-size: 16px;
  margin-left: 12px;
  flex: 1;
`;

const CardComponent = ({ 
  item, 
  onPress, 
  onLongPress, 
  delayLongPress 
}: CardComponentProps) => {
  return (
    <Pressable
      onPress={() => {}}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <CardContainer>
        <CardContentContainer>
          <ContentWrapper>
            <IconButton
              icon="account-circle"
              size={40}
              iconColor="#ff9100"
            />
            <TitleText>{item.title}</TitleText>
          </ContentWrapper>
          <IconButton
            icon="pencil"
            size={20}
            containerColor="#E8E8E8"
            iconColor="#ff9100"
            onPress={onPress} // Abre o modal no botão Edit
          />
          <IconButton
            icon="delete"
            size={20}
            containerColor="#E8E8E8"
            iconColor="#ff0000"
            onPress={onPress} // Abre o modal no botão Edit
          />
        </CardContentContainer>
        
      </CardContainer>
    </Pressable>
  );
};

export default CardComponent;
