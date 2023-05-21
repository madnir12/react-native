import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
// configration for notification
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
}); // ends setnotificationhandler function
// this function will use to push notification
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Login Successful",
      body: "You are now logged in!",
    },
    trigger: null, // Show immediately
  });
} // ends schedulePushNotification
// this function will use to get permision to push notifications
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'YOUR_PROJECT_ID' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
 // ends registerforpushnotificationsasync function
// this is validation schema for formik
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
}); // ends validationschema
// main functional component
const LoginPage = () => {
  const navigation = useNavigation(),
    [expoPushToken, setExpoPushToken] = useState(""),
    [notification, setNotification] = useState(false),
    notificationListener = useRef(),
    responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []); // ends useEfffect for initial notification permissions
  // this function will use to handle login
  const handleLogin = async (values) => {
    try {
      // Add your login logic here
      // For example, send a request to a server to verify credentials

      // Simulating a successful login for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Display success message and navigate to the next page
      Alert.alert("Success", "You have successfully logged in!");
      await schedulePushNotification();

      // Show a notification
     

      navigation.navigate("SecondPage");
    } catch (error) {
      // Handle login error
      Alert.alert("Error", "Invalid email or password");
      console.log(error);
    }
  }; // ends handlelogin function

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
  },
});

export default LoginPage;
