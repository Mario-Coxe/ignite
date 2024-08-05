import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";


export function Home() {
  const participants = [
    "Mauro",
    "Coxe",
    "José",
    "Filipe",
    "Mail",
    "Joana",
    "Jose",
    "Julia",
    "Frederico",
    "Stive",
    "Ronaldo",
  ];
  function hendleParticipantAdd() {
    console.log("Cliclout");
  }

  function handleParticipanteRemove(name: string) {
    console.log(`${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventData}>Sexta, 4 de Setembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />
        <TouchableOpacity style={styles.button} onPress={hendleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipanteRemove("Mário")}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguem chegou ainda no evento</Text>
        )}
      />
    </View>
  );
}
