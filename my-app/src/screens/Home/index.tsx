import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native"
import { styles } from "./styles"

import { Participant } from "../components/Participant"

// iniciar no terminal com "npx expo start"
export function Home() {

    const participants = ["Rodrigo", "biro","Rodripgo", "bipro","Rodriigo", "birpo", 'uhfs', 'fhsd', 'fsdf']

    function handleParticipantAdd(){
        if(participants.includes("Rodrigo")){
            Alert.alert("Participante Existe", "Já existe participante com esse nome")
        }
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            }
        ])
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor={"#6b6b6b"}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}/>
                    )
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda.
                    </Text>
                )}
            />

        </View>
    )
}
