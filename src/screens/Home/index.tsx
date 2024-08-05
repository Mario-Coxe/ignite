import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participants) => (
          <Participant
            key={participants}
            name={participants}
            onRemove={() => handleParticipanteRemove("Mário")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
