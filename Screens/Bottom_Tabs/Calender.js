import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SimpleLineIcons } from "@expo/vector-icons";
// border-[#D7C6C6]
// bg-[#075eec]

const App = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-black">
      <View className="flex flex-col h-screen">
        {/* This is the top nav bar */}
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
        <ScrollView className="flex basis-11/12 h-screen">
          <Calendar
            className="basis-1/2 "
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#2d4150",
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#075eec",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d3d3d3",
              arrowColor: "#075eec",
            }}
            markedDates={{
              "2024-06-17": { marked: true, dotColor: "#075eec" },
            }}
          />
          <View className="basis-1/2 bg-white justify-center items-center h-96">
            <View className="border-solid border w-11/12 h-4/5 border-gray-500 rounded-2xl flex overflow-hidden justify-start items-center">
              <View className="basis-1/6 bg-[#075eec] w-full flex flex-row justify-center items-center">
                <View className=" flex flex-row justify-between items-center w-11/12">
                  <Text className="text-white">Activites</Text>
                  <AntDesign name="ellipsis1" size={24} color="white" />
                </View>
              </View>
              {/* Daily tasks/ activites */}
              <ScrollView className="">
                <View className="flex  h-fit w-11/12 border-solid border-b border-gray-500">
                  <View className="h-24 flex flex-row items-center">
                    <View className="h-16">
                      <Feather name="circle" size={20} color="black" />
                    </View>

                    <View className="ml-5 h-16 w-5/6 justify-between">
                      <Text className="text-[#075eec] ">
                        Breakfast with Drake
                      </Text>
                      <View className="justify-start items-center flex flex-row">
                        <Ionicons name="time-outline" size={15} color="black" />
                        <Text className="ml-2">9:30 AM</Text>
                      </View>
                      <View className="justify-start items-center flex flex-row">
                        <SimpleLineIcons
                          name="location-pin"
                          size={15}
                          color="black"
                        />
                        <Text className="ml-2">Olive Garden 230 Texas</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex  h-fit w-11/12 border-solid border-b border-gray-500">
                  <View className="h-24 flex flex-row items-center">
                    <View className="h-16">
                      <Feather name="circle" size={20} color="black" />
                    </View>

                    <View className="ml-5 h-16 w-5/6 justify-between">
                      <Text className="text-[#075eec] ">
                        Breakfast with Drake
                      </Text>
                      <View className="justify-start items-center flex flex-row">
                        <Ionicons name="time-outline" size={15} color="black" />
                        <Text className="ml-2">9:30 AM</Text>
                      </View>
                      <View className="justify-start items-center flex flex-row">
                        <SimpleLineIcons
                          name="location-pin"
                          size={15}
                          color="black"
                        />
                        <Text className="ml-2">Olive Garden 230 Texas</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex  h-fit w-11/12 border-solid border-b border-gray-500">
                  <View className="h-24 flex flex-row items-center">
                    <View className="h-16">
                      <Feather name="circle" size={20} color="black" />
                    </View>

                    <View className="ml-5 h-16 w-5/6 justify-between">
                      <Text className="text-[#075eec] ">
                        Breakfast with Drake
                      </Text>
                      <View className="justify-start items-center flex flex-row">
                        <Ionicons name="time-outline" size={15} color="black" />
                        <Text className="ml-2">9:30 AM</Text>
                      </View>
                      <View className="justify-start items-center flex flex-row">
                        <SimpleLineIcons
                          name="location-pin"
                          size={15}
                          color="black"
                        />
                        <Text className="ml-2">Olive Garden 230 Texas</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              
            </View>
            
          </View>
          <View className="basis-1/2 bg-white justify-center items-center">
          <TouchableOpacity
              onPress={() => {
                //Handel on press action
                navigation.navigate("chat");
              }}
            >
            <View className = "w-12 h-12 bg-blue-700 rounded-full justify-center items-center">
                <Text className="text-center text-white text-4xl font-medium">+</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
