import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/Styles";
const Login = ({ navigation }) => {
  return (
    <View style={[styles.dark, styles.loginPageContainer]}>
      <View style={styles.loginContainer}>
        <Text style={[styles.dark, styles.heading, styles.textCenter]}>
          Login
        </Text>
        <Text style={[styles.dark, styles.textCenter, styles.message]}>
          Enter login credentials:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="white"
            style={[styles.input]}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.authButtonContainer}>
          <Text style={styles.linkText}>Forgot Password?</Text>
          <TouchableOpacity>
            <Text style={[styles.btnsm]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.createAccountContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
          <Text style={styles.linkText}>Don't have an account? Create one</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
