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
import Svg, { Path } from "react-native-svg";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>

        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get("screen").width}
            viewBox="0 40 1440 320"
          >
            <Path
              fill="#00cba9"
              d="M0,256L48,250.7C96,245,192,235,288,197.3C384,160,480,96,576,69.3C672,43,768,53,864,90.7C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>

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
    flex: 1,
    marginTop: 30,
  },
  box: {
    backgroundColor: "#00cba9",
    height: 40,
  },
  textBox: {
    fontSize: 40,
    color: "#00cba9",
    borderColor: "#cccccc",
    borderBottomWidth: 3,
    marginHorizontal: 20,
  },
});
