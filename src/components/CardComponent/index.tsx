import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import Aluno from '../Aluno';

interface CardComponentProps {
  item: Aluno;
  onPress?: () => void;
  onLongPress?: () => void;
  onDeletePress?: (id: string) => void;
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

const CardComponent = ({ item, onPress, onLongPress, onDeletePress }: CardComponentProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={onLongPress}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <CardContainer>
          <CardContentContainer>
            <ContentWrapper>
              <IconButton icon="account-circle" size={40} iconColor="#ff9100" />
              <TitleText>{item.nome}</TitleText>
            </ContentWrapper>
            <IconButton
              icon="eye"
              size={20}
              containerColor="#E8E8E8"
              iconColor="#ff9100"
              onPress={onPress}
            />
            <IconButton
              icon="delete"
              size={20}
              containerColor="#E8E8E8"
              iconColor="#ff0000"
              onPress={() => onDeletePress?.(item.id)}
            />
          </CardContentContainer>
        </CardContainer>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CardComponent;
