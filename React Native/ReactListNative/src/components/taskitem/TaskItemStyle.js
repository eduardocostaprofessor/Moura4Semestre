import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({
  cardBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#31364D",
  },
  cardText: {
    color: "#fff",
  },
  cardButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    
    borderWidth: 1,
    borderStyle: "solid"
  },

  CardButtonEditColor: {
    borderColor: "#9ABAEE",
  },
  CardButtonTrashColor: {
    borderColor: "#B75D63",
  }
});
