import { View, Text, Image } from "react-native";
import React from "react";
import { ChevronDownIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <View className="flex-row items-center mx-4 space-x-2">
      <Image
        className="h-7 w-7 p-7 rounded-full bg-gray-300"
        source={{ uri: "https:/links.papareact.com/wru" }}
      />
      <View>
        <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
        <Text className="font-bold text-xl">Current Location</Text>
      </View>

      <ChevronDownIcon size={20} color={"black"} />
    </View>
  );
};

export default HomeScreen;
