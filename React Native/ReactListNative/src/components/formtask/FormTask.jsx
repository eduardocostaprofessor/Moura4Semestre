import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { FormTaskStyle } from "./FormTaskStyle";
import { useState } from "react";

export const FormTask = () => {
  const [taskValue, setTaskValue] = useState("");

  const saveTask = () => {
    console.log(taskValue)
    // título da janela
    // texto da mensagem
    // array com os botões da janela (podendo ser mais de 1)
    Alert.alert("Título da Janela", `${taskValue} cadastrado com sucesso`, [
        // Botão 1
        {
            text: "Ok",
            onPress: ()=> {}
        },
    ])
  }
  return (
    <View style={FormTaskStyle.formTaskBox}>
      <TextInput
        style={FormTaskStyle.taskInputName}
        value={taskValue}
        onChangeText={(textoDigitado) => {
          setTaskValue(textoDigitado);
        }}
        placeholder="Adicione uma tarefa"
      />

      <TouchableOpacity 
        style={FormTaskStyle.taskButton}
        onPress={()=>{
            saveTask()
        }}
        >
        <Text style={FormTaskStyle.taskButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};
