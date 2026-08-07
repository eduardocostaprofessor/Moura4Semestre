import { StatusBar } from "expo-status-bar";
import {  Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Styles";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Meu App</Text>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


