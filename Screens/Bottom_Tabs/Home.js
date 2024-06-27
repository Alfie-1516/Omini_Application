import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-col justify-start overflow-y-scroll  h-full ">
        <View className="bg-gray-600 basis-1/12">
        </View>
        <View className="bg-red-900 basis-1/6">

        </View>
        <View className="bg-orange-500 basis-2/3">

        </View>
        <View className="bg-lime-500 basis-16">

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
