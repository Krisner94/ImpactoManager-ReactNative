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
    idade: number;
    dataNascimento: string;
    cpf: string;
    responsavel01: string;
    responsavel02: string;
  };
  onEditPress: () => void;
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

const ModalComponent = ({ visible, onDismiss, item, onEditPress }: ModalComponentProps) => {
  return (
    <RNModal animationType="slide" transparent visible={visible} onRequestClose={onDismiss}>
      <ModalContainer>
        <ModalCard>
          <IconButton icon="close" size={24} onPress={onDismiss} style={{ alignSelf: 'flex-end' }} />
          <TitleText>Detalhes do aluno</TitleText>
          {item && (
            <>
              <Text style={styles.detailText}>Nome: {item.nome}</Text>
              <Text style={styles.detailText}>Idade: {item.idade} anos</Text>
              <Text style={styles.detailText}>Data de Nascimento: {item.dataNascimento}</Text>
              <Text style={styles.detailText}>CPF: {item.cpf}</Text>
              <Text style={styles.detailText}>Responsável 1: {item.responsavel01}</Text>
              <Text style={styles.detailText}>Responsável 2: {item.responsavel02}</Text>
            </>
          )}
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={onEditPress} style={styles.button}>
              Editar
            </Button>
            <Button mode="outlined" onPress={onDismiss} style={styles.button}>
              Fechar
            </Button>
          </View>
        </ModalCard>
      </ModalContainer>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  detailText: {
    fontSize: 14,
    marginVertical: 4,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default ModalComponent;
