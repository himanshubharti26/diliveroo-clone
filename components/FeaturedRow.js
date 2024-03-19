import React from "react";
import tw from "twrnc";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from "./RestrauntCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      style={tw`pt-4`}
      >
        {/* Restraunt cards */}
        <RestrauntCard
         id = "123"
         imageUrl = "https://links.papareact.com/gn7"
         title = "Shushi"
         rating = {4.5}
         genre = "Japanese"
         address = "123 Main street"
         short_description = "This is a short test description"
         dishes = {[]}
         long = {20}
         lat = {0}
        />
        <RestrauntCard
         id = "123"
         imageUrl = "https://links.papareact.com/gn7"
         title = "Shushi"
         rating = {4.5}
         genre = "Japanese"
         address = "123 Main street"
         short_description = "This is a short test description"
         dishes = {[]}
         long = {20}
         lat = {0}
        />
        <RestrauntCard
         id = "123"
         imageUrl = "https://links.papareact.com/gn7"
         title = "Shushi"
         rating = {4.5}
         genre = "Japanese"
         address = "123 Main street"
         short_description = "This is a short test description"
         dishes = {[]}
         long = {20}
         lat = {0}
        />
        <RestrauntCard
         id = "123"
         imageUrl = "https://links.papareact.com/gn7"
         title = "Shushi"
         rating = {4.5}
         genre = "Japanese"
         address = "123 Main street"
         short_description = "This is a short test description"
         dishes = {[]}
         long = {20}
         lat = {0}
        />
        <RestrauntCard
         id = "123"
         imageUrl = "https://links.papareact.com/gn7"
         title = "Shushi"
         rating = {4.5}
         genre = "Japanese"
         address = "123 Main street"
         short_description = "This is a short test description"
         dishes = {[]}
         long = {20}
         lat = {0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
