import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert, Platform, TouchableOpacity } from "react-native";
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { supabaseInstance } from "../../../service/supabaseService";
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  UpdateAluno: { aluno: any };
  Aluno: undefined;
};

type UpdateAlunoRouteProp = RouteProp<RootStackParamList, "UpdateAluno">;

const UpdateAluno = () => {
  const route = useRoute<UpdateAlunoRouteProp>();
  const { aluno } = route.params;

  const [formData, setFormData] = useState(aluno);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleInputChange = (name: string, value: string | Date | null) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData({ ...formData, dataNascimento: selectedDate.toISOString().split("T")[0] });
    }
  };

  const handleSubmit = async () => {
    try {
      const cleanedData = Object.keys(formData).reduce((acc, key) => {
        if (formData[key] !== null && formData[key] !== undefined) {
          acc[key] = formData[key];
        }
        return acc;
      }, {});
  
      console.log('Dados a serem enviados:', cleanedData);
  
      const { error } = await supabaseInstance.update(formData.id, cleanedData);
      
      if (error) {
        console.error('Erro detalhado:', error);
        Alert.alert("Erro", error.message || "Falha ao atualizar dados.");
        return;
      }
  
      Alert.alert("Sucesso", "Dados atualizados com sucesso", [
        {
          text: "OK",
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: "Alunos" }],
          })
        },
      ]);
    } catch (error: any) {
      console.error('Erro completo:', error);
      Alert.alert("Erro", error.message || "Falha ao atualizar dados.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Atualização de Aluno</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={formData.nome}
          onChangeText={(text) => handleInputChange("nome", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CPF"
          value={formData.cpf}
          onChangeText={(text) => handleInputChange("cpf", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={formData.sexo}
          onValueChange={(value) => handleInputChange("sexo", value)}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="MASCULINO" />
          <Picker.Item label="Feminino" value="FEMININO" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            {formData.dataNascimento ? new Date(formData.dataNascimento).toLocaleDateString() : "Selecione a data"}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.dataNascimento ? new Date(formData.dataNascimento) : new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={formData.telefone}
          onChangeText={(text) => handleInputChange("telefone", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={formData.cep}
          onChangeText={(text) => handleInputChange("cep", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rua:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a rua"
          value={formData.rua}
          onChangeText={(text) => handleInputChange("rua", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bairro:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o bairro"
          value={formData.bairro || ""}
          onChangeText={(text) => handleInputChange("bairro", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a cidade"
          value={formData.cidade}
          onChangeText={(text) => handleInputChange("cidade", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número da Casa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número da casa"
          value={formData.numeroCasa}
          onChangeText={(text) => handleInputChange("numeroCasa", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Responsável 01:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do responsável"
          value={formData.responsavel01}
          onChangeText={(text) => handleInputChange("responsavel01", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone Responsável 01:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone do responsável"
          value={formData.telefoneResponsavel01}
          onChangeText={(text) => handleInputChange("telefoneResponsavel01", text)}
        />
      </View>

      <Button title="Atualizar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default UpdateAluno;
