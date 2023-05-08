import React from "react";
import { Text, StatusBar, View } from "react-native";
import { styles } from "../styles/styles";
const Details = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={[styles.mainContainer, styles.flex, styles.dark]}>
      <StatusBar hidden={false} />
      <View style={[styles.nameSection]}>
        <Text style={[styles.name]}>{item.name}</Text>
      </View>
      <View style={[styles.detailSection]}>
          <Text style={[styles.detailTitle]}>Details</Text>
      <Text style={[styles.dark, styles.detail]}>{item.detail}</Text>
      </View>
    </View>
  );
};

export default Details;
