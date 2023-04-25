import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "./FeaturedRow";

const HomeScreen = () => {
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center mx-4 space-x-2 px-2">
        <Image
          className="h-7 w-7 p-7 rounded-full bg-gray-300"
          source={{ uri: "https:/links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2  pb-2 mx-4 mt-2 px-2">
        <View className="flex-row flex-1  space-x-2 bg-gray-200 p-2 rounded-lg">
          <MagnifyingGlassIcon size={20} color={"#00CCBB"} />
          <TextInput placeholder="Search your Order" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon color={"#00CCBB"} />
      </View>

      {/*  scroll view */}
      <ScrollView className="bg-gray-100">
        <Categories />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Place your orders with us this is the sweetest food in the store"
        />

        <FeaturedRow
          id="123"
          title="Tasty Discounts"
          description="Place your orders with us this is the sweetest food in the store"
        />

        <FeaturedRow
          id="123"
          title="Offers Near You"
          description="Place your orders with us this is the sweetest food in the store"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
