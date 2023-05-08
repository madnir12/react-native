import React,{useState} from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const Popup = ({addAction,display,setDisplay}) => {
  const [name, setName] = useState(""),
  [detail,setDetail] = useState("");
  return (
    <View style={[styles.blackWall, {display: display ? "flex" : "none" }]}>
      <View style={[styles.popup]}>
        <Text style={[styles.textCenter]}>Add Task</Text>
        <TextInput
        value={name}
        onChangeText={(text)=> setName(text)}
          placeholderTextColor="white"
          style={[styles.nameInput]}
          placeholder="Enter Task Name"
        ></TextInput>
        <TextInput
        value={detail}
        onChangeText={(text)=>{
          setDetail(text)
        }}
          placeholderTextColor="white"
          style={[styles.detailInput]}
          placeholder="Enter Task Detail"
        ></TextInput>
        <View style={[styles.buttonsContainer]}>
          <TouchableOpacity>
            <Text onPress={()=>{
              setName("");
              setDetail("");
              setDisplay(false)
            }} style={[styles.cancel]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.add,{color: (name !== "" && detail !== "") ? "#49a6e9" : "rgba(225,225,225,0.4)"}]} onPress={()=> addAction(name,detail,setName,setDetail)}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Popup;
