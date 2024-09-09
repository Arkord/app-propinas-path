import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Text>Calculadora de propinas</Text>

        <View>
          <View>
            <TextInput
              style={styles.textBox}
              placeholder="Monto"
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              value="0"
            ></TextInput>
          </View>

          <View>
            <TextInput
              style={styles.textBox}
              placeholder="porcentaje"
              underlineColorAndroid="transparent"
              value="15"
            ></TextInput>
          </View>

          <TouchableOpacity onPress={() => alert("Calculando la propina!")}>
            <Text>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 30,
  },
  textBox: {
    fontSize: 40,
    color: "#00cba9",
    borderColor: "#cccccc",
    borderBottomWidth: 3,
    marginHorizontal: 20,
  },
});
