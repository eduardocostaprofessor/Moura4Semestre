import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/header";
import {  SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      {/* npx expo install react-native-safe-area-context */}
      {/* Provê o suporte pra trabalhar com a área segura visível do dispositivo móvel */}
      <SafeAreaProvider>
        {/* container para o conteúdo na área segura */}
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Header />
   
            <Text style={styles.texto1}>Eduardo Mendes da Costa</Text>
            <Text style={styles.texto2}>José Da Silva 2S</Text>
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider> 
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,//ocupar a página intgeira
    backgroundColor: '#ffffff', 
    
  },
  container: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 3,
    borderStyle: "dotted",
     backgroundColor: '#ffffff',
  },
  texto1: {
    color: "red",
  },
  texto2: {
    color: "blue",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,//mesma coisa que 100%
//     backgroundColor: "#ccc",
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderColor: 'red'
//   },
// });
