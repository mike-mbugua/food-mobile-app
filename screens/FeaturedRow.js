import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          title="Main Dish"
          id={123}
          imgUrl="https:/links.papareact.com/gn7"
          rating={4.5}
          genre="Chinnese"
          address="00100 Nairobi"
          short_description="Dishes like this will leave you licking your fingers give it atry"
          dishes={[]}
          long={1.2345}
          lat={1234565}
        />

        <RestaurantCard
          title="Main Dish"
          id={123}
          imgUrl="https:/links.papareact.com/gn7"
          rating={4.5}
          genre="Chinnese"
          address="00100 Nairobi"
          short_description="Dishes like this will leave you licking your fingers give it atry"
          dishes={[]}
          long={1.2345}
          lat={1234565}
        />

        <RestaurantCard
          title="Main Dish"
          id={123}
          imgUrl="https:/links.papareact.com/gn7"
          rating={4.5}
          genre="Chinnese"
          address="00100 Nairobi"
          short_description="Dishes like this will leave you licking your fingers give it atry"
          dishes={[]}
          long={1.2345}
          lat={1234565}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
