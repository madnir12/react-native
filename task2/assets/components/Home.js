import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import { StatusBar } from "react-native";
import { monthlyExpenses } from '../data';

const Home = ({navigation}) => {
          const renderItem = ({ item }) => (
                    <View style={styles.item}>
                      <Text style={[styles.dark,styles.itemName]}>{item.name}</Text>
                      <Text style={[styles.dark,styles.itemPrice]}>{item.price}</Text>
                    </View>
                  );
  return (
    <View style={[styles.bgBlack, styles.flex1]}>
      <StatusBar backgroundColor="black" />
      <Text style={[styles.dark, styles.textCenter]}>P2PCloud</Text>
      <View style={[styles.flexCenter , styles.buttonContainer]}>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={[styles.btnsm]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
          <Text style={[styles.btnsm]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.dark,styles.container]}>
          <Text
          style={[styles.dark,styles.title,styles.bottomLine]}
          >Monthly Expenses</Text>
      <FlatList
        data={monthlyExpenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
    </View>
  );
};

export default Home;
