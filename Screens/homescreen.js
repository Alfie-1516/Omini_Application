import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const App = ({ navigation }) => {
  return (
    <ImageBackground className="flex justify-end items-center h-screen w-full bg-white pb-5">
      <View className="flex flex-col justify-between items-center h-4/6  w-9/12 ">
        {/* logo view below */}
        <View className="flex h-2/5 justify-center items-center">
        <Image
            source={require("../assets/McneeseLogo.png")}
            resizeMode="contain"
            className="w-screen h-60"
          ></Image>
          <Text className="text-center text-2xl sm:bg-black md:bg-white text-[#002b84] font-normal md:w-1/5">
            Welcome to McNeese Easy Connect
          </Text>
        </View>
        {/* buttons view section */}
        <View className="h-1/5 w-full justify-between">
          <View className="items-center mb-2  bg-[#002b84] rounded-3xl ">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("signup");
              }}
              className = "w-full justify-center items-center"
            >
              <View className="h-12 justify-center">
                <Text className="text-xl font-normal text-white ">
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="items-center bg-[#002b84] rounded-3xl">
            <TouchableOpacity
              onPress={() => {
                //Handel on press action
                navigation.navigate("Login");
              }}
              className = "w-full justify-center items-center"
            >
              <View className="h-12 justify-center">
                <Text className="text-xl font-normal text-white ">
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;

