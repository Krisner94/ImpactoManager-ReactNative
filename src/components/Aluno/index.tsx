import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import FabComponent from "../FAB/FAB";
import { supabaseInstance } from '../../service/supabaseService';

interface AlunoProps {
  onDeletePress: () => void;
}

interface Aluno {
  id: string;
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: string;
  telefone: string;
  cep: string;
  rua: string;
  bairro: string | null;
  cidade: string;
  numeroCasa: string;
  complemento: string | null;
  responsavel01: string;
  telefoneResponsavel01: string;
  responsavel02: string;
  telefoneResponsavel02: string;
}

const Aluno = ({ onDeletePress }: AlunoProps) => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const { data, error } = await supabaseInstance.getAll();
        if (error) {
          throw error;
        }
        setAlunos(data || []);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchAlunos();
  }, []);

  const handleCardPress = (aluno: Aluno) => {
    setSelectedAluno(aluno);
    setModalVisible(true);
  };

  const handleModalDismiss = () => {
    setModalVisible(false);
    setSelectedAluno(null);
  };

  const renderItem = ({ item }: { item: Aluno }) => (
    <CardComponent
      item={item}
      onPress={() => handleCardPress(item)}
      onLongPress={() => {}}
      onDeletePress={onDeletePress}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {alunos.length === 0 ? (
        <Text>Não há alunos registrados.</Text>
      ) : (
        <FlatList
          data={alunos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      {selectedAluno && (
        <ModalComponent
          visible={modalVisible}
          onDismiss={handleModalDismiss}
          item={selectedAluno}
        />
      )}
      <FabComponent nomeDaTela="NovoAluno" />
    </View>
  );
};

export default Aluno;
