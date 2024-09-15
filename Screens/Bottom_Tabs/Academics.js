import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SimpleLineIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Activites = ({ navigation }) => {
  return (
    <SafeAreaView className="flex h-screen bg-white">
      {/* This is the top nav bar  */}
      <View className=" h-12 flex  w-screen  items-center border-solid border-b bg-white border-gray-400 pb-5">
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
        {/* This is the welcome Text and date */}
        <View className="basis-1/4 w-screen flex justify-center items-center ">
          <View className=" flex flex-col w-11/12 justify-end items-start mt-3 mb-4">
            <Text className=" text-3xl text-left">Academics</Text>
            <Text className="mt-3 text-sm">June 04, 2024</Text>
          </View>
        </View>
        {/* This view contains the section header and the sections */}
        <View className=" basis-2/3 w-screen h-screen items-center  ">
          <View className="flex  w-11/12 h-full justify-start">
            <View className="flex basis-1/12 flex-row items-center justify-between ">
              <Text className="text-base font-medium">Sections</Text>
              <AntDesign name="ellipsis1" size={24} color="black" />
            </View>
            {/* Todays task and Live events on campus */}
            <View className="flex w-full h-96 ">
              <View className="flex flex-row justify-between items-center basis-1/2 ">
                <TouchableOpacity onPress={() => navigation.navigate("Study_Room")}>
                  <View className=" flex justify-center items-center w-40 h-40 bg-[#6871FF] rounded-lg border border-gray-400">
                    <Image
                      source={require("../../assets/study_ico.png")}
                      className="self-center  w-16 h-16 "
                      resizeMode="contain"
                      alt="Logo"
                    />
                    <Text className="text-white mt-2 font-bold">
                      Study Room
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Quick_Exam")}>
                  <View className=" flex justify-center items-center w-40 h-40 bg-[#47BC88] rounded-lg border border-gray-400">
                    <Image
                      source={require("../../assets/exam_ico.png")}
                      className="self-center  w-16 h-16 "
                      resizeMode="contain"
                      alt="Logo"
                    />
                    <Text className="text-white mt-2 font-bold">
                      Quick Exam
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-between items-center basis-1/2 ">
                <TouchableOpacity onPress={() => navigation.navigate("Help_a_Friend")}>
                  <View className=" flex justify-center items-center w-40 h-40 bg-[#FEBB5E] rounded-lg border border-gray-400">
                    <Image
                      source={require("../../assets/question_answer_ico.png")}
                      className="self-center  w-16 h-16 "
                      resizeMode="contain"
                      alt="Logo"
                    />
                    <Text className="text-white mt-2 font-bold">
                      Help a Friend
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Need_a_Hand")}>
                  <View className=" flex justify-center items-center w-40 h-40 bg-[#EA66C6] rounded-lg border border-gray-400">
                    <Image
                      source={require("../../assets/question_ico.png")}
                      className="self-center  w-16 h-16 "
                      resizeMode="contain"
                      alt="Logo"
                    />
                    <Text className="text-white mt-2 font-bold">
                      Need a Hand
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activites;

const styles = StyleSheet.create({});
