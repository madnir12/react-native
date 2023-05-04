import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  bgBlack: {
    backgroundColor: "black",
  },
  textWhite: {
    color: "white",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  flex1: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textCenter: {
    textAlign: "center",
    fontSize: 20,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: 200,
    flexDirection: "row",
    gap: 20,
  },
  btnsm: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    backgroundColor: "#555555",
    color: "white",
    borderRadius: 7,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  textCenter: {
    textAlign: "center",
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomLine: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#555555",
  },
  // styles for login page
  loginPageContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  loginContainer: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#555555",
    paddingVertical: 10,
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  authButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1a73e8",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  linkText: {
    fontSize: 16,
    color: "#555555",
  },
  createAccountContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  // styles for sign up page
  signupContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  signupHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
}); // this will create an styleSheet
