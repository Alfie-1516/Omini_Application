import {
    SafeAreaView,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function App() {
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View className="flex-1 p-6">
          <View>
            <Image
              source={require("../assets/complete.png")}
              className="self-center mt-14 w-20 h-20"
              alt="Logo"
            />
            <Text className ="text-center text-3xl font-bold">Omni-App</Text>
            <Text className ="text-center text-l font-bold">
              Let's come together to share experiences
            </Text>
          </View>
          <View className ="flex-1 mt-14">
            <View className ="mb-8">
              {/* <Text style={styles.inputLabel}>Email Address</Text> */}
              <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
                className="h-14 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                value={form.email}
                placeholder="Username"
                onChangeText={(email) => setForm({ ...form, email })}
              />
            </View>
            <View className ="mb-8">
              {/* <Text style={styles.inputLabel}>Password</Text> */}
              <TextInput
                secureTextEntry
                className="h-14 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                value={form.password}
                placeholder="School Email"
                onChangeText={(password) => setForm({ ...form, password })}
              />
            </View>
            <View className ="mb-8">
              {/* <Text style={styles.inputLabel}>Password</Text> */}
              <TextInput
                secureTextEntry
                className="h-14 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                value={form.password}
                placeholder="Password"
                onChangeText={(password) => setForm({ ...form, password })}
              />
            </View>
            
            <TouchableOpacity style={{marginTop: 'auto'}}
            onPress={() => {
              //handle on press
            }}>
              <Text className="text-center text-xl font-semibold">Already have an account? 
                <Text style={{color:'#075eec'}}> Log in</Text>
              </Text>
            </TouchableOpacity>
            <View className="my-3 mb-14">
              <TouchableOpacity onPress={() => {
                //Handel on press action
                Alert.alert('Sucessfully logged in!')
              }}>
                <View className="bg-[#075eec] rounded-3xl items-center justify-center py-4 px-5">
                  <Text  className="text-xl font-semibold text-white">Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    /*container: {
      padding: 24,
      flex: 1,
    },
    headerImg: {
      width: 120,
      height: 120,
      alignSelf: "center",
    },
    title: {
      fontSize: 27,
      fontWeight: "700",
      color: "black",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 15,
      fontWeight: "500",
      color: "#000",
      textAlign: "center",
      marginTop: 12
    },
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: "600",
      marginBottom: 8,
    },
    inputControl: {
      height: 54,
      backgroundColor: "#fff",
      paddingVertical: 0,
      paddingHorizontal: 20,
      borderRadius: 7,
      borderStyle:  'solid',
      borderWidth: 2,
      borderColor: '#B2ACAC',
      fontSize: 15,
      fontWeight: "500",
    },
    form:{
      marginTop:54,
      flex: 1
    },
    formAction:{
      marginVertical: 24
    },
    formfooter:{
      textAlign: 'center',
    },
    btn:{
      backgroundColor: '#075eec',
      borderRadius: 8,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    btnText:{
      fontSize: 18,
      fontWeight: '600',
      color: '#fff'
    }*/
  });
  