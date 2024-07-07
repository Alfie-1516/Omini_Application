import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const Activites = () => {
  return (
    <SafeAreaView className="flex h-screen bg-white">
      {/* This is the top nav bar  */}
      <View className=" basis-1/12 flex  w-screen  items-center border-solid border-b bg-white border-[#989898]">
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
      <ScrollView className="flex  h-screen ">
        {/* Events */}
        <View className=" h-fit flex justify-center items-center ">
          <View className="flex flex-row w-11/12 justify-between items-center mt-3 mb-4">
            <Text className="text-3xl">Events</Text>
            <AntDesign name="ellipsis1" size={24} color="black" />
          </View>
        </View>
        {/* class for today*/}
        <View className=" h-52 items-center  ">
          <View className="flex  w-11/12 h-full justify-start ">
            <View className="flex h-1/12 flex-row items-center justify-between mb-3 ">
              <Text className="text-1 font-medium">Today</Text>
            </View>
            {/* Today's events */}
            <View className="flex  h-fit rounded-xl  justify-between items-center border-solid border border-[#989898]  ">
              {/* elements*/}

              <View className="flex basis-2/5 w-11/12 justify-center  mt-2">
                <Text className="text-blue-700 text-[15px] font-medium ">
                  SAT JUN 9 - 8:45 AM
                </Text>
                <Text className="text-black text-[15px] font-medium ">
                  Pick up soccer game
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  <FontAwesome name="map-pin" size={20} color="#656565" />{" "}
                  McNeese Recreational Center
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  10 Attendees
                </Text>
              </View>
              {/* This code below is for the View more button */}
              <View className="flex h-1/4 w-full items-center justify-center  border-solid border-[#989898] border-t ">
                <View className="w-11/12  flex flex-row justify-between items-center ">
                  <Text className="text-black">View More</Text>
                  <AntDesign name="right" size={15} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className=" h-52 items-center  ">
          <View className="flex  w-11/12 h-full justify-start ">
            <View className="flex h-1/12 flex-row items-center justify-between mb-3 ">
              <Text className="text-1 font-medium">Today</Text>
            </View>
            {/* Today's events */}
            <View className="flex  h-fit rounded-xl  justify-between items-center border-solid border border-[#989898]  ">
              {/* elements*/}

              <View className="flex basis-2/5 w-11/12 justify-center  mt-2">
                <Text className="text-blue-700 text-[15px] font-medium ">
                  SAT JUN 9 - 8:45 AM
                </Text>
                <Text className="text-black text-[15px] font-medium ">
                  Pick up soccer game
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  <FontAwesome name="map-pin" size={20} color="#656565" />{" "}
                  McNeese Recreational Center
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  10 Attendees
                </Text>
              </View>
              {/* This code below is for the View more button */}
              <View className="flex h-1/4 w-full items-center justify-center  border-solid border-[#989898] border-t ">
                <View className="w-11/12  flex flex-row justify-between items-center ">
                  <Text className="text-black">View More</Text>
                  <AntDesign name="right" size={15} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className=" h-52 items-center  ">
          <View className="flex  w-11/12 h-full justify-start ">
            <View className="flex h-1/12 flex-row items-center justify-between mb-3 ">
              <Text className="text-1 font-medium">Today</Text>
            </View>
            {/* Today's events */}
            <View className="flex  h-fit rounded-xl  justify-between items-center border-solid border border-[#989898]  ">
              {/* elements*/}

              <View className="flex basis-2/5 w-11/12 justify-center  mt-2">
                <Text className="text-blue-700 text-[15px] font-medium ">
                  SAT JUN 9 - 8:45 AM
                </Text>
                <Text className="text-black text-[15px] font-medium ">
                  Pick up soccer game
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  <FontAwesome name="map-pin" size={20} color="#656565" />{" "}
                  McNeese Recreational Center
                </Text>
                <Text className="text-neutral-700 text-[15px] font-normal ">
                  10 Attendees
                </Text>
              </View>
              {/* This code below is for the View more button */}
              <View className="flex h-1/4 w-full items-center justify-center  border-solid border-[#989898] border-t ">
                <View className="w-11/12  flex flex-row justify-between items-center ">
                  <Text className="text-black">View More</Text>
                  <AntDesign name="right" size={15} color="black" />
                </View>
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
