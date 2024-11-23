import React, { useState } from 'react';
import { FlatList, View, Vibration } from 'react-native'; // Importe Vibration
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import SnackBarComponent from '../SnackBarComponent';

interface CardItem {
  id: string;
  title: string;
}

const DATA: CardItem[] = [
  { id: '1', title: 'Aline' },
  { id: '2', title: 'João' },
  { id: '3', title: 'Maria' },
  { id: '4', title: 'Pedro' },
  { id: '5', title: 'Ana' },
  { id: '6', title: 'Lucas' },
  { id: '7', title: 'Clara' },
  { id: '8', title: 'Gabriel' },
  { id: '9', title: 'Laura' },
  { id: '10', title: 'Mateus' },
  { id: '11', title: 'Julia' },
  { id: '12', title: 'Sophia' },
  { id: '13', title: 'Rafael' },
  { id: '14', title: 'Mariana' },
  { id: '15', title: 'Tiago' },
  { id: '16', title: 'Luana' },
  { id: '17', title: 'Vinícius' },
  { id: '18', title: 'Isabela' },
  { id: '19', title: 'Felipe' },
  { id: '20', title: 'Beatriz' }
];

interface AlunoProps {
  onDeletePress: () => void;
}

const Aluno = ({ onDeletePress }: AlunoProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const openModal = (item: CardItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleLongPress = (item: CardItem) => {
    Vibration.vibrate(100); // Vibração de 100ms
    openModal(item); // Abre o modal
  };

  const renderItem = ({ item }: { item: CardItem }) => (
    <CardComponent 
      item={item}
      onPress={() => openModal(item)} // Edit button
      onLongPress={() => handleLongPress(item)} // Long press
      delayLongPress={300} // 300ms
      onDeletePress={() => console.log("Teste")} // Passa a função de exclusão
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <ModalComponent 
        visible={modalVisible} 
        onDismiss={closeModal}
        item={selectedItem || undefined}
      />
    </View>
  );
};

export default Aluno;
