import { Image, StatusBar, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";

export default function Register() {

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input >
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]} />
          <Input.Field placeholder="Código do ingresso" />
        </Input>

        <Input>
          <FontAwesome6
            name="envelope"
            size={20}
            color={colors.green[200]} />
          <Input.Field placeholder="E-mail" keyboardType="email-address" />
        </Input>

        <Button title="Realizar inscrição" />

        <Link 
        href="/"
        className="text-gray-100 text-base font-bold text-center by-8" >Já possui ingresso?</Link>
      </View>
    </View>
  )
}