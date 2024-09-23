import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Chat = ({navigation}) => {
  return (
    <SafeAreaView className="flex flex-col  justify-start  h-screen  items-center bg-white">
      {/* This is the top nav bar  */}
      <View className=" h-12 flex  w-screen  items-center border-solid border-b bg-white border-gray-400 pb-5">
        <View className=" flex flex-row w-11/12 justify-between">
          <View className="basis-2/6 items-start justify-center ">
            <TouchableOpacity onPress={() => navigation.navigate("Academics")}>
              <AntDesign name="book" size={24} color="black" />
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className="flex basis-4/5 bg-white ">
        <View className="basis-1/4 w-screen flex justify-center items-center">
          <View className="flex w-11/12 justify-between mt-3 mb-1">
            <Text className="text-3xl">Chats</Text>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <View className="flex flex-row bg-slate-300 rounded-lg items-center justify-between py-1 px-4 w-11/12 self-center mb-6">
            <Text className="text-slate-500 text-base font-medium  flex-1">
              Search and Explore
            </Text>
            <FontAwesome name="map-pin" size={20} color="blue" />
          </View>
        </View>
        <View className="flex mb-2">
          <View className="flex flex-row w-11/12">
            <View className="flex justify-center pb-3 ml-2 mr-2">
              <Image
                source={require("../../assets/Ellipse 13.jpg")}
                className="w-13 h-13"
                resizeMode="contain"
                alt="Logo"
              />
            </View>
            <View className=" flex bg-white justify-between w-11/12 self-center border-b-2 border-slate-200 ">
              <View className="justify-between flex flex-row">
                <Text className="text-neutral-800 text-base font-bold ">
                  CSCI 321 - 7XA
                </Text>
                <Text className="text-zinc-800 font-bold ">Jun 5</Text>
              </View>
              <View className="justify-between flex flex-row mb-2">
                <Text className="w-[245px] h-[21px] text-stone-600 text-base font-medium ">
                  Courtney Moree: I’m interested
                </Text>
                <View className="w-[15px] h-[15px] bg-blue-700 rounded-full mt-1">
                  <Text className="text-center text-white text-[10px] font-medium ">
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex mb-2">
          <View className="flex flex-row w-11/12">
            <View className="flex justify-center pb-3 ml-2 mr-2">
              <Image
                source={require("../../assets/Ellipse 13.jpg")}
                className="w-13 h-13"
                resizeMode="contain"
                alt="Logo"
              />
            </View>
            <View className=" flex bg-white justify-between w-11/12 self-center border-b-2 border-slate-200 ">
              <View className="justify-between flex flex-row">
                <Text className="text-neutral-800 text-base font-bold ">
                  CSCI 321 - 7XA
                </Text>
                <Text className="text-zinc-800 font-bold ">Jun 5</Text>
              </View>
              <View className="justify-between flex flex-row mb-2">
                <Text className="w-[245px] h-[21px] text-stone-600 text-base font-medium ">
                  Courtney Moree: I’m interested
                </Text>
                <View className="w-[15px] h-[15px] bg-blue-700 rounded-full mt-1">
                  <Text className="text-center text-white text-[10px] font-medium ">
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex mb-2">
          <View className="flex flex-row w-11/12">
            <View className="flex justify-center pb-3 ml-2 mr-2">
              <Image
                source={require("../../assets/Ellipse 13.jpg")}
                className="w-13 h-13"
                resizeMode="contain"
                alt="Logo"
              />
            </View>
            <View className=" flex bg-white justify-between w-11/12 self-center border-b-2 border-slate-200 ">
              <View className="justify-between flex flex-row">
                <Text className="text-neutral-800 text-base font-bold ">
                  CSCI 321 - 7XA
                </Text>
                <Text className="text-zinc-800 font-bold ">Jun 5</Text>
              </View>
              <View className="justify-between flex flex-row mb-2">
                <Text className="w-[245px] h-[21px] text-stone-600 text-base font-medium ">
                  Courtney Moree: I’m interested
                </Text>
                <View className="w-[15px] h-[15px] bg-blue-700 rounded-full mt-1">
                  <Text className="text-center text-white text-[10px] font-medium ">
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex mb-2">
          <View className="flex flex-row w-11/12">
            <View className="flex justify-center pb-3 ml-2 mr-2">
              <Image
                source={require("../../assets/Ellipse 13.jpg")}
                className="w-13 h-13"
                resizeMode="contain"
                alt="Logo"
              />
            </View>
            <View className=" flex bg-white justify-between w-11/12 self-center border-b-2 border-slate-200 ">
              <View className="justify-between flex flex-row">
                <Text className="text-neutral-800 text-base font-bold ">
                  CSCI 321 - 7XA
                </Text>
                <Text className="text-zinc-800 font-bold ">Jun 5</Text>
              </View>
              <View className="justify-between flex flex-row mb-2">
                <Text className="w-[245px] h-[21px] text-stone-600 text-base font-medium ">
                  Courtney Moree: I’m interested
                </Text>
                <View className="w-[15px] h-[15px] bg-blue-700 rounded-full mt-1">
                  <Text className="text-center text-white text-[10px] font-medium ">
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
