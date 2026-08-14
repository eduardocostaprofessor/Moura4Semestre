import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { FormTaskStyle } from "./FormTaskStyle";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export const FormTask = () => {
  // const [taskValue, setTaskValue] = useState("");
  // puxa os dados do state global (TaskContext)
  const {
    postTask,
    taskValue,
    setTaskValue,
    editMode,
    setEditMode,
    setIdToEdit,
    idToEdit,
    putTaskConfirm,
  } = useContext(TaskContext);

  const saveTask = () => {
    console.log(taskValue);
    postTask(taskValue);

    // título da janela
    // texto da mensagem
    // array com os botões da janela (podendo ser mais de 1)
    Alert.alert("Título da Janela", `${taskValue} cadastrado com sucesso`, [
      // Botão 1
      {
        text: "Ok",
        onPress: () => {},
      },
    ]);
  };

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

      {/* SALVAR */}
      <TouchableOpacity
        style={FormTaskStyle.taskButton}
        onPress={() => {
          if (editMode) {//editar
            const salvou = putTaskConfirm({
              id: idToEdit,
              descricao: taskValue,
            });
            if (salvou)
              Alert.alert("Editar", `${taskValue} foi editado!`, [{ text: "Ok" }]);
            else 
              Alert.alert("Editar", `Erro ao editar`, [{ text: "Ok" }]);
          } else {
            saveTask();
          }
        }}
      >
        <Text style={FormTaskStyle.taskButtonText}>Salvar</Text>
      </TouchableOpacity>

      {/* CANCELAR */}
      {editMode && (
        <TouchableOpacity
          style={FormTaskStyle.taskButton}
          onPress={() => {
            setTaskValue(""); //zera o dado do formulário
            setEditMode(false); //sai do modo de edição
            setIdToEdit(0); // zera o id que iria editar
          }}
        >
          <Text style={FormTaskStyle.taskButtonText}>Cancelar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
