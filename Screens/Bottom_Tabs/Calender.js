import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Calendar } from "react-native-calendars";
import Fab from "@mui/material/Fab";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SimpleLineIcons } from "@expo/vector-icons";
// border-[#D7C6C6]
// bg-[#075eec]

const App = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected_day, set_selected_day] = useState(null);
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
    { label: "1", value: "01" },
    { label: "2", value: "02" },
    { label: "3", value: "03" },
    { label: "4", value: "04" },
    { label: "5", value: "05" },
    { label: "6", value: "06" },
    { label: "7", value: "07" },
    { label: "8", value: "08" },
    { label: "9", value: "09" },
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
  const [events, setEvents] = useState([
    {
      title: "Breakfast with Drake",
      location: "Moodle Submission",
      month_value: "Oct", // August
      day: "Sat",
      day_value: "15",
      year_value: "2024",
      start_hr_val: "5", // 5 PM
      start_min_val: "30",
      start_ampm_val: "PM",
      checked:false
    },
  ]);
  const [tasked_day, set_tasked_day] = useState([]);
  const [title, set_title] = useState(null);
  const [location, set_location] = useState(null);
  const [day_value, setDay] = useState(null);
  const [month_value, setMonth] = useState(null);
  const [year_value, setYear] = useState(null);
  const [start_hr_val, set_start_hr] = useState(null);
  const [start_min_val, set_start_min] = useState(null);
  const [start_ampm_val, set_start_ampm] = useState(null);
  const [checked, set_checked] = useState(false);
  const markedDates = {};
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
  tasked_day.forEach((date) => {
    markedDates[date] = { marked: true, dotColor: "#075eec" };
  });
  const toggleChecked = (index) => {
    const updatedEvents = events.map((event, i) =>
      i === index ? { ...event, checked: !event.checked } : event
    );
    setEvents(updatedEvents); // Update the state with the modified event list
  };
  
  function submit_form() {
    const month = months.find((month) => month.label === month_value);
    day = find_day(
      parseInt(day_value),
      parseInt(month.value),
      parseInt(year_value)
    );
    const new_tasked_day = year_value + "-" + month.value + "-" + day_value;

    const newEvent = {
      title,
      location,
      month_value,
      day,
      day_value,
      year_value,
      start_hr_val,
      start_min_val,
      start_ampm_val,
      checked,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    set_tasked_day((prevTaskedDay) => [...prevTaskedDay, new_tasked_day]);
   
    
  }

  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-col h-screen">
        {/* This is the top nav bar */}
        <View className=" h-12 flex  w-screen  items-center border-solid border-b bg-white border-gray-400 pb-5">
          <View className=" flex flex-row w-11/12 justify-between">
            <View className="basis-2/6 items-start justify-center ">
              <TouchableOpacity
                onPress={() => navigation.navigate("Academics")}
              >
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
            markedDates={markedDates}
            onDayPress={(day) => {
              set_selected_day(day.day);
              console.log(day.day);
              console.log(markedDates);
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
                {events.map((temp_event, index) => {
                  if (selected_day == parseFloat(temp_event.day_value)) {
                    // Check if the day is Monday (you can replace "Monday" with any specific day or condition)
                    return (
                      <View
                        className="flex  h-fit w-11/12 border-solid border-b border-gray-500"
                        key={index}
                      >
                        <View className="h-24 flex flex-row items-center">
                          <View className="h-16">
                            <TouchableOpacity
                              onPress={() => {
                                toggleChecked(index); // Toggle checked state
                                console.log(temp_event.checked)
                              }}
                            >
                              {temp_event.checked ? (
                                <Feather
                                  name="circle"
                                  size={20}
                                  color="black"
                                />
                              ) : (
                                <Feather
                                  name="check-circle"
                                  size={20}
                                  color="black"
                                />
                              )}
                            </TouchableOpacity>
                          </View>

                          <View className="ml-5 h-16 w-5/6 justify-between">
                            <Text className="text-[#075eec] ">
                              {temp_event.title}
                            </Text>
                            <View className="justify-start items-center flex flex-row">
                              <Ionicons
                                name="time-outline"
                                size={15}
                                color="black"
                              />
                              <Text className="ml-2">
                                {temp_event.day} {temp_event.start_hr_val}:
                                {temp_event.start_min_val}{" "}
                                {temp_event.start_ampm_val}
                              </Text>
                            </View>
                            <View className="justify-start items-center flex flex-row">
                              <SimpleLineIcons
                                name="location-pin"
                                size={15}
                                color="black"
                              />
                              <Text className="ml-2">
                                {temp_event.location}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  } else {
                    return null; // Don't render anything if the condition doesn't match
                  }
                })}
              </ScrollView>
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
                  {/* Task TItle */}
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-normal  "
                    placeholder="Event Title"
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_title(text)}
                  />
                  {/* Task Location */}
                  <TextInput
                    className="h-8 bg-white px-5 rounded-md border border-[#B2ACAC] text-base font-medium"
                    placeholder="Event Location "
                    placeholderTextColor="#B2ACAC"
                    onChangeText={(text) => set_location(text)}
                  />
                  {/* Task Due Date */}
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
                  {/* Task Due time */}
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
                </View>
                <View className="h-56 w-full items-center">
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
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View className="left-3/4 bottom-28 h-16 w-16 bg-[#075eec] border-gray-400 flex justify-center items-center rounded-full">
            <AntDesign name="plus" size={40} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
