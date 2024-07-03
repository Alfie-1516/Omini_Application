import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";

const Chat = () => {
  return (
    <SafeAreaView className="flex flex-col  justify-start  h-screen  items-center bg-white">
      {/* This is the top nav bar  */}
      <View className=" basis-1/12 flex  w-screen  items-center border-solid border-b bg-white border-[#989898] pb-5">
        <View className=" flex flex-row w-11/12 justify-between">
          <View className="basis-2/6 items-start justify-center ">
            <AntDesign name="book" size={24} color="black" />
          </View>
          <View className="basis-2/6 flex justify-center items-center pb-3">
            <Image
              source={require("../../assets/complete.png")}
              className="self-center  w-16 h-16 "
              resizeMode="contain"
              alt="Logo"
            />
          </View>
          <View className="basis-2/6 justify-center items-end">
            <FontAwesome name="user-circle" size={24} color="black" />
          </View>
        </View>
      </View>
      <ScrollView className="flex basis-4/5 bg-white ">
      <View className="basis-1/4 w-screen flex justify-center items-center">
          <View className="flex w-11/12 justify-between mt-3 mb-1">
              <Text className="text-3xl" >Chats</Text>
          </View>
      </View>
      <View className="flex justify-center items-center">
        <View className="flex flex-row bg-slate-300 rounded-lg items-center justify-between py-1 px-4 w-11/12 self-center">
          <Text className="text-slate-500 text-base font-medium font-['Inter'] flex-1">
              Search and Explore
          </Text>
        <FontAwesome name="map-pin" size={20} color="blue"/>
        </View>
      </View>

      </ScrollView>
      </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({})