import { StyleSheet } from "react-native";
let secondColor = "#49a6e9";
export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flex: 1,
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  mainContainer: {
    position: "relative",
    paddingHorizontal: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: secondColor,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  mainHeading: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: secondColor,
    borderBottomStyle: "solid",
  },
  input: {
    fontSize: 18,
    fontWeight: "700",
  },
  icon: {
    position: "relative",
    top: 6,
  },
  listItemContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskListItem: {
          fontSize: 20,
          fontWeight: 700,
          marginTop: 10,
  },
  listContainer:{
          marginTop: 20,
  },
  nameSection:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          backgroundColor: secondColor,
          borderRadius: 8,
  },
  name:{
          backgroundColor: "transparent",
          fontSize: 30,
          fontWeight: 700,
          color: "white",
  },
  detailSection:{
          marginTop: 40,
  },
  detailTitle:{
          fontSize: 25,
          paddingVertical: 10,
          fontWeight: 700,
          borderBottomWidth: 2,
          borderBottomColor: secondColor,
          marginBottom: 10,
          color: "white",
  },
  detail:{
          fontSize: 20,
          fontWeight: 700,
  },
  blackWall:{
    flex: 1,
    width: "100%",
    left: 0,
    right: 0,
    top: 0, 
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  popup:{
    backgroundColor: "black",
    display: "flex",
    gap: 20,
    width: "100%",
    borderRadius: 8,
    padding: 20,
  },
  nameInput:{
    borderBottomWidth: 1,
    borderBottomColor: secondColor,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "white",
  },
  detailInput:{
    borderBottomWidth: 1,
    borderBottomColor: secondColor,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "white",
  },
  buttonsContainer:{
    dsplay: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancel:{
    color: secondColor,
  },
  add:{
    color: "rgba(225,225,225,0.4)",
  },
  textCenter:{
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  }

}); // ends styles
