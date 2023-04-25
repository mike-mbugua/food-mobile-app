import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard title="tests1" imgUrl="https:/links.papareact.com/gn7" />
      <CategoryCard title="tests2" imgUrl="https:/links.papareact.com/gn7" />
      <CategoryCard title="tests3" imgUrl="https:/links.papareact.com/gn7" />
      <CategoryCard title="tests2" imgUrl="https:/links.papareact.com/gn7" />
      <CategoryCard title="tests3" imgUrl="https:/links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Categories;
