import React from "react";
import tw from "twrnc";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
const RestrauntCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow`}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={tw`h-36 w-64 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center `}>
          <StarIcon size={20} color={"green"} opacity={0.5} />
          <Text>
            <Text style={tw`text-green-500`}>{rating} </Text>. {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center `}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestrauntCard;
