import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Styles";
import { Header } from "./components/header/Header";
import { FormTask } from "./components/formtask/FormTask";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  const putTask = () => {
    console.log("Cadastrar");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>

        <TaskProvider>
          <View style={styles.container}>
            <Header />
            <FormTask />
            <TaskList />

            <StatusBar style="auto" />
          </View>
        </TaskProvider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
