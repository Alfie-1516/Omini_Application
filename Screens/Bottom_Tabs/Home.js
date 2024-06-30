import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="flex flex-col  justify-start  h-screen  items-center bg-black">
      {/* This is the top nav bar  */}
      <View className=" basis-14 flex  w-screen  items-center border-solid border-b bg-white border-[#989898] ">
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
            <Text className=" text-3xl text-left">Hi Dushan</Text>
            <Text className="mt-3 text-sm">June 04, 2024</Text>
          </View>
        </View>
        {/* This class contains the dashboard, todays task, and on-campus live events */}
        <View className=" basis-2/3 w-screen h-screen items-center  ">
          <View className="flex  w-11/12 h-full justify-start">
            <View className="flex basis-1/12 flex-row items-center justify-between ">
              <Text className="text-base font-medium">DashBoard</Text>
              <AntDesign name="ellipsis1" size={24} color="black" />
            </View>
            {/* Todays task and Live events on campus */}
            {/* Today's Tasks */}
            <View className="flex  basis-1/4 rounded-xl  justify-between items-center border-solid border border-[#989898] overflow-hidden mb-5">
              {/* The code below is for the Todays task header */}
              <View className="basis-1/5 w-full justify-center items-center bg-[#075eec] ">
                <View className="w-11/12 justify-center ">
                  <Text className="text-white">Today's Task</Text>
                </View>
              </View>
              {/* Tasks view below shows the 2 task in todays tasks */}
              <View className="  flex basis-3/5  w-11/12 justify-between pt-3 ">
                <View className="basis-1/2  flex flex-row">
                  <View className="justify-start mr-3">
                    <AntDesign name="checksquareo" size={20} color="black" />
                  </View>
                  <View className="basis-4/5 w-4/5 justify-start">
                    <Text>Submit Lab Assignment</Text>
                    <View className="flex flex-row items-center">
                      <Ionicons name="time-outline" size={15} color="#075eec" />
                      <Text className="ml-2 text-[#075eec]">10:30 PM</Text>
                    </View>
                  </View>
                </View>
                <View className="basis-1/2  flex flex-row">
                  <View className="justify-start mr-3">
                    <AntDesign name="checksquareo" size={20} color="black" />
                  </View>
                  <View className="basis-4/5 w-4/5 justify-start">
                    <Text>Submit Lab Assignment</Text>
                    <View className="flex flex-row items-center">
                      <Ionicons name="time-outline" size={15} color="#075eec" />
                      <Text className="ml-2 text-[#075eec]">10:30 PM</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* This code below is for the View more button */}
              <View className="basis-1/5 w-full justify-center items-center border-solid border-[#989898] border-t rounded-t-l ">
                <View className="w-11/12 justify-between flex flex-row ">
                  <Text className="text-black">View More</Text>
                  <AntDesign name="right" size={15} color="black" />
                </View>
              </View>
            </View>
            {/* Live Events on Campus */}
            <View className="flex  basis-1/4 rounded-xl  justify-between items-center border-solid border border-[#989898] overflow-hidden mb-5">
              {/* The code below is for the Todays task header */}
              <View className="basis-1/5 w-full justify-center items-center bg-[#075eec] ">
                <View className="w-11/12 justify-center ">
                  <Text className="text-white">Today's Task</Text>
                </View>
              </View>
              {/* Tasks view below shows the 2 task in todays tasks */}
              <View className="  flex basis-3/5  w-11/12 justify-between pt-3 ">
                <View className="basis-1/2  flex flex-row">
                  <View className="justify-start mr-3">
                    <AntDesign name="checksquareo" size={20} color="black" />
                  </View>
                  <View className="basis-4/5 w-4/5 justify-start">
                    <Text>Submit Lab Assignment</Text>
                    <View className="flex flex-row items-center">
                      <Ionicons name="time-outline" size={15} color="#075eec" />
                      <Text className="ml-2 text-[#075eec]">10:30 PM</Text>
                    </View>
                  </View>
                </View>
                <View className="basis-1/2  flex flex-row">
                  <View className="justify-start mr-3">
                    <AntDesign name="checksquareo" size={20} color="black" />
                  </View>
                  <View className="basis-4/5 w-4/5 justify-start">
                    <Text>Submit Lab Assignment</Text>
                    <View className="flex flex-row items-center">
                      <Ionicons name="time-outline" size={15} color="#075eec" />
                      <Text className="ml-2 text-[#075eec]">10:30 PM</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* This code below is for the View more button */}
              <View className="basis-1/5 w-full justify-center items-center border-solid border-[#989898] border-t rounded-t-l ">
                <View className="w-11/12 justify-between flex flex-row ">
                  <Text className="text-black">View More</Text>
                  <AntDesign name="right" size={15} color="black" />
                </View>
              </View>
            </View>
            {/*  Start Reading Button*/}
            <View className=" h-1/6 justify-start items-center ">
              <View className="w-2/4 h-2/5 bg-[#075eec] flex justify-center items-center  rounded-2xl">
                <Text className="text-white">Start Reading</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
