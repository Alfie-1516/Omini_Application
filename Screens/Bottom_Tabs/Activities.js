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
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Activites = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const months = [
    { label: "Jan", value: "1" },
    { label: "Feb", value: "2" },
    { label: "Mar", value: "3" },
    { label: "Apr", value: "4" },
    { label: "May", value: "5" },
    { label: "Jun", value: "6" },
    { label: "Jul", value: "7" },
    { label: "Aug", value: "8" },
    { label: "Sep", value: "9" },
    { label: "Oct", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dec", value: "12" },
  ];
  const daysOfMonth = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" },
  ];
  const years = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
    { label: "2030", value: "2030" },
  ];
  const minutes = [
    { label: "00", value: "00" },
    { label: "05", value: "05" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
    { label: "25", value: "25" },
    { label: "30", value: "30" },
    { label: "35", value: "35" },
    { label: "40", value: "40" },
    { label: "45", value: "45" },
    { label: "50", value: "50" },
    { label: "55", value: "55" },
  ];
  const hours = [
    { label: "00", value: "00" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];
  const amPm = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
  ];
  const [day_value, setDay] = useState(null);
  const [month_value, setMonth] = useState(null);
  const [year_value, setYear] = useState(null);
  const [start_hr_val, set_start_hr] = useState(null);
  const [start_min_val, set_start_min] = useState(null);
  const [start_ampm_val, set_start_ampm] = useState(null);
  const [end_hr_val, set_end_hr] = useState(null);
  const [end_min_val, set_end_min] = useState(null);
  const [end_ampm_val, set_end_ampm] = useState(null);

  return (
    <SafeAreaView className="flex h-screen bg-black">
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
      <ScrollView className="flex bg-white h-screen ">
        {/* Events */}
        <View className="flex h-16 justify-center items-center ">
          <View className="flex flex-row w-11/12  justify-between items-center mt-3 mb-4">
            <Text className="text-3xl">Events</Text>
            <TouchableOpacity
              className="bg-[#075eec] h-5/6 w-1/4 flex items-center justify-center rounded-2xl"
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text className="text-white">Add Event</Text>
            </TouchableOpacity>
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
        <Modal
          transparent={true}
          visible={modalVisible}
          className="h-screen w-screen"
        >
          <View className=" h-full w-full  flex justify-center items-center">
            <View className="w-3/4 h-3/4 bg-slate-50 border-solid border rounded-xl justify-center items-center ">
              <View className="h-full w-11/12  items-center justify-center flex ">
                <View className="w-full h-fit mb-3 items-end">
                  <TouchableOpacity
                    className=" w-1/4  flex items-center justify-center rounded-2xl"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <AntDesign name="close" size={20} color="black" />
                  </TouchableOpacity>
                </View>
                <Text className="text-lg">Create Your Event</Text>
                <View className="h-4/5 w-full justify-evenly">
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-normal  "
                    placeholder="Event Title"
                  />

                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Host "
                  />
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Giveaway "
                  />
                  <View className="flex ">
                    <Text>Event Date</Text>
                    <View className="flex flex-row">
                      <Dropdown
                        className="bg-white h-9 w-2/6 rounded-lg "
                        data={daysOfMonth}
                        labelField="label"
                        valueField="value"
                        placeholder="Day"
                        value={day_value}
                        onChange={(item) => {
                          setDay(item.value);
                        }}
                      ></Dropdown>
                      <Dropdown
                        className="bg-white h-9 w-2/6 rounded-lg "
                        data={months}
                        labelField="label"
                        valueField="value"
                        placeholder="Month"
                        value={month_value}
                        onChange={(item) => {
                          setMonth(item.value);
                        }}
                      ></Dropdown>
                      <Dropdown
                        className="bg-white h-9 w-2/6 rounded-lg "
                        data={years}
                        labelField="label"
                        valueField="value"
                        placeholder="Year"
                        value={year_value}
                        onChange={(item) => {
                          setYear(item.value);
                        }}
                      ></Dropdown>
                    </View>
                  </View>
                  <View className="flex flex-row">
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg "
                      data={hours}
                      labelField="label"
                      valueField="value"
                      placeholder="Hour"
                      value={start_hr_val}
                      onChange={(item) => {
                        set_start_hr(item.value);
                      }}
                    ></Dropdown>
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg "
                      data={minutes}
                      labelField="label"
                      valueField="value"
                      placeholder="Min"
                      value={start_min_val}
                      onChange={(item) => {
                        set_start_min(item.value);
                      }}
                    ></Dropdown>
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg "
                      data={amPm}
                      labelField="label"
                      valueField="value"
                      placeholder="AM/PM"
                      value={start_ampm_val}
                      onChange={(item) => {
                        set_start_ampm(item.value);
                      }}
                    ></Dropdown>
                  </View>
                  <View className="flex flex-row">
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg"
                      data={hours}
                      labelField="label"
                      valueField="value"
                      placeholder="Hour"
                      value={end_hr_val}
                      onChange={(item) => {
                        set_end_hr(item.value);
                      }}
                    ></Dropdown>
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg"
                      data={minutes}
                      labelField="label"
                      valueField="value"
                      placeholder="Min"
                      value={end_min_val}
                      onChange={(item) => {
                        set_end_min(item.value);
                      }}
                    ></Dropdown>
                    <Dropdown
                      className="bg-white h-9 w-2/6 rounded-lg"
                      data={amPm}
                      labelField="label"
                      valueField="value"
                      placeholder="AM/PM"
                      value={end_ampm_val}
                      onChange={(item) => {
                        set_end_ampm(item.value);
                      }}
                    ></Dropdown>
                  </View>
                  <TextInput
                    className="h-32 bg-white px-5 rounded-md border-2 border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Description"
                  />
                </View>
                <View className="w-full items-center">
                  <TouchableOpacity
                    className=" bg-[#075eec] w-2/5 h-7 flex items-center justify-center rounded-2xl"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    <Text className="text-white">Add Event</Text>
                  </TouchableOpacity>
                </View>
                
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activites;

const styles = StyleSheet.create({});
