import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "../styles/Styles";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={[styles.dark, styles.loginPageContainer]}>
      <View style={[styles.loginContainer]}>
        <Text style={[styles.dark, styles.textCenter, styles.signupHeading]}>
          Create Account
        </Text>
        <Text style={[styles.text, styles.textCenter, styles.dark]}>
          Please fill all fields
        </Text>
        <View style={[styles.inputContainer]}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.authButtonContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.linkText}>I have an account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnsm}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
