import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

export const TaskItem = () => {
  return (
    <View style={TaskItemStyle.cardBox}>
        <Text style={TaskItemStyle.cardText}>Estudar React Native</Text>
      
      <TouchableOpacity 
        style={
            [
                TaskItemStyle.cardButton, 
                TaskItemStyle.CardButtonEditColor
            ]
        }
    >
        <Image 
            source={require("../../../assets/edit.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[TaskItemStyle.cardButton, TaskItemStyle.CardButtonTrashColor]}
    >
        <Image 
            source={require("../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
// #31364D
