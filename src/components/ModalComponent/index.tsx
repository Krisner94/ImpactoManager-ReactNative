import React from 'react';
import { StyleSheet, View, Modal as RNModal } from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

interface ModalComponentProps {
  visible: boolean;
  onDismiss: () => void;
  item?: {
    id: string;
    nome: string;
  };
}

const ModalContainer = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(View)`
  width: 90%;
  background-color: #ffffff;
  border-radius: 16px;
  elevation: 5;
  padding: 20px;
`;

const TitleText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

function ModalComponent({ visible, onDismiss, item }: ModalComponentProps) {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
    >
      <ModalContainer>
        <ModalCard>
          <IconButton
            icon="close"
            size={24}
            iconColor="#ff9100"
            onPress={onDismiss}
            style={{ alignSelf: 'flex-end' }}
          />
          <TitleText>Detalhes do aluno {item?.nome}</TitleText>
          <Text style={styles.description}>
            Este modal contém informações detalhadas sobre {item?.nome}. 
          </Text>
          <ButtonContainer>
            <Button
              mode="contained"
              buttonColor="#ff9100"
              textColor="#ffffff"
              onPress={() => console.log("Edit")}
              style={styles.actionButton}
            >
              Edit
            </Button>
            <Button
              mode="outlined"
              textColor="#ff9100"
              onPress={onDismiss}
              style={styles.actionButton}
            >
              Close
            </Button>
          </ButtonContainer>
        </ModalCard>
      </ModalContainer>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6e6e6e',
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 8,
  },
});

export default ModalComponent;
