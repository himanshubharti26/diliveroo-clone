import React from 'react'
import tw from "twrnc";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";

const CategoryCard = ({imageUrl, title}) => {
  return (
    <View>
        {/* Hi */}
        <TouchableOpacity style={tw`mx-1`}>
                <Image source={{
                        uri:imageUrl,
                }}
                style={tw`h-20 w-20 rounded`}/>
        <Text 
        style={tw`absolute bottom-1 left-1 text-white font-bold`}
        >
                {title}
                </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CategoryCard;