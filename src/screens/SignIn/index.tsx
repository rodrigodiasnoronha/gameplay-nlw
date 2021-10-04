import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, Button } from "react-native";
import LeeSinImage from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";

export default function SignIn() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Image resizeMode="stretch" source={LeeSinImage} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {"\n"}
            suas jogatinas {"\n"}
            facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entre com Discord" activeOpacity={0.8} />
        </View>
      </View>
    </>
  );
}
