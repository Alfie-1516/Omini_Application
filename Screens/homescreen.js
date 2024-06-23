import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image
  } from "react-native";
  import React from "react";
  
  
  const App = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1}}>
        
        <View className ="flex-1 justify-center items-center">
        <Image
            source={require("../assets/McneeseLogo.png")}
            className="self-center mt-21 w-21 h-21"
            alt="Logo"
          />
          <Text className ="text-center text-5xl font-bold">Mcneese Easy Connect</Text>
        </View>
        <View>
          <View className="items-center">
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate('signup');
              }}
            >
              <View className="bg-[#075eec] rounded-[29px] w-[340px] border items-center justify-center mb-7 py-1 px-5">
                <Text className="text-2xl font-semibold text-white">Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <TouchableOpacity
              onPress={() => {
                //Handel on press action
                navigation.navigate('Login');
              }}
            >
              <View className="bg-[#075eec] rounded-[29px] w-[340px] border items-center justify-center mb-8 py-1 px-5">
                <Text className="text-2xl font-semibold text-white">I already have an account </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mb-4">
            <Text className="text-center font-medium">
              Your privacy is our concern and we want you to know how we process
              your personal information. By continuing you confirm that you've
              read and accepted our {''}
            <Text className="underline underline-offset-4 text-center">
              Terms and Privacy Policy
            </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    /*container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    headerImg:{
      alignSelf: "center",
      marginTop: 30,
      width: 120,
      height: 120,
    },
    intro: {
      fontSize: 40,
      fontWeight: "700",
      textAlign: "center",
    },
    btn: {
      backgroundColor: "#075eec",
      borderRadius: 29,
      width: 350,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    btnText: {
      fontSize: 18,
      fontWeight: "600",
      color: "#fff",
    },
    terms: {
      textAlign: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 30,
      fontSize: 12,
      width: 320,
      lineHeight: 15,
    },
    btn_container: {
      alignItems: "center",
    },
    terms_container: {
      alignItems: "center",
    },*/
  });
  