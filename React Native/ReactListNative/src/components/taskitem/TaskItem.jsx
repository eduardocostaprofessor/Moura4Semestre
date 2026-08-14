import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskItem = ({ id, descricao }) => {
  const { deleteTask, setTaskValue, setEditMode } = useContext(TaskContext);

  return (
    <View style={TaskItemStyle.cardBox}>
      <Text style={TaskItemStyle.cardText}>{descricao}</Text>

      <TouchableOpacity
        style={[TaskItemStyle.cardButton, TaskItemStyle.CardButtonEditColor]}
        onPress={()=>{
          // preenche o state global, daí já aparece no formulário
          
          setTaskValue(descricao)// na verdade tem que chamar o putEditPreview
          setEditMode(true)//fazer isso dentro do putEditPreview
        }}
      >
        <Image source={require("../../../assets/edit.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[TaskItemStyle.cardButton, TaskItemStyle.CardButtonTrashColor]}
        onPress={() => {
          deleteTask(id);
        }}
      >
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};
// #31364D
