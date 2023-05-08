import React, { useState } from "react";
import {
  StatusBar,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { styles } from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";
import Popup from "../compnents/Popup";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function Home({ navigation }) {
  const [display, setDisplay] = useState(false),
    [todoList, setTodoList] = useState([
      {
        id: 1,
        name: "Finish project",
        detail: "Add the final touches and submit",
      },
      {
        id: "2",
        name: "Buy groceries",
        detail: "Milk, eggs, bread, and cheese",
      },
      {
        id: "3",
        name: "Pay bills",
        detail: "Rent, electricity, and water bills",
      },
    ]),
    [searchValue,setSearchValue] = useState(""),
    addAction = (name, detail,setName,setDetail) => {
      if (name !== "" && detail !== "") {
        setTodoList((y) => {
          let newData = [...todoList];
          newData.push({ id: todoList.length + 1, name: name, detail: detail });
          return newData;
        });
        setName("");
        setDetail("");
        setDisplay(false);
      }
    },
    popupProps = { addAction, display, setDisplay };

  return (
    <>
      <View style={[styles.flex, styles.mainContainer, styles.dark]}>
        <StatusBar hidden={false} />
        <Text style={[styles.dark, styles.mainHeading]}>Todo Tasks</Text>
        <View style={[styles.inputContainer]}>
          <FontAwesome
            style={[styles.icon]}
            name="search"
            size={17}
            color={"white"}
          />
          <TextInput
          onChangeText={(text)=> setSearchValue(text)}
            placeholderTextColor="white"
            style={[styles.dark, styles.input]}
            placeholder="search your task"
          />
        </View>
        <View style={[styles.listContainer]}>
          <FlatList
            data={todoList}
            renderItem={({ item, index }) => (
              searchValue !== "" && (item.name.includes(searchValue) || item.detail.includes(searchValue)) ? <View style={[styles.listItemContainer]}>
                <TouchableOpacity>
                  <Text
                    onPress={() => navigation.navigate("Details", { item })}
                    style={[styles.dark, styles.taskListItem]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> setTodoList((y)=>{
                  let newData = [...y];
                  newData.splice(index,1);
                  return newData;
                })}>
                <MaterialCommunityIcons name="delete" size={20} color="white" />
                </TouchableOpacity>
              </View> : searchValue === "" && <View style={[styles.listItemContainer]}>
                <TouchableOpacity>
                  <Text
                    onPress={() => navigation.navigate("Details", { item })}
                    style={[styles.dark, styles.taskListItem]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> setTodoList((y)=>{
                  let newData = [...y];
                  newData.splice(index,1);
                  return newData;
                })}>
                <MaterialCommunityIcons name="delete" size={20} color="white" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <TouchableOpacity
          onPress={() => setDisplay(true)}
          style={[styles.addButton]}
        >
          <Text style={[styles.buttonText]}>+</Text>
        </TouchableOpacity>
      </View>
      <Popup {...popupProps} />
    </>
  );
}

export default Home;
