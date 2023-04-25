import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MapIcon, StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  title,
  id,
  imgUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="shadow-sm mr-4 bg-white mb-3">
      <Image className="h-36 rounded-sm w-64" source={{ uri: imgUrl }} />
      <View className="pb-2 px-3">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"orange"} opacity={5} size={22} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text>.{genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"black"} opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
