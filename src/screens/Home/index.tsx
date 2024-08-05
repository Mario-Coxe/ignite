import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventData}>Sexta, 4 de Setembro de 2022</Text>
    </View>
  );
}
