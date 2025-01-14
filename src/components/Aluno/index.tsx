import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import FabComponent from "../FAB/FAB";
import { supabaseInstance } from '../../service/supabaseService';
import { useNavigation } from '@react-navigation/native';

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

const Aluno = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const { data, error } = await supabaseInstance.getAll();
        if (error) throw error;
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

  const handleEditPress = () => {
    if (selectedAluno) {
      navigation.navigate('UpdateAluno', { aluno: selectedAluno });
      setModalVisible(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabaseInstance.delete(id);
      if (error) throw error;
      setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id));
    } catch (error) {
      console.error('Erro ao deletar aluno:', error);
    }
  };

  const renderItem = ({ item }: { item: Aluno }) => (
    <CardComponent
      item={item}
      onPress={() => handleCardPress(item)}
      onDeletePress={() => handleDelete(item.id)}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {alunos.length === 0 ? (
        <Text>Carregando lista de.</Text>
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
          onEditPress={handleEditPress}
        />
      )}
      <FabComponent nomeDaTela="NovoAluno" />
    </View>
  );
};

export default Aluno;
