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

import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SimpleLineIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Activites = ({ navigation }) => {
  

const [events, setEvents] = useState([
  {
    title: "Music Festival",
    description: "A fun-filled music event with live performances.",
    location: "Central Park, NY",
    host: "John Doe",
    giveaway: "Free T-shirts",
    fee:"Free",
    month_value: "Oct",   // August
    day: "Sat",
    day_value: "15",
    year_value: "2024",
    start_hr_val: "5",   // 5 PM
    start_min_val: "30",
    start_ampm_val: "PM",
    end_hr_val: "8",     // 8 PM
    end_min_val: "00",
    end_ampm_val: "PM"
  }
]);

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
  const [title, set_title] = useState(null);
  const [description, set_description] = useState(null);
  const [location, set_location] = useState(null);
  const [host, set_host] = useState(null);
  const [giveaway, set_giveaway] = useState(null);
  const[fee, set_fee] = useState(null)
  const [day_value, setDay] = useState(null);
  const [month_value, setMonth] = useState(null);
  const [year_value, setYear] = useState(null);
  const [start_hr_val, set_start_hr] = useState(null);
  const [start_min_val, set_start_min] = useState(null);
  const [start_ampm_val, set_start_ampm] = useState(null);
  const [end_hr_val, set_end_hr] = useState(null);
  const [end_min_val, set_end_min] = useState(null);
  const [end_ampm_val, set_end_ampm] = useState(null);
  function find_day(day, month, year) {
    named_day = "";

    if (month == 1) {
      month = 13;
      year--;
    }
    if (month == 2) {
      month = 14;
      year--;
    }
    let q = day;
    let m = month;
    let k = year % 100;
    let j = parseInt(year / 100, 10);
    let h =
      q +
      parseInt((13 * (m + 1)) / 5, 10) +
      k +
      parseInt(k / 4, 10) +
      parseInt(j / 4, 10) +
      5 * j;
    h = h % 7;
    switch (h) {
      case 0:
        named_day = "Sat";
        break;

      case 1:
        named_day = "Sun";
        break;

      case 2:
        named_day = "Mon";
        break;

      case 3:
        named_day = "Tue";
        break;

      case 4:
        named_day = "Wed";
        break;

      case 5:
        named_day = "Thur";
        break;

      case 6:
        named_day = "Fri";
        break;
    }
    console.log(named_day);
    return named_day;
  }
  function submit_form() {
    const month = months.find((month) => month.label === month_value);
    day = find_day(
      parseInt(day_value),
      parseInt(month.value),
      parseInt(year_value)
    );
    const newEvent = {
      title,
      description,
      location,
      host,
      fee,
      giveaway,
      month_value,
      day,
      day_value,
      year_value,
      start_hr_val,
      start_min_val,
      start_ampm_val,
      end_hr_val,
      end_min_val,
      end_ampm_val,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
  }

  return (
    <SafeAreaView className="flex h-screen bg-white">
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
            <FontAwesome name="user-circle" size={24} color="black" />
          </View>
        </View>
      </View>
      <View className="flex bg-white h-screen ">
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
        <ScrollView className="">
          {/* class for today*/}
          <View className=" h-fit items-center  ">
            <View className="flex  w-11/12 justify-start ">
              <View className="flex h-1/12 flex-row items-center justify-between mb-3 ">
                <Text className="text-1 font-medium">Today</Text>
              </View>
              {/* Today's events */}
              {events.map((temp_event, index) => (
                <View
                  className="flex  h-fit rounded-xl  justify-between items-center border-solid border border-[#989898] mb-5 "
                  key={index}
                >
                  {/* elements*/}

                  <View className="flex h-24 w-11/12 justify-evenly  mt-2 mb-2">
                    <Text className="text-black text-[15px] font-medium mb-2 ">
                      {temp_event.title}
                    </Text>

                    <Text className="text-neutral-700 text-[15px] font-normal ">
                      <AntDesign name="calendar" size={15} color="black" />{"  "}
                      {temp_event.day} {temp_event.month_value}{" "}
                      {temp_event.day_value} {temp_event.year_value}
                    </Text>
                    <Text className="text-neutral-700 text-[15px] font-normal ">
                      <Ionicons name="time-outline" size={15} color="black" />
                      {"  "}
                      {temp_event.start_hr_val}:{temp_event.start_min_val}{" "}
                      {temp_event.start_ampm_val} - {temp_event.end_hr_val}:
                      {temp_event.end_min_val} {temp_event.end_ampm_val}
                    </Text>

                    <Text className="text-neutral-700 text-[15px] font-normal ">
                      <SimpleLineIcons
                        name="location-pin"
                        size={15}
                        color="black"
                      />
                      {"  "}
                      {temp_event.location}
                    </Text>
                    <Text className="text-neutral-700 text-[15px] font-normal ">
                      10 Attendees
                    </Text>
                  </View>
                  {/* This code below is for the View more button */}
                  <View className="flex h-7 w-full items-center justify-center  border-solid border-[#989898] border-t ">
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ext_activites", {
                          cur_title: temp_event.title,
                          cur_host: temp_event.host,
                          cur_location: temp_event.location,
                          cur_day:temp_event.day,
                          cur_date:temp_event.day_value,
                          cur_month:temp_event.month_value,
                          cur_year:temp_event.year_value,
                          cur_start_hr: temp_event.start_hr_val,
                          cur_start_min: temp_event.start_min_val,
                          cur_start_amPm: temp_event.start_ampm_val,
                          cur_end_hr: temp_event.end_hr_val,
                          cur_end_min: temp_event.end_min_val,
                          cur_end_ampm: temp_event.end_ampm_val,
                          cur_description: temp_event.description,
                          cur_giveaway:temp_event.giveaway,
                          cur_fee:temp_event.fee

                        })
                      }
                    >
                      <View className="w-11/12  flex flex-row justify-between items-center ">
                        <Text className="text-blue-700">View More</Text>
                        <AntDesign name="right" size={15} color="black" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <Modal
          transparent={true}
          visible={modalVisible}
          className="h-screen w-screen"
        >
          <KeyboardAvoidingView className=" h-screen w-full  flex justify-center items-center">
            <View className="w-3/4 h-5/6 bg-white border-solid border rounded-xl justify-center items-center ">
              <ScrollView className="h-full w-11/12    flex ">
                <View className="w-full h-fit mb-3 items-end ">
                  <TouchableOpacity
                    className=" w-fit flex items-center justify-center rounded-2xl"
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
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-normal  "
                    placeholder="Event Title"
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_title(text)}
                  />

                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Host "
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_host(text)}
                  />
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Location "
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_location(text)}
                  />
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-medium "
                    placeholder="Event Giveaway "
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_giveaway(text)}
                  />
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-medium "
                    placeholder="Event Fee "
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_fee(text)}
                  />
                  <View className="flex ">
                    <Text>Event Date</Text>
                    <View className="flex flex-row">
                      <Dropdown
                        className="bg-white h-8 w-16 rounded-lg mr-2 border border-[#B2ACAC] p-1 "
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
                        className="bg-white h-8 w-20 rounded-lg mr-2 border border-[#B2ACAC] p-1 "
                        data={months}
                        labelField="label"
                        valueField="value"
                        placeholder="Month"
                        value={month_value}
                        onChange={(item) => {
                          setMonth(item.label);
                        }}
                      ></Dropdown>
                      <Dropdown
                        className="bg-white h-8 w-16 rounded-lg mr-2 border border-[#B2ACAC] p-1 "
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
                  <View className="flex flex-col">
                    <Text>Start Time</Text>
                    <View className="flex flex-row justify-start">
                      <Dropdown
                        className="bg-white h-8 w-20 rounded-lg mr-2 border border-[#B2ACAC] p-1"
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
                        className="bg-white h-8 w-16 rounded-lg mr-2 border border-[#B2ACAC] p-1 "
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
                        className="bg-white h-8 w-24 rounded-lg mr-2 border border-[#B2ACAC] p-1 "
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
                  </View>
                  <View className="flex flex-col">
                    <Text>End Time</Text>
                    <View className="flex flex-row">
                      <Dropdown
                        className="bg-white h-8 w-20 rounded-lg mr-2 border border-[#B2ACAC] p-1"
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
                        className="bg-white h-8 w-16 rounded-lg mr-2 border border-[#B2ACAC] p-1"
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
                        className="bg-white h-8 w-24 rounded-lg mr-2 border border-[#B2ACAC] p-1"
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
                  </View>
                  <TextInput
                    className="h-32 bg-white px-5 rounded-md border border-[#B2ACAC] text-left text-base font-medium"
                    placeholder="Event Description"
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_description(text)}
                  />
                </View>
                <View className="w-full items-center">
                  <TouchableOpacity
                    className=" bg-[#075eec] w-2/5 h-7 flex items-center justify-center rounded-2xl"
                    onPress={() => {
                      setModalVisible(false);
                      submit_form();
                    }}
                  >
                    <Text className="text-white">Add Event</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Activites;

const styles = StyleSheet.create({});
