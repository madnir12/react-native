import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Do something with form data, such as send it to a server
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <View style={tw`w-4/5`}>
        <TextInput
          style={[
            tw`w-full bg-white rounded-md px-4 py-2 mb-4`,
            { outline: "none" },
          ]}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[
            tw`w-full bg-white rounded-md px-4 py-2 mb-6`,
            { outline: "none" },
          ]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
       <Button
       title='Submit'
       style={tw`text-white bg-blue-600`}
       onPress={handleSubmit}
       ></Button>
      </View>
    </View>
  );
};

export default Form;
