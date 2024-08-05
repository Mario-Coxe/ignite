import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
  function hendleParticipantAdd() {
    console.log("Cliclout");
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

      <Participant name='Mário Coxe'/>
      <Participant name="Rosário Coxe"/>
      <Participant name="Naldo Coxe"/>
    </View>
  );
}
