import React from 'react'
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import CategoryCard from './CategoryCard';
const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
                paddingHorizontal:15,
                paddingTop:10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 1"/>
        <CategoryCard imageUrl="https://links.papareact.com/wru" title="testing 2"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>
        <CategoryCard imageUrl="https://links.papareact.com/gn7" title="testing 3"/>

        {/* <Text>Hello from categories</Text> */}
    </ScrollView>
  )
}

export default Categories;
