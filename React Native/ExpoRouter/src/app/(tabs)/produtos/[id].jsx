import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function DetalheProduto(){
    
    const {id} = useLocalSearchParams() 
    const router = useRouter()
    return (
        <View>
            <Text>Produto {id}</Text>
            
            <TouchableOpacity onPress={()=>{
                router.back()
            }}>
                <Text style={meuCSS.link}>Voltar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const meuCSS = StyleSheet.create({
    link: {
        color: "blue",
        fontSize: 16,
        marginVertical: 15
    }
})