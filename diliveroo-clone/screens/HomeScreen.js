import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import {
  UserIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const featuredList = [
    {
      title: "Featured",
      description: "Paid placements from ",
      id: "baigan",
    },
    {
      title: "Featured",
      description: "Paid placements from ",
      id: "baigan",
    },
    {
      title: "Featured",
      description: "Paid placements from ",
      id: "baigan",
    },
    {
      title: "Featured",
      description: "Paid placements from ",
      id: "baigan",
    },
  ];
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      {/* <Text style={tw`text-red-500`}> */}
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-4r`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={tw`h-7 w-7`}
        />
        <View style={tw`flex-1 ml-2`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current location
            <ChevronDownIcon size={15} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View style={tw`flex-row items-center mx-2 pb-2`}>
        <View
          style={tw`flex-row flex-1 items-center p-2 mx-2 bg-gray-200 rounded`}
        >
          <MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            placeholder="Restraunts and cuisines"
            keyboardType="default"
            color="gray"
            style={tw`ml-2`}
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>
      {/* body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredList.map((item, index) => (
          <FeaturedRow
            key={index}
            id = {item.id}
            title={item.title}
            description={item.description}
            
          />
        ))}
      </ScrollView>
      {/* </Text> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
