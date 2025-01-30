import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, Platform, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonComponent from "../ButtonComponent";

const NovoAluno = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    sexo: "",
    dataNascimento: new Date(),
    telefone: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    numeroCasa: "",
    complemento: "",
    responsavel01: "",
    telefoneResponsavel01: "",
    responsavel02: "",
    telefoneResponsavel02: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData({ ...formData, dataNascimento: selectedDate });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    Alert.alert("Dados do Aluno", JSON.stringify(formData, null, 2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1}}>
      <Text style={styles.title}>Cadastro de Novo Aluno</Text>

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
          keyboardType="numeric"
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
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.input}
            value={formData.dataNascimento.toLocaleDateString()}
            editable={false}
            pointerEvents="none"
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.dataNascimento}
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
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange("telefone", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={formData.cep}
          keyboardType="numeric"
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
          value={formData.bairro}
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
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange("numeroCasa", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Complemento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o complemento"
          value={formData.complemento}
          onChangeText={(text) => handleInputChange("complemento", text)}
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
        <Text style={styles.label}>Telefone do Responsável 01:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={formData.telefoneResponsavel01}
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange("telefoneResponsavel01", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Responsável 02:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do responsável"
          value={formData.responsavel02}
          onChangeText={(text) => handleInputChange("responsavel02", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone do Responsável 02:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={formData.telefoneResponsavel02}
          keyboardType="numeric"
          onChangeText={(text) => handleInputChange("telefoneResponsavel02", text)}
        />
      </View>

      <ButtonComponent title="Cadastrar Aluno" onPress={handleSubmit} />
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

export default NovoAluno;